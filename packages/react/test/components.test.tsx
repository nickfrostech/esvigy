import fs from "node:fs";
import path from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import * as Components from "../src";
import type { EsvigyProps } from "../src";

const SVG_DIR = path.resolve(__dirname, "../../svg/src");

// Dynamically discover all expected illustration components from packages/svg/src
const EXPECTED_ILLUSTRATIONS = fs
	.readdirSync(SVG_DIR)
	.filter(
		(f) =>
			f.endsWith(".svg") &&
			!f.startsWith("_") &&
			f !== "president_letter_head.svg",
	)
	.map((f) => path.basename(f, ".svg"))
	.sort((a, b) => a.localeCompare(b));

type IllustrationName = string;

const allIllustrationEntries = Object.entries(Components).filter(
	([name, value]) => typeof value === "function" && name !== "default",
) as [IllustrationName, React.ComponentType<EsvigyProps>][];

// Optional target component filter via COMPONENT env variable (e.g. COMPONENT=Search pnpm test)
const targetComponent = process.env.COMPONENT || process.env.TEST_COMPONENT;
const illustrationEntries = targetComponent
	? allIllustrationEntries.filter(
			([name]) => name.toLowerCase() === targetComponent.toLowerCase(),
	  )
	: allIllustrationEntries;

describe("@esvigy/react Component Exports", () => {
	it("exports all illustration components defined in packages/svg/src", () => {
		expect(allIllustrationEntries).toHaveLength(EXPECTED_ILLUSTRATIONS.length);
	});

	it("exports every expected illustration component by name", () => {
		const exportedNames = allIllustrationEntries.map(([name]) => name);
		for (const expected of EXPECTED_ILLUSTRATIONS) {
			expect(exportedNames).toContain(expected);
		}
	});

	it("ensures each exported illustration is a callable React functional component", () => {
		for (const [name, Component] of allIllustrationEntries) {
			expect(typeof Component).toBe("function");
			expect(Component.name).toBe(name);
		}
	});
});

describe("@esvigy/react Standard Component Contract", () => {
	describe.each(illustrationEntries)("Illustration: %s", (name, Component) => {
		it("renders a valid <svg> with standard attributes", () => {
			const html = renderToStaticMarkup(<Component />);

			// Must start with <svg and end with </svg>
			expect(html.startsWith("<svg")).toBe(true);
			expect(html.endsWith("</svg>")).toBe(true);

			// Required SVG namespaces & standard accessibility attributes
			expect(html).toContain('xmlns="http://www.w3.org/2000/svg"');
			expect(html).toContain('role="img"');
			expect(html).toContain(`aria-label="${name} illustration"`);
			expect(html).toContain('class="esvigy-svg"');
			expect(html).toContain("display:block");

			// Non-empty viewBox attribute
			expect(html).toMatch(/viewBox="[^"]+"/);

			// Author and source metadata attributes
			expect(html).toMatch(/data-author="[^"]+"/);
			expect(html).toMatch(/data-source="[^"]+"/);
		});

		it("does not render animation styles or animated flags by default", () => {
			const html = renderToStaticMarkup(<Component />);

			expect(html).not.toContain("<style");
			expect(html).not.toContain("esvigy-animated");
			expect(html).not.toContain('data-animated="true"');
		});

		it("renders animation <style> and class when animated=true", () => {
			const html = renderToStaticMarkup(<Component animated={true} />);

			// Contains embedded style tag with keyframes
			expect(html).toContain("<style>");
			expect(html).toContain("@keyframes");
			expect(html).toContain("prefers-reduced-motion: reduce");

			// Animated markers
			expect(html).toContain("esvigy-animated");
			expect(html).toContain('data-animated="true"');
		});

		it("respects animated=false explicitly", () => {
			const html = renderToStaticMarkup(<Component animated={false} />);

			expect(html).not.toContain("<style");
			expect(html).not.toContain("esvigy-animated");
			expect(html).not.toContain('data-animated="true"');
		});

		it("forwards custom className alongside esvigy-svg", () => {
			const html = renderToStaticMarkup(
				<Component className='custom-test-class another-class' />,
			);

			expect(html).toContain(
				'class="esvigy-svg custom-test-class another-class"',
			);
		});

		it("combines custom inline style with default display:block", () => {
			const html = renderToStaticMarkup(
				<Component style={{ opacity: 0.75, maxWidth: "400px" }} />,
			);

			expect(html).toContain("display:block");
			expect(html).toContain("opacity:0.75");
			expect(html).toContain("max-width:400px");
		});

		it("allows custom aria-label override for accessibility", () => {
			const customLabel = `Custom description for ${name}`;
			const html = renderToStaticMarkup(
				<Component aria-label={customLabel} />,
			);

			expect(html).toContain(`aria-label="${customLabel}"`);
			expect(html).not.toContain(`aria-label="${name} illustration"`);
		});

		it("forwards arbitrary SVG and data attributes", () => {
			const html = renderToStaticMarkup(
				<Component
					id={`test-id-${name}`}
					data-testid='esvigy-illustration'
					aria-hidden='false'
				/>,
			);

			expect(html).toContain(`id="test-id-${name}"`);
			expect(html).toContain('data-testid="esvigy-illustration"');
			expect(html).toContain('aria-hidden="false"');
		});
	});
});

describe("@esvigy/react Color Customization", () => {
	it("applies primary color to elements with fill or stroke", () => {
		const testColor = "#3B82F6";
		const { Search } = Components;
		const html = renderToStaticMarkup(<Search color={testColor} />);

		expect(html).toContain(`fill="${testColor}"`);
		expect(html).toContain(`stroke="${testColor}"`);
	});

	it("applies secondaryColor to elements marked with data-esvigy-secondary", () => {
		const testSecondary = "#EC4899";
		const { Search } = Components;
		const html = renderToStaticMarkup(
			<Search secondaryColor={testSecondary} />,
		);

		expect(html).toContain(`fill="${testSecondary}"`);
		expect(html).toContain('data-esvigy-secondary="true"');
	});

	it("uses default fallback secondary color when secondaryColor is not provided", () => {
		const { Search } = Components;
		const html = renderToStaticMarkup(<Search />);

		// When secondaryColor is transparent/omitted, data-esvigy-default color is used
		expect(html).toContain('data-esvigy-secondary="true"');
		expect(html).toContain('data-esvigy-default="#1E293B"');
		expect(html).toContain('fill="#1E293B"');
	});

	it("renders custom colors across multiple distinct components without errors", () => {
		const testColor = "#10B981";
		const testSecondary = "#F59E0B";

		for (const [name, Component] of illustrationEntries.slice(0, 10)) {
			const html = renderToStaticMarkup(
				<Component color={testColor} secondaryColor={testSecondary} />,
			);
			expect(html).toBeDefined();
			expect(html).toContain("<svg");
		}
	});
});
