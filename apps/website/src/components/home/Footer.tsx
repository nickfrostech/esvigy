/** @format */

import React from "react";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "36px",
        textAlign: "center",
        color: "var(--text-dim)",
        fontSize: "13px",
      }}
    >
      <p style={{ margin: "0 0 8px 0" }}>
        Released under the <strong style={{ color: "var(--text-main)", fontWeight: 500 }}>MIT License</strong>. Free for personal and commercial projects.
      </p>
      <p style={{ margin: 0 }}>
        Designed and maintained by{" "}
        <a
          href="https://github.com/nickfrostech"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--cyan-primary)", textDecoration: "none" }}
        >
          Nick Frost
        </a>
      </p>
    </footer>
  );
}
