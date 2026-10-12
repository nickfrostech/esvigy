/**
 * Author: Flowbite
 * Source: https://flowbite.com
 *
 * Generated automatically by @memy/react generator.
 * Source: packages/svg/src/GamePad.svg
 */

import type { MemyProps } from "../types";

export const GamePad = ({
  color = "currentColor",
  secondaryColor = "transparent",
  animated = false,
  className = "",
  style,
  ...props
}: MemyProps) => {
  return (
    <svg
      viewBox="0 0 545 632"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={["memy-svg", animated ? "memy-animated" : "", className].filter(Boolean).join(" ")}
      data-animated={animated ? "true" : undefined}
      data-author="Flowbite"
      data-source="https://flowbite.com"
      style={{
        display: "block",
        ...style,
      }}
      role="img"
      aria-label="GamePad illustration"
      {...props}
    >
      {animated && (
        <style>
          {`
@keyframes memy-pad-float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-7px) rotate(0.8deg); }
    }
    @keyframes memy-stick-left-roll {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(3.5px, 2px); }
      50% { transform: translate(-1px, 4px); }
      75% { transform: translate(-3.5px, -1.5px); }
    }
    @keyframes memy-stick-right-roll {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(-3px, -2px); }
      50% { transform: translate(2px, -3.5px); }
      75% { transform: translate(3.5px, 2px); }
    }
    @keyframes memy-button-press {
      0%, 100% { transform: scale(1); opacity: 0.95; }
      15% { transform: scale(0.88); opacity: 0.55; }
      30% { transform: scale(1.06); opacity: 1; }
      45% { transform: scale(1); }
    }
    @keyframes memy-sparkle-twinkle {
      0%, 100% { transform: scale(0.8) rotate(0deg); opacity: 0.3; }
      50% { transform: scale(1.2) rotate(45deg); opacity: 0.95; }
    }

    svg.memy-animated .memy-gamepad-body,
    svg[data-animated="true"] .memy-gamepad-body {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-pad-float 4.2s ease-in-out infinite;
    }

    svg.memy-animated .memy-stick-left,
    svg[data-animated="true"] .memy-stick-left {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-stick-left-roll 3.6s ease-in-out infinite;
    }

    svg.memy-animated .memy-stick-right,
    svg[data-animated="true"] .memy-stick-right {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-stick-right-roll 4s ease-in-out infinite 0.3s;
    }

    svg.memy-animated .memy-btn-up,
    svg[data-animated="true"] .memy-btn-up {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-button-press 2.8s ease-in-out infinite 0s;
    }
    svg.memy-animated .memy-btn-right,
    svg[data-animated="true"] .memy-btn-right {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-button-press 2.8s ease-in-out infinite 0.7s;
    }
    svg.memy-animated .memy-btn-down,
    svg[data-animated="true"] .memy-btn-down {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-button-press 2.8s ease-in-out infinite 1.4s;
    }
    svg.memy-animated .memy-btn-left,
    svg[data-animated="true"] .memy-btn-left {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-button-press 2.8s ease-in-out infinite 2.1s;
    }

    svg.memy-animated .memy-act-a,
    svg[data-animated="true"] .memy-act-a {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-button-press 3.2s ease-in-out infinite 0.2s;
    }
    svg.memy-animated .memy-act-b,
    svg[data-animated="true"] .memy-act-b {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-button-press 3.2s ease-in-out infinite 0.9s;
    }
    svg.memy-animated .memy-act-x,
    svg[data-animated="true"] .memy-act-x {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-button-press 3.2s ease-in-out infinite 1.6s;
    }
    svg.memy-animated .memy-act-y,
    svg[data-animated="true"] .memy-act-y {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-button-press 3.2s ease-in-out infinite 2.3s;
    }

    svg.memy-animated .memy-sparkle-1,
    svg[data-animated="true"] .memy-sparkle-1 {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-sparkle-twinkle 2.8s ease-in-out infinite;
    }
    svg.memy-animated .memy-sparkle-2,
    svg[data-animated="true"] .memy-sparkle-2 {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-sparkle-twinkle 3.2s ease-in-out infinite 1.4s;
    }

    @media (prefers-reduced-motion: reduce) {
      svg.memy-animated .memy-gamepad-body,
      svg.memy-animated .memy-stick-left,
      svg.memy-animated .memy-stick-right,
      svg.memy-animated .memy-btn-up,
      svg.memy-animated .memy-btn-right,
      svg.memy-animated .memy-btn-down,
      svg.memy-animated .memy-btn-left,
      svg.memy-animated .memy-act-a,
      svg.memy-animated .memy-act-b,
      svg.memy-animated .memy-act-x,
      svg.memy-animated .memy-act-y,
      svg.memy-animated .memy-sparkle-1,
      svg.memy-animated .memy-sparkle-2,
      svg[data-animated="true"] .memy-gamepad-body,
      svg[data-animated="true"] .memy-stick-left,
      svg[data-animated="true"] .memy-stick-right,
      svg[data-animated="true"] .memy-btn-up,
      svg[data-animated="true"] .memy-btn-right,
      svg[data-animated="true"] .memy-btn-down,
      svg[data-animated="true"] .memy-btn-left,
      svg[data-animated="true"] .memy-act-a,
      svg[data-animated="true"] .memy-act-b,
      svg[data-animated="true"] .memy-act-x,
      svg[data-animated="true"] .memy-act-y,
      svg[data-animated="true"] .memy-sparkle-1,
      svg[data-animated="true"] .memy-sparkle-2 {
        animation: none !important;
      }
    }
          `}
        </style>
      )}
      
  <path d="M545 272.5C545 422.998 422.998 545 272.5 545C122.002 545 0 422.998 0 272.5C0 122.002 122.002 0 272.5 0C422.998 0 545 122.002 545 272.5Z" fill="url(#GamePad_paint0_linear_749_3)" data-memy-secondary="true" data-memy-default="#1F2A37"/>

  
  <g className="memy-gamepad-body">
    
    <path fillRule="evenodd" clipRule="evenodd" d="M367.45 194.57C361.595 199.108 354.867 203.5 347.458 203.5H265.5H255H173.042C165.633 203.5 158.905 199.108 153.05 194.57C148.718 191.212 142.775 188.164 135.184 187C133.083 186.678 130.855 186.5 128.5 186.5C109.4 186.5 87.3285 190.133 69.2632 209.21C65.101 213.605 61.1514 218.821 57.5 225C48.9687 239.438 31.1542 284.117 18.6274 335.257C14.7199 351.209 11.3269 367.789 8.8906 384.276C3.51649 420.645 2.79756 456.56 11.4804 484.273C15.0859 495.781 20.3125 505.875 27.5 514C33.25 520.5 39.0651 524.531 44.8769 526.493C85.5599 540.227 126.083 452.562 143 400.5C143.008 400.506 143.016 400.512 143.024 400.518C154.683 409.176 166.514 416 187 416C207.5 416 236 400.5 239 379.5H255H265.5H281.5C284.5 400.5 313 416 333.5 416C353.972 416 365.801 409.185 377.452 400.536C377.468 400.524 377.484 400.512 377.5 400.5C379.917 407.938 382.815 416.102 386.127 424.593C409.31 484.031 452.75 559.5 493 514C550.5 449 482.5 258 463 225C445.736 195.783 421.808 188.123 400.24 186.75C397.447 186.572 394.694 186.5 392 186.5C389.285 186.5 386.739 186.736 384.36 187.158C377.225 188.423 371.599 191.354 367.45 194.57Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M367.45 194.57C361.595 199.108 354.867 203.5 347.458 203.5H265.5H255H173.042C165.633 203.5 158.905 199.108 153.05 194.57C148.718 191.212 142.775 188.164 135.184 187C133.083 186.678 130.855 186.5 128.5 186.5C109.4 186.5 87.3285 190.133 69.2632 209.21C65.101 213.605 61.1514 218.821 57.5 225C48.9687 239.438 31.1542 284.117 18.6274 335.257C14.7199 351.209 11.3269 367.789 8.8906 384.276C3.51649 420.645 2.79756 456.56 11.4804 484.273C15.0859 495.781 20.3125 505.875 27.5 514C33.25 520.5 39.0651 524.531 44.8769 526.493C85.5599 540.227 126.083 452.562 143 400.5C143.008 400.506 143.016 400.512 143.024 400.518C154.683 409.176 166.514 416 187 416C207.5 416 236 400.5 239 379.5H255H265.5H281.5C284.5 400.5 313 416 333.5 416C353.972 416 365.801 409.185 377.452 400.536C377.468 400.524 377.484 400.512 377.5 400.5C379.917 407.938 382.815 416.102 386.127 424.593C409.31 484.031 452.75 559.5 493 514C550.5 449 482.5 258 463 225C445.736 195.783 421.808 188.123 400.24 186.75C397.447 186.572 394.694 186.5 392 186.5C389.285 186.5 386.739 186.736 384.36 187.158C377.225 188.423 371.599 191.354 367.45 194.57Z" fill="url(#GamePad_paint1_linear_749_3)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M367.45 194.57C361.595 199.108 354.867 203.5 347.458 203.5H265.5H255H173.042C165.633 203.5 158.905 199.108 153.05 194.57C148.718 191.212 142.775 188.164 135.184 187C133.083 186.678 130.855 186.5 128.5 186.5C109.4 186.5 87.3285 190.133 69.2632 209.21C65.101 213.605 61.1514 218.821 57.5 225C48.9687 239.438 31.1542 284.117 18.6274 335.257C14.7199 351.209 11.3269 367.789 8.8906 384.276C3.51649 420.645 2.79756 456.56 11.4804 484.273C15.0859 495.781 20.3125 505.875 27.5 514C33.25 520.5 39.0651 524.531 44.8769 526.493C85.5599 540.227 126.083 452.562 143 400.5C143.008 400.506 143.016 400.512 143.024 400.518C154.683 409.176 166.514 416 187 416C207.5 416 236 400.5 239 379.5H255H265.5H281.5C284.5 400.5 313 416 333.5 416C353.972 416 365.801 409.185 377.452 400.536C377.468 400.524 377.484 400.512 377.5 400.5C379.917 407.938 382.815 416.102 386.127 424.593C409.31 484.031 452.75 559.5 493 514C550.5 449 482.5 258 463 225C445.736 195.783 421.808 188.123 400.24 186.75C397.447 186.572 394.694 186.5 392 186.5C389.285 186.5 386.739 186.736 384.36 187.158C377.225 188.423 371.599 191.354 367.45 194.57Z" fill="url(#GamePad_paint2_linear_749_3)"/>

    
    <g className="memy-stick-left">
      <path d="M217 335C217 352.121 201.33 366 182 366C162.67 366 147 352.121 147 335C147 317.879 162.67 304 182 304C201.33 304 217 317.879 217 335Z" fill={color}/>
      <path d="M217 335C217 352.121 201.33 366 182 366C162.67 366 147 352.121 147 335C147 317.879 162.67 304 182 304C201.33 304 217 317.879 217 335Z" fill="url(#GamePad_paint13_linear_749_3)"/>
      <path d="M211 323.5C211 339.24 196.673 352 179 352C161.327 352 147 339.24 147 323.5C147 307.76 161.327 295 179 295C196.673 295 211 307.76 211 323.5Z" fill={color}/>
      <path d="M211 323.5C211 339.24 196.673 352 179 352C161.327 352 147 339.24 147 323.5C147 307.76 161.327 295 179 295C196.673 295 211 307.76 211 323.5Z" fill="url(#GamePad_paint14_linear_749_3)"/>
      <path d="M211 321.5C211 337.24 196.673 350 179 350C161.327 350 147 337.24 147 321.5C147 305.76 161.327 293 179 293C196.673 293 211 305.76 211 321.5Z" fill="white"/>
    </g>

    
    <g className="memy-stick-right">
      <path d="M303 335C303 352.121 318.67 366 338 366C357.33 366 373 352.121 373 335C373 317.879 357.33 304 338 304C318.67 304 303 317.879 303 335Z" fill={color}/>
      <path d="M303 335C303 352.121 318.67 366 338 366C357.33 366 373 352.121 373 335C373 317.879 357.33 304 338 304C318.67 304 303 317.879 303 335Z" fill="url(#GamePad_paint3_linear_749_3)"/>
      <path d="M309 323.5C309 339.24 323.327 352 341 352C358.673 352 373 339.24 373 323.5C373 307.76 358.673 295 341 295C323.327 295 309 307.76 309 323.5Z" fill={color}/>
      <path d="M309 323.5C309 339.24 323.327 352 341 352C358.673 352 373 339.24 373 323.5C373 307.76 358.673 295 341 295C323.327 295 309 307.76 309 323.5Z" fill="url(#GamePad_paint4_linear_749_3)"/>
      <path d="M309 321.5C309 337.24 323.327 350 341 350C358.673 350 373 337.24 373 321.5C373 305.76 358.673 293 341 293C323.327 293 309 305.76 309 321.5Z" fill="white"/>
    </g>

    
    <g className="memy-btn-up">
      <path d="M108 218C108 216.895 108.895 216 110 216H131C132.105 216 133 216.895 133 218V234.644C133 235.274 132.703 235.867 132.198 236.245L121.698 244.103C120.988 244.635 120.012 244.635 119.302 244.103L108.802 236.245C108.297 235.867 108 235.274 108 234.644V218Z" fill="url(#GamePad_paint9_linear_749_3)" fillOpacity="0.4"/>
      <path d="M108 216C108 214.895 108.895 214 110 214H131C132.105 214 133 214.895 133 216V232.644C133 233.274 132.703 233.867 132.198 234.245L121.698 242.103C120.988 242.635 120.012 242.635 119.302 242.103L108.802 234.245C108.297 233.867 108 233.274 108 232.644V216Z" fill="white"/>
    </g>
    <g className="memy-btn-down">
      <path d="M133 286C133 287.105 132.105 288 131 288L110 288C108.895 288 108 287.105 108 286L108 269.356C108 268.726 108.297 268.133 108.802 267.755L119.302 259.897C120.012 259.365 120.988 259.365 121.698 259.897L132.198 267.755C132.703 268.133 133 268.726 133 269.356L133 286Z" fill="url(#GamePad_paint10_linear_749_3)" fillOpacity="0.4"/>
      <path d="M133 284C133 285.105 132.105 286 131 286L110 286C108.895 286 108 285.105 108 284L108 267.356C108 266.726 108.297 266.133 108.802 265.755L119.302 257.897C120.012 257.365 120.988 257.365 121.698 257.897L132.198 265.755C132.703 266.133 133 266.726 133 267.356L133 284Z" fill="white"/>
    </g>
    <g className="memy-btn-right">
      <path d="M155 239C156.105 239 157 239.895 157 241L157 262C157 263.105 156.105 264 155 264L138.356 264C137.726 264 137.133 263.703 136.755 263.198L128.897 252.698C128.365 251.988 128.5 250.5 128.5 249.5L136.755 239.802C137.133 239.297 137.726 239 138.356 239L155 239Z" fill="url(#GamePad_paint11_linear_749_3)" fillOpacity="0.4"/>
      <path d="M155 237C156.105 237 157 237.895 157 239L157 260C157 261.105 156.105 262 155 262L138.356 262C137.726 262 137.133 261.703 136.755 261.198L128.897 250.698C128.365 249.988 128.365 249.012 128.897 248.302L136.755 237.802C137.133 237.297 137.726 237 138.356 237L155 237Z" fill="white"/>
    </g>
    <g className="memy-btn-left">
      <path d="M87 264C85.8954 264 85 263.105 85 262L85 241C85 239.895 85.8954 239 87 239L103.644 239C104.274 239 104.867 239.297 105.245 239.802L113.5 249.5C113.5 250.5 113.635 251.988 113.103 252.698L105.245 263.198C104.867 263.703 104.274 264 103.644 264L87 264Z" fill="url(#GamePad_paint12_linear_749_3)" fillOpacity="0.4"/>
      <path d="M87 262C85.8954 262 85 261.105 85 260L85 239C85 237.895 85.8954 237 87 237L103.644 237C104.274 237 104.867 237.297 105.245 237.802L113.103 248.302C113.635 249.012 113.635 249.988 113.103 250.698L105.245 261.198C104.867 261.703 104.274 262 103.644 262L87 262Z" fill="white"/>
    </g>

    
    <g className="memy-act-a">
      <path d="M387 277.509C387 285.512 394.387 292 403.5 292C412.613 292 420 285.512 420 277.509C420 269.505 412.613 263.017 403.5 263.017C394.387 263.017 387 269.505 387 277.509Z" fill="url(#GamePad_paint5_linear_749_3)" fillOpacity="0.4"/>
      <path d="M387 275.492C387 283.495 394.387 289.983 403.5 289.983C412.613 289.983 420 283.495 420 275.492C420 267.488 412.613 261 403.5 261C394.387 261 387 267.488 387 275.492Z" fill="white"/>
    </g>
    <g className="memy-act-x">
      <path d="M354 251.509C354 259.512 361.387 266 370.5 266C379.613 266 387 259.512 387 251.509C387 243.505 379.613 237.017 370.5 237.017C361.387 237.017 354 243.505 354 251.509Z" fill="url(#GamePad_paint6_linear_749_3)" fillOpacity="0.4"/>
      <path d="M354 249.492C354 257.495 361.387 263.983 370.5 263.983C379.613 263.983 387 257.495 387 249.492C387 241.488 379.613 235 370.5 235C361.387 235 354 241.488 354 249.492Z" fill="white"/>
    </g>
    <g className="memy-act-b">
      <path d="M420 251.509C420 259.512 427.387 266 436.5 266C445.613 266 453 259.512 453 251.509C453 243.505 445.613 237.017 436.5 237.017C427.387 237.017 420 243.505 420 251.509Z" fill="url(#GamePad_paint7_linear_749_3)" fillOpacity="0.4"/>
      <path d="M420 249.492C420 257.495 427.387 263.983 436.5 263.983C445.613 263.983 453 257.495 453 249.492C453 241.488 445.613 235 436.5 235C427.387 235 420 241.488 420 249.492Z" fill="white"/>
    </g>
    <g className="memy-act-y">
      <path d="M387 224.509C387 232.512 394.387 239 403.5 239C412.613 239 420 232.512 420 224.509C420 216.505 412.613 210.017 403.5 210.017C394.387 210.017 387 216.505 387 224.509Z" fill="url(#GamePad_paint8_linear_749_3)" fillOpacity="0.4"/>
      <path d="M387 222.492C387 230.495 394.387 236.983 403.5 236.983C412.613 236.983 420 230.495 420 222.492C420 214.488 412.613 208 403.5 208C394.387 208 387 214.488 387 222.492Z" fill="white"/>
    </g>

    
    <path fillRule="evenodd" clipRule="evenodd" d="M143.003 400.501L143.003 400.5C138.003 396 128.203 383.4 129.003 369C118.003 393.5 90.9036 449.3 70.5036 476.5C52.5848 500.392 33.4315 506.26 20.5039 504.515C22.5943 507.913 24.9216 511.084 27.5015 514C33.2515 520.5 39.0666 524.531 44.8785 526.493C85.5614 540.227 126.085 452.562 143.002 400.5L143.003 400.501Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M143.003 400.501L143.003 400.5C138.003 396 128.203 383.4 129.003 369C118.003 393.5 90.9036 449.3 70.5036 476.5C52.5848 500.392 33.4315 506.26 20.5039 504.515C22.5943 507.913 24.9216 511.084 27.5015 514C33.2515 520.5 39.0666 524.531 44.8785 526.493C85.5614 540.227 126.085 452.562 143.002 400.5L143.003 400.501Z" fill="#111928" fillOpacity="0.25"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M499.957 504.583C487.04 506.094 468.169 500.06 450.499 476.5C430.099 449.3 403 393.5 392 369C392.8 383.4 383 396 378 400.5L378.105 402.344C380.396 409.278 383.088 416.798 386.128 424.593C409.311 484.031 452.751 559.5 493.001 514C495.564 511.103 497.877 507.956 499.957 504.583Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M499.957 504.583C487.04 506.094 468.169 500.06 450.499 476.5C430.099 449.3 403 393.5 392 369C392.8 383.4 383 396 378 400.5L378.105 402.344C380.396 409.278 383.088 416.798 386.128 424.593C409.311 484.031 452.751 559.5 493.001 514C495.564 511.103 497.877 507.956 499.957 504.583Z" fill="#111928" fillOpacity="0.25"/>

    <path fillRule="evenodd" clipRule="evenodd" d="M239.001 379.5C239.401 368.7 238.333 345.667 237.5 335.5C237 351.5 225.501 373.931 201.001 384.5C180.601 393.3 158.834 385.833 150.501 381C142.902 376.6 133.335 367.167 129.501 363C127.894 373.135 128.781 392.874 140.275 408.599C141.241 405.821 142.15 403.116 143 400.5L143.024 400.518C154.683 409.176 166.514 416 187 416C207.5 416 236 400.5 239 379.5H239.001Z" fill="url(#GamePad_paint15_linear_749_3)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M380.225 408.591C391.714 392.868 392.599 373.133 390.993 363C387.159 367.167 377.592 376.6 369.993 381C361.66 385.833 339.893 393.3 319.493 384.5C294.993 373.931 283.494 351.5 282.994 335.5C282.161 345.667 281.093 368.7 281.493 379.5H281.502C284.502 400.5 313.002 416 333.502 416C353.974 416 365.803 409.185 377.454 400.536L377.502 400.5C378.351 403.113 379.26 405.816 380.225 408.591Z" fill="url(#GamePad_paint16_linear_749_3)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M157.044 197.502L157 197.5C164 203.833 179.3 221.9 184.5 243.5C191 270.5 194 275 201.5 275H257H263.5H319C326.5 275 329.5 270.5 336 243.5C341.2 221.9 356.5 203.833 363.5 197.5L363.456 197.502C358.598 200.83 353.235 203.5 347.459 203.5H265.5H255H173.042C167.265 203.5 161.902 200.83 157.044 197.502Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M237.501 335.516C236.995 351.697 225.888 374.309 201.199 384.959C180.597 393.846 158.656 386.308 150.25 381.433L150.752 380.567C159.012 385.359 180.605 392.754 200.803 384.041C225.114 373.554 236.007 351.303 236.501 335.484L237.501 335.516Z" fill="#111928" fillOpacity="0.3"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M282.906 335.516C283.411 351.697 294.518 374.309 319.207 384.959C339.81 393.846 361.75 386.308 370.156 381.433L369.655 380.567C361.394 385.359 339.801 392.754 319.603 384.041C295.293 373.554 284.399 351.303 283.905 335.484L282.906 335.516Z" fill="#111928" fillOpacity="0.3"/>

    
    <path fillRule="evenodd" clipRule="evenodd" d="M357.885 561.505C375.145 531.61 364.902 493.384 335.008 476.125C305.113 458.865 266.887 469.108 249.627 499.002L222.196 546.515L215.598 557.943L209.001 569.369L226.423 564.193L226.574 564.28L231.119 581.245L248.085 576.699L248.315 576.832L252.86 593.797L269.826 589.251L270.055 589.384L274.601 606.349L291.5 601.821L296.027 618.72L312.993 614.174L313.031 614.196L317.259 631.872L323.856 620.446L330.454 609.018L357.885 561.505Z" fill="#374151"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M357.885 561.505C375.145 531.61 364.902 493.384 335.008 476.125C305.113 458.865 266.887 469.108 249.627 499.002L222.196 546.515L215.598 557.943L209.001 569.369L226.423 564.193L226.574 564.28L231.119 581.245L248.085 576.699L248.315 576.832L252.86 593.797L269.826 589.251L270.055 589.384L274.601 606.349L291.5 601.821L296.027 618.72L312.993 614.174L313.031 614.196L317.259 631.872L323.856 620.446L330.454 609.018L357.885 561.505Z" fill="url(#GamePad_paint17_linear_749_3)" fillOpacity="0.7"/>
    <path d="M317.66 542.289C313.249 549.929 315.867 559.698 323.507 564.109C331.146 568.52 340.915 565.902 345.326 558.262C349.737 550.622 347.119 540.854 339.48 536.443C331.84 532.032 322.071 534.649 317.66 542.289Z" fill="#374151"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M324.507 562.377C317.823 558.518 315.534 549.972 319.392 543.289C323.251 536.606 331.796 534.316 338.48 538.175C345.163 542.033 347.452 550.579 343.594 557.262C339.735 563.945 331.19 566.235 324.507 562.377ZM323.507 564.109C315.867 559.698 313.249 549.929 317.66 542.289C322.071 534.649 331.84 532.032 339.48 536.443C347.119 540.854 349.737 550.622 345.326 558.262C340.915 565.902 331.146 568.52 323.507 564.109Z" fill="#6B7280"/>
    <path d="M327.282 547.845C325.94 550.17 326.736 553.143 329.061 554.486C331.387 555.828 334.36 555.031 335.702 552.706C337.045 550.381 336.248 547.408 333.923 546.065C331.598 544.723 328.624 545.52 327.282 547.845Z" fill="#111928"/>
    <path d="M283.98 522.844C279.57 530.484 282.187 540.253 289.827 544.663C297.467 549.074 307.236 546.457 311.646 538.817C316.057 531.177 313.44 521.408 305.8 516.997C298.16 512.587 288.391 515.204 283.98 522.844Z" fill="#374151"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M290.827 542.931C284.144 539.073 281.854 530.527 285.712 523.844C289.571 517.161 298.117 514.871 304.8 518.729C311.483 522.588 313.773 531.134 309.914 537.817C306.056 544.5 297.51 546.79 290.827 542.931ZM289.827 544.663C282.187 540.253 279.57 530.484 283.98 522.844C288.391 515.204 298.16 512.587 305.8 516.997C313.44 521.408 316.057 531.177 311.646 538.817C307.236 546.457 297.467 549.074 289.827 544.663Z" fill="#6B7280"/>
    <path d="M293.602 528.399C292.26 530.725 293.057 533.698 295.382 535.04C297.707 536.383 300.68 535.586 302.022 533.261C303.365 530.936 302.568 527.963 300.243 526.62C297.918 525.278 294.945 526.074 293.602 528.399Z" fill="#111928"/>

    
    <path fillRule="evenodd" clipRule="evenodd" d="M155.213 115.56C140.184 89.5284 149.103 56.2422 175.134 41.213C201.165 26.1838 234.451 35.1028 249.481 61.1341L273.367 102.507L279.112 112.458L284.857 122.408L269.686 117.9L269.555 117.976L265.597 132.749L250.823 128.79L250.624 128.906L246.665 143.679L231.892 139.72L231.692 139.836L227.734 154.609L213.019 150.666L209.077 165.38L194.304 161.422L194.271 161.441L190.589 176.833L184.844 166.883L179.099 156.932L155.213 115.56Z" fill="#374151"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M155.213 115.56C140.184 89.5284 149.103 56.2422 175.134 41.213C201.165 26.1838 234.451 35.1028 249.481 61.1341L273.367 102.507L279.112 112.458L284.857 122.408L269.686 117.9L269.555 117.976L265.597 132.749L250.823 128.79L250.624 128.906L246.665 143.679L231.892 139.72L231.692 139.836L227.734 154.609L213.019 150.666L209.077 165.38L194.304 161.422L194.271 161.441L190.589 176.833L184.844 166.883L179.099 156.932L155.213 115.56Z" fill="url(#GamePad_paint18_linear_749_3)" fillOpacity="0.7"/>
    <path d="M190.24 98.827C194.081 105.479 191.802 113.986 185.149 117.827C178.497 121.668 169.99 119.388 166.15 112.736C162.309 106.083 164.588 97.5768 171.241 93.7361C177.893 89.8953 186.4 92.1746 190.24 98.827Z" fill="#374151"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M184.149 116.095C189.845 112.806 191.797 105.523 188.508 99.827C185.22 94.1311 177.937 92.1796 172.241 95.4681C166.545 98.7566 164.593 106.04 167.882 111.736C171.17 117.432 178.454 119.383 184.149 116.095ZM185.149 117.827C191.802 113.986 194.081 105.479 190.24 98.827C186.4 92.1746 177.893 89.8953 171.241 93.7361C164.588 97.5768 162.309 106.083 166.15 112.736C169.99 119.388 178.497 121.668 185.149 117.827Z" fill="#6B7280"/>
    <path d="M181.863 103.665C183.031 105.689 182.338 108.278 180.313 109.447C178.288 110.616 175.7 109.923 174.531 107.898C173.362 105.873 174.055 103.284 176.08 102.115C178.105 100.946 180.694 101.64 181.863 103.665Z" fill="#111928"/>
    <path d="M219.24 81.827C223.081 88.4795 220.802 96.9859 214.149 100.827C207.497 104.668 198.99 102.388 195.15 95.7358C191.309 89.0833 193.588 80.5768 200.241 76.7361C206.893 72.8953 215.4 75.1746 219.24 81.827Z" fill="#374151"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M213.149 99.0947C218.845 95.8062 220.797 88.5229 217.508 82.827C214.22 77.1311 206.937 75.1796 201.241 78.4681C195.545 81.7566 193.593 89.0399 196.882 94.7358C200.17 100.432 207.454 102.383 213.149 99.0947ZM214.149 100.827C220.802 96.9859 223.081 88.4795 219.24 81.827C215.4 75.1746 206.893 72.8953 200.241 76.7361C193.588 80.5768 191.309 89.0833 195.15 95.7358C198.99 102.388 207.497 104.668 214.149 100.827Z" fill="#6B7280"/>
    <path d="M210.863 86.6648C212.031 88.6895 211.338 91.2784 209.313 92.4473C207.288 93.6163 204.7 92.9226 203.531 90.8979C202.362 88.8732 203.055 86.2843 205.08 85.1154C207.105 83.9464 209.694 84.6401 210.863 86.6648Z" fill="#111928"/>
  </g>

  
  <g className="memy-sparkle-1">
    <path d="M386 122 C386 130 394 135 402 135 C394 135 386 140 386 148 C386 140 378 135 370 135 C378 135 386 130 386 122 Z" fill="#111928"/>
    <path d="M300 48 C300 53 304 56 308 56 C304 56 300 59 300 64 C300 59 296 56 292 56 C296 56 300 53 300 48 Z" fill="#374151"/>
  </g>
  <g className="memy-sparkle-2">
    <path d="M178 466 C178 472 184 476 190 476 C184 476 178 480 178 486 C178 480 172 476 166 476 C172 476 178 472 178 466 Z" fill="#374151"/>
    <path d="M114 128 C114 132 118 135 122 135 C118 135 114 138 114 142 C114 138 110 135 106 135 C110 135 114 132 114 128 Z" fill="#111111"/>
    <path d="M357 431 C357 435 361 438 365 438 C361 438 357 441 357 445 C357 441 353 438 349 438 C353 438 357 435 357 431 Z" fill="#374151"/>
  </g>

  <defs>
    <linearGradient id="GamePad_paint0_linear_749_3" x1="272.5" y1="0" x2="272.5" y2="545" gradientUnits="userSpaceOnUse">
      <stop stopColor="#1F2A37"/>
      <stop offset="1" stopColor="#1F2A37" stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="GamePad_paint1_linear_749_3" x1="197" y1="528" x2="197" y2="268" gradientUnits="userSpaceOnUse">
      <stop stopColor={color}/>
      <stop offset="1" stopColor={color} stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="GamePad_paint2_linear_749_3" x1="158" y1="309.5" x2="158" y2="138.5" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" stopOpacity="0"/>
      <stop offset="1" stopColor="white"/>
    </linearGradient>
    <linearGradient id="GamePad_paint3_linear_749_3" x1="335.5" y1="352.5" x2="421.943" y2="346.064" gradientUnits="userSpaceOnUse">
      <stop stopColor={color}/>
      <stop offset="1" stopColor={color} stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="GamePad_paint4_linear_749_3" x1="338" y1="361.5" x2="340.905" y2="374.572" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" stopOpacity="0"/>
      <stop offset="1" stopColor="white"/>
    </linearGradient>
    <linearGradient id="GamePad_paint5_linear_749_3" x1="403.5" y1="271" x2="403.5" y2="305.5" gradientUnits="userSpaceOnUse">
      <stop stopColor={color} stopOpacity="0"/>
      <stop offset="1" stopColor={color}/>
    </linearGradient>
    <linearGradient id="GamePad_paint6_linear_749_3" x1="370.5" y1="245" x2="370.5" y2="279.5" gradientUnits="userSpaceOnUse">
      <stop stopColor={color} stopOpacity="0"/>
      <stop offset="1" stopColor={color}/>
    </linearGradient>
    <linearGradient id="GamePad_paint7_linear_749_3" x1="436.5" y1="245" x2="436.5" y2="279.5" gradientUnits="userSpaceOnUse">
      <stop stopColor={color} stopOpacity="0"/>
      <stop offset="1" stopColor={color}/>
    </linearGradient>
    <linearGradient id="GamePad_paint8_linear_749_3" x1="403.5" y1="218" x2="403.5" y2="252.5" gradientUnits="userSpaceOnUse">
      <stop stopColor={color} stopOpacity="0"/>
      <stop offset="1" stopColor={color}/>
    </linearGradient>
    <linearGradient id="GamePad_paint9_linear_749_3" x1="120.5" y1="249.28" x2="120.5" y2="203.828" gradientUnits="userSpaceOnUse">
      <stop stopColor={color} stopOpacity="0"/>
      <stop offset="1" stopColor={color}/>
    </linearGradient>
    <linearGradient id="GamePad_paint10_linear_749_3" x1="120.5" y1="254.72" x2="120.5" y2="300.172" gradientUnits="userSpaceOnUse">
      <stop stopColor={color} stopOpacity="0"/>
      <stop offset="1" stopColor={color}/>
    </linearGradient>
    <linearGradient id="GamePad_paint11_linear_749_3" x1="124.277" y1="251.5" x2="168.968" y2="251.5" gradientUnits="userSpaceOnUse">
      <stop stopColor={color} stopOpacity="0"/>
      <stop offset="1" stopColor={color}/>
    </linearGradient>
    <linearGradient id="GamePad_paint12_linear_749_3" x1="117.723" y1="251.5" x2="73.0318" y2="251.5" gradientUnits="userSpaceOnUse">
      <stop stopColor={color} stopOpacity="0"/>
      <stop offset="1" stopColor={color}/>
    </linearGradient>
    <linearGradient id="GamePad_paint13_linear_749_3" x1="184.5" y1="352.5" x2="98.0569" y2="346.064" gradientUnits="userSpaceOnUse">
      <stop stopColor={color}/>
      <stop offset="1" stopColor={color} stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="GamePad_paint14_linear_749_3" x1="182" y1="361.5" x2="179.095" y2="374.572" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" stopOpacity="0"/>
      <stop offset="1" stopColor="white"/>
    </linearGradient>
    <linearGradient id="GamePad_paint15_linear_749_3" x1="247.5" y1="317" x2="170.331" y2="358.164" gradientUnits="userSpaceOnUse">
      <stop stopColor={color}/>
      <stop offset="1" stopColor={color} stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="GamePad_paint16_linear_749_3" x1="272.992" y1="317" x2="350.161" y2="358.164" gradientUnits="userSpaceOnUse">
      <stop stopColor={color}/>
      <stop offset="1" stopColor={color} stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="GamePad_paint17_linear_749_3" x1="257.5" y1="670.5" x2="336.5" y2="509" gradientUnits="userSpaceOnUse">
      <stop stopColor="#111928"/>
      <stop offset="1" stopColor="#111928" stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="GamePad_paint18_linear_749_3" x1="242.625" y1="210.469" x2="173.834" y2="69.8399" gradientUnits="userSpaceOnUse">
      <stop stopColor="#111928"/>
      <stop offset="1" stopColor="#111928" stopOpacity="0"/>
    </linearGradient>
  </defs>
    </svg>
  );
};
