<script setup lang="ts">
/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/vue generator.
 * Source: packages/svg/src/LogoEsvigy.svg
 */

import type { StyleValue } from "vue";

interface Props {
  color?: string;
  secondaryColor?: string;
  animated?: boolean;
  className?: string;
  style?: StyleValue;
}

withDefaults(defineProps<Props>(), {
  color: "currentColor",
  secondaryColor: "transparent",
  animated: false,
  className: "",
});
</script>

<template>
  <svg
    viewBox="0 0 2000.32 2000.31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="['esvigy-svg', animated ? 'esvigy-animated' : '', className]"
    :data-animated="animated ? 'true' : undefined"
    data-author="nick"
    data-source="https://github.com/nickfrostech"
    :style="[{ display: 'block' }, style]"
    role="img"
    aria-label="LogoEsvigy illustration"
  >
    <component is="style" v-if="animated">
@keyframes esvigy-head-bounce {
      0%, 100% {
        transform: translateY(0) scale(1, 1);
      }
      10% {
        transform: translateY(0) scale(1.12, 0.88);
      }
      35% {
        transform: translateY(-110px) scale(0.92, 1.08);
      }
      55% {
        transform: translateY(0) scale(1.08, 0.92);
      }
      68% {
        transform: translateY(-32px) scale(0.98, 1.02);
      }
      80% {
        transform: translateY(0) scale(1.02, 0.98);
      }
      88%, 95% {
        transform: translateY(0) scale(1, 1);
      }
    }

    svg.esvigy-animated .esvigy-shape-circle,
    svg[data-animated="true"] .esvigy-shape-circle {
      transform-box: fill-box;
      transform-origin: center bottom;
      animation: esvigy-head-bounce 2.4s ease-in-out infinite 0s;
    }

    svg.esvigy-animated .esvigy-shape-triangle,
    svg[data-animated="true"] .esvigy-shape-triangle {
      transform-box: fill-box;
      transform-origin: center bottom;
      animation: esvigy-head-bounce 2.4s ease-in-out infinite 0.2s;
    }

    svg.esvigy-animated .esvigy-shape-square,
    svg[data-animated="true"] .esvigy-shape-square {
      transform-box: fill-box;
      transform-origin: center bottom;
      animation: esvigy-head-bounce 2.4s ease-in-out infinite 0.4s;
    }

    @media (prefers-reduced-motion: reduce) {
      svg.esvigy-animated .esvigy-shape-circle,
      svg.esvigy-animated .esvigy-shape-triangle,
      svg.esvigy-animated .esvigy-shape-square,
      svg[data-animated="true"] .esvigy-shape-circle,
      svg[data-animated="true"] .esvigy-shape-triangle,
      svg[data-animated="true"] .esvigy-shape-square {
        animation: none;
      }
    }
    </component>
    <rect id="LogoEsvigy_Background" x="1.04" y="1.04" width="1998.24" height="1998.23" rx="242.09" ry="242.09" :fill="secondaryColor !== 'transparent' ? secondaryColor : '#111928'" data-esvigy-secondary="true" data-esvigy-default="#111928" />

  <path id="LogoEsvigy_S-shape-facing-up" d="M1768.78 1628.29l-2.18 -901.99 -267.84 -0.93 2.2 633.53 -183.29 0.63c-62.07,0.24 -120.56,-0.11 -182.08,1.09l-0.7 -145.59 -0.56 -489.65 -811.53 1.69c-63.83,1.34 -90.73,42.77 -91.27,90.46l1.76 726.17c1.07,51.55 29.15,85.26 77.61,85.82l190.44 0.66 -2.2 -633.53 183.29 -0.63c62.07,-0.23 120.55,0.12 182.08,-1.09l0.69 145.59 0.57 489.66 903.01 -1.89z" :fill="color" />

  <g id="LogoEsvigy_head-shapes">
    <circle class="esvigy-shape-circle" cx="367.5" cy="503.69" r="133.56" :fill="color" />
    <path id="LogoEsvigy_Triangle" class="esvigy-shape-triangle" d="M1000.05 370.14l66.11 134 67.44 133.11 -133.55 -0.89 -133.56 0.89 67.45 -133.11 66.11 -134z" :fill="color" />
    <rect class="esvigy-shape-square" x="1499.04" y="370.14" width="267.12" height="267.11" :fill="color" />
  </g>
  </svg>
</template>
