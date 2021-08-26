import { html } from "./deps.js";

export const heartIcon = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    height="16"
    width="16"
    viewBox="0 0 16 16"
    class="heartIcon"
  >
    <path fill="none" d="M0 0h16v16H0z"></path>
    <path
      d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
    ></path>
  </svg>
`;

export const heartNotLiked = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="37.39565943232"
    viewBox="0 0 224 224"
    style="will-change: transform; transform: translate3d(0px, 0px, 0px); margin: -10.6978px;"
  >
    <g transform="translate(0 -28.02)">
      <animateMotion
        dur="0.5167s"
        fill="freeze"
        keyTimes="0;0.3225806;0.483871;0.6451613;0.9677419;1"
        path="M112 140 C112,140 100,140 100,140 C100,140 124,140 124,140 C124,140 100,140 100,140 C100,140 112,140 112,140 C112,140 112,140 112,140 "
        keyPoints="0;0.17;0.5;0.83;1;1"
        keySplines="0.8 0 0.8 1;0.8 0 0.8 1;0.8 0 0.8 1;0.2 0 0.2 1;0 0 0 0"
        calcMode="spline"
      ></animateMotion>
      <animateTransform
        dur="0.5167s"
        fill="freeze"
        attributeName="transform"
        type="rotate"
        additive="sum"
        keyTimes="0;0.2580645;0.3870968;0.5483871;0.7096774;0.9677419;1"
        values="0;3;-4;6;-6;0;0"
        keySplines="0.6 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0.6 0 0.667 1;0 0 0 0"
        calcMode="spline"
      ></animateTransform>
      <g id="unfilled-heart-shown-in-end">
        <animate
          dur="0.5167s"
          fill="freeze"
          attributeName="opacity"
          keyTimes="0;0.3225806;0.6451613;1"
          values="0;0;1;1"
          keySplines="0.6 0 0.7 1;0.6 0 0.7 1;0 0 0 0"
          calcMode="spline"
        ></animate>
        <path
          fill="#ffffff"
          d="M35.02-31.22a23.7 23.7 0 00-32.08-1.46A5.06 5.06 0 010-31.63c-1.69 0-2.89-1.03-2.93-1.07A23.7 23.7 0 00-35-31.22a23.67 23.67 0 00-6.99 16.86c0 6.36 2.48 12.35 6.9 16.76l27.8 32.54a9.58 9.58 0 0014.6 0l27.7-32.45c4.48-4.46 7-10.53 6.98-16.86a23.7 23.7 0 00-6.98-16.85zM32.82.45L5.02 33A6.82 6.82 0 01-5 33L-32.87.37a20.68 20.68 0 01-6.1-14.73 20.67 20.67 0 016.1-14.74 20.67 20.67 0 0127.99-1.33 7.73 7.73 0 004.9 1.8 7.91 7.91 0 004.85-1.76 20.72 20.72 0 0128.03 1.3A20.8 20.8 0 0132.82.45z"
        ></path>
      </g>
      <g id="filled-heart-shown-at-start">
        <animate
          dur="0.5167s"
          fill="freeze"
          attributeName="opacity"
          keyTimes="0;0.3225806;0.6451613;1"
          values="1;1;0;0"
          keySplines="0.3 0 0.4 1;0.3 0 0.4 1;0 0 0 0"
          calcMode="spline"
        ></animate>
        <path
          fill="#1db954"
          d="M34.96-31.25a24.14 24.14 0 010 34.04L7.6 34.83a10.03 10.03 0 01-15.2 0L-35.04 2.67a24.07 24.07 0 01.08-33.92 23.96 23.96 0 0132.4-1.48c.04.04 1.08.92 2.56.92 1.44 0 2.56-.92 2.56-.92 9.64-8 23.56-7.36 32.4 1.48z"
        ></path>
      </g>
    </g>
  </svg>
`;

export const heartLikeAnimation = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36.01521388"
    viewBox="0 0 224 224"
    style="will-change: transform; transform: translate3d(0px, 0px, 0px); margin: -10.0076px;"
  >
    <g>
      <g id="first-growing-ring">
        <animate
          dur="0.683s"
          fill="freeze"
          attributeName="opacity"
          keyTimes="0;0.1219512;0.1219537;0.8292683;0.8292683;1"
          values="0;0;1;1;0;0"
          keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0"
          calcMode="spline"
        ></animate>
        <g transform=" translate(112, 112)">
          <animate
            dur="0.683s"
            fill="freeze"
            attributeName="opacity"
            keyTimes="0;0.1219512;0.804878;1"
            values="1;1;0;0"
            keySplines="0.2 0 0.4 1;0.2 0 0.4 1;0 0 0 0"
            calcMode="spline"
          ></animate>
          <circle stroke="#1db954" fill="none">
            <animate
              dur="0.683s"
              fill="freeze"
              attributeName="stroke-width"
              keyTimes="0;0.1219512;0.804878;1"
              values="30;30;0;0"
              keySplines="0 0 0 1;0 0 0 1;0 0 0 0"
              calcMode="spline"
            ></animate>
            <animate
              dur="0.683s"
              fill="freeze"
              attributeName="r"
              keyTimes="0;0.1219512;0.804878;1"
              values="0;0;110;110"
              keySplines="0 0 0 1;0 0 0 1;0 0 0 0"
              calcMode="spline"
            ></animate>
          </circle>
        </g>
      </g>
      <g id="second-growing-ring">
        <animate
          dur="0.683s"
          fill="freeze"
          attributeName="opacity"
          keyTimes="0;0.2926829;0.2926854;1"
          values="0;0;1;1"
          keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
          calcMode="spline"
        ></animate>
        <g transform=" translate(112, 112)">
          <animate
            dur="0.683s"
            fill="freeze"
            attributeName="opacity"
            keyTimes="0;0.2926829;0.9756098;1"
            values="1;1;0;0"
            keySplines="0.2 0 0.4 1;0.2 0 0.4 1;0 0 0 0"
            calcMode="spline"
          ></animate>
          <circle stroke="#1db954" fill="none">
            <animate
              dur="0.683s"
              fill="freeze"
              attributeName="stroke-width"
              keyTimes="0;0.2926829;0.9756098;1"
              values="30;30;0;0"
              keySplines="0 0 0 1;0 0 0 1;0 0 0 0"
              calcMode="spline"
            ></animate>
            <animate
              dur="0.683s"
              fill="freeze"
              attributeName="r"
              keyTimes="0;0.2926829;0.9756098;1"
              values="0;0;110;110"
              keySplines="0 0 0 1;0 0 0 1;0 0 0 0"
              calcMode="spline"
            ></animate>
          </circle>
        </g>
      </g>
      <g id="first-light-colored-moving-heart-particle">
        <animate
          dur="0.683s"
          fill="freeze"
          attributeName="opacity"
          keyTimes="0;0.2439024;0.2439049;0.804878;0.8048781;1"
          values="0;0;1;1;0;0"
          keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0"
          calcMode="spline"
        ></animate>
        <g>
          <animate
            dur="0.683s"
            fill="freeze"
            attributeName="opacity"
            keyTimes="0;0.7804878;1"
            values="1;0;0"
            keySplines="0.6 0 0.7 1;0 0 0 0"
            calcMode="spline"
          ></animate>
          <animateMotion
            dur="0.683s"
            fill="freeze"
            keyTimes="0;0.7804878;1"
            path="M122.25 123.17 C200.25,137.25 197.5,23.92 197.5,23.92 C197.5,23.92 197.5,23.92 197.5,23.92 "
            keyPoints="0;1;1"
            keySplines="0.95 0 0.8 1;0 0 0 0"
            calcMode="spline"
          ></animateMotion>
          <animateTransform
            dur="0.683s"
            fill="freeze"
            attributeName="transform"
            type="scale"
            additive="sum"
            keyTimes="0;0.7804878;1"
            values="0.6 0.6;0.9 0.9;0.9 0.9"
            keySplines="0.8 0 0.8 1;0 0 0 0"
            calcMode="spline"
          ></animateTransform>
          <path
            fill="#ffffff"
            d="M22.28 -19.53 C16.88,-24.89 8.3,-25.2 2.54,-20.44 C2.54,-20.44 1.5,-19.48 0,-19.48 C-1.54,-19.48 -2.54,-20.44 -2.54,-20.44 C-8.3,-25.2 -16.86,-24.86 -22.24,-19.53 C-28,-13.81 -28,-4.51 -22.24,1.21 C-22.24,1.21 -4.04,22.54 -4.04,22.54 C-1.91,25.03 1.91,25.03 4.04,22.54 C4.04,22.54 22.28,1.21 22.28,1.21 C28,-4.51 28.05,-13.81 22.28,-19.53z"
          ></path>
        </g>
      </g>
      <g id="first-brand-colored-moving-heart-particle">
        <animate
          dur="0.683s"
          fill="freeze"
          attributeName="opacity"
          keyTimes="0;0.2439024;0.2439049;0.6829268;0.6829269;1"
          values="0;0;1;1;0;0"
          keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0"
          calcMode="spline"
        ></animate>
        <g>
          <animate
            dur="0.683s"
            fill="freeze"
            attributeName="opacity"
            keyTimes="0;0.6585366;1"
            values="1;0;0"
            keySplines="0.6 0 1 1;0 0 0 0"
            calcMode="spline"
          ></animate>
          <animateMotion
            dur="0.683s"
            fill="freeze"
            keyTimes="0;0.6585366;1"
            path="M98 105.92 C19.75,106.25 32.25,37.42 32.25,37.42 C32.25,37.42 32.25,37.42 32.25,37.42 "
            keyPoints="0;1;1"
            keySplines="0.95 0 0.8 1;0 0 0 0"
            calcMode="spline"
          ></animateMotion>
          <animateTransform
            dur="0.683s"
            fill="freeze"
            attributeName="transform"
            type="scale"
            additive="sum"
            keyTimes="0;0.6585366;1"
            values="0.6 0.6;0.9 0.9;0.9 0.9"
            keySplines="0.8 0 0.8 1;0 0 0 0"
            calcMode="spline"
          ></animateTransform>
          <path
            fill="#1db954"
            d="M22.28 -19.53 C16.88,-24.89 8.3,-25.2 2.54,-20.44 C2.54,-20.44 1.5,-19.48 0,-19.48 C-1.54,-19.48 -2.54,-20.44 -2.54,-20.44 C-8.3,-25.2 -16.86,-24.86 -22.24,-19.53 C-28,-13.81 -28,-4.51 -22.24,1.21 C-22.24,1.21 -4.04,22.54 -4.04,22.54 C-1.91,25.03 1.91,25.03 4.04,22.54 C4.04,22.54 22.28,1.21 22.28,1.21 C28,-4.51 28.05,-13.81 22.28,-19.53z"
          ></path>
        </g>
      </g>
      <g id="second-light-colored-moving-heart-particle">
        <animate
          dur="0.683s"
          fill="freeze"
          attributeName="opacity"
          keyTimes="0;0.2439024;0.2439049;0.804878;0.8048781;1"
          values="0;0;1;1;0;0"
          keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0"
          calcMode="spline"
        ></animate>
        <g>
          <animate
            dur="0.683s"
            fill="freeze"
            attributeName="opacity"
            keyTimes="0;0.7317073;1"
            values="1;0;0"
            keySplines="0.6 0 1 1;0 0 0 0"
            calcMode="spline"
          ></animate>
          <animateMotion
            dur="0.683s"
            fill="freeze"
            keyTimes="0;0.7317073;1"
            path="M112.5 123.17 C73.75,194.5 72,43.17 72,43.17 C72,43.17 72,43.17 72,43.17 "
            keyPoints="0;1;1"
            keySplines="0.95 0 0.8 1;0 0 0 0"
            calcMode="spline"
          ></animateMotion>
          <animateTransform
            dur="0.683s"
            fill="freeze"
            attributeName="transform"
            type="scale"
            additive="sum"
            keyTimes="0;0.7317073;1"
            values="0.6 0.6;0.9 0.9;0.9 0.9"
            keySplines="0.8 0 0.8 1;0 0 0 0"
            calcMode="spline"
          ></animateTransform>
          <path
            fill="#ffffff"
            d="M22.28 -19.53 C16.88,-24.89 8.3,-25.2 2.54,-20.44 C2.54,-20.44 1.5,-19.48 0,-19.48 C-1.54,-19.48 -2.54,-20.44 -2.54,-20.44 C-8.3,-25.2 -16.86,-24.86 -22.24,-19.53 C-28,-13.81 -28,-4.51 -22.24,1.21 C-22.24,1.21 -4.04,22.54 -4.04,22.54 C-1.91,25.03 1.91,25.03 4.04,22.54 C4.04,22.54 22.28,1.21 22.28,1.21 C28,-4.51 28.05,-13.81 22.28,-19.53z"
          ></path>
        </g>
      </g>
      <g id="second-brand-colored-moving-heart-particle">
        <animate
          dur="0.683s"
          fill="freeze"
          attributeName="opacity"
          keyTimes="0;0.2439024;0.2439049;0.8536585;0.8536586;1"
          values="0;0;1;1;0;0"
          keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0"
          calcMode="spline"
        ></animate>
        <g>
          <animate
            dur="0.683s"
            fill="freeze"
            attributeName="opacity"
            keyTimes="0;0.804878;1"
            values="1;0;0"
            keySplines="0.6 0 1 1;0 0 0 0"
            calcMode="spline"
          ></animate>
          <animateMotion
            dur="0.683s"
            fill="freeze"
            keyTimes="0;0.804878;1"
            path="M112 134.92 C160.75,190.75 155.25,45.67 155.25,45.67 C155.25,45.67 155.25,45.67 155.25,45.67 "
            keyPoints="0;1;1"
            keySplines="0.95 0 0.8 1;0 0 0 0"
            calcMode="spline"
          ></animateMotion>
          <animateTransform
            dur="0.683s"
            fill="freeze"
            attributeName="transform"
            type="scale"
            additive="sum"
            keyTimes="0;0.804878;1"
            values="0.6 0.6;0.9 0.9;0.9 0.9"
            keySplines="0.8 0 0.8 1;0 0 0 0"
            calcMode="spline"
          ></animateTransform>
          <path
            fill="#1db954"
            d="M22.28 -19.53 C16.88,-24.89 8.3,-25.2 2.54,-20.44 C2.54,-20.44 1.5,-19.48 0,-19.48 C-1.54,-19.48 -2.54,-20.44 -2.54,-20.44 C-8.3,-25.2 -16.86,-24.86 -22.24,-19.53 C-28,-13.81 -28,-4.51 -22.24,1.21 C-22.24,1.21 -4.04,22.54 -4.04,22.54 C-1.91,25.03 1.91,25.03 4.04,22.54 C4.04,22.54 22.28,1.21 22.28,1.21 C28,-4.51 28.05,-13.81 22.28,-19.53z"
          ></path>
        </g>
      </g>
      <g id="main-heart-group" transform="translate(112, 112)">
        <animateTransform
          dur="0.683s"
          fill="freeze"
          attributeName="transform"
          type="scale"
          additive="sum"
          keyTimes="0;0.1219512;0.2439024;0.5121951;1"
          values="1 1;0.8 0.8;1.25 1.25;1 1;1 1"
          keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0 1;0 0 0 0"
          calcMode="spline"
        ></animateTransform>
        <g>
          <path
            fill="#ffffff"
            d="M32.01 0.08 C39.97,-7.84 39.97,-20.56 32.13,-28.4 C24.73,-35.76 13.13,-36.32 5.13,-29.64 C4.93,-29.48 2.89,-27.8 0.01,-27.8 C-2.99,-27.8 -4.95,-29.52 -5.19,-29.68 C-8.91,-32.8 -13.43,-34.32 -17.91,-34.32 C-23.07,-34.32 -28.19,-32.32 -32.11,-28.4 C-39.95,-20.56 -39.95,-7.84 -32.11,-0.04 C-32.11,-0.04 -4.55,32.24 -4.55,32.24 C-2.27,34.92 2.29,34.92 4.57,32.24 C4.57,32.24 32.01,0.08 32.01,0.08z"
          >
            <animate
              dur="0.683s"
              fill="freeze"
              attributeName="fill"
              keyTimes="0;0.1219512;0.2439024;0.5121951;1"
              values="#ffffff;#ffffff;#1db954;#1db954;#1db954"
              keySplines="0 0 0 1;0 0 0 1;0 0 0 1;0 0 0 0"
              calcMode="spline"
            ></animate>
            <animate
              dur="0.683s"
              fill="freeze"
              attributeName="d"
              attributeType="XML"
              keyTimes="0;0.1219512;0.2439024;1"
              values="M32.01 0.08 C39.97,-7.84 39.97,-20.56 32.13,-28.4 C24.73,-35.76 13.13,-36.32 5.13,-29.64 C4.93,-29.48 2.89,-27.8 0.01,-27.8 C-2.99,-27.8 -4.95,-29.52 -5.19,-29.68 C-8.91,-32.8 -13.43,-34.32 -17.91,-34.32 C-23.07,-34.32 -28.19,-32.32 -32.11,-28.4 C-39.95,-20.56 -39.95,-7.84 -32.11,-0.04 C-32.11,-0.04 -4.55,32.24 -4.55,32.24 C-2.27,34.92 2.29,34.92 4.57,32.24 C4.57,32.24 32.01,0.08 32.01,0.08z  M34.96 -31.25 C44.32,-21.85 44.32,-6.61 34.96,2.79 C34.96,2.79 7.6,34.83 7.6,34.83 C5.72,37.03 2.92,38.31 0,38.31 C-2.92,38.31 -5.68,37.03 -7.6,34.83 C-7.6,34.83 -35.04,2.67 -35.04,2.67 C-44.32,-6.61 -44.32,-21.85 -34.96,-31.25 C-26.08,-40.09 -12.16,-40.73 -2.56,-32.73 C-2.52,-32.69 -1.48,-31.81 0,-31.81 C1.44,-31.81 2.56,-32.73 2.56,-32.73 C12.2,-40.73 26.12,-40.09 34.96,-31.25z ;M32.01 0.08 C39.97,-7.84 39.97,-20.56 32.13,-28.4 C24.73,-35.76 13.13,-36.32 5.13,-29.64 C4.93,-29.48 2.89,-27.8 0.01,-27.8 C-2.99,-27.8 -4.95,-29.52 -5.19,-29.68 C-8.91,-32.8 -13.43,-34.32 -17.91,-34.32 C-23.07,-34.32 -28.19,-32.32 -32.11,-28.4 C-39.95,-20.56 -39.95,-7.84 -32.11,-0.04 C-32.11,-0.04 -4.55,32.24 -4.55,32.24 C-2.27,34.92 2.29,34.92 4.57,32.24 C4.57,32.24 32.01,0.08 32.01,0.08z  M34.96 -31.25 C44.32,-21.85 44.32,-6.61 34.96,2.79 C34.96,2.79 7.6,34.83 7.6,34.83 C5.72,37.03 2.92,38.31 0,38.31 C-2.92,38.31 -5.68,37.03 -7.6,34.83 C-7.6,34.83 -35.04,2.67 -35.04,2.67 C-44.32,-6.61 -44.32,-21.85 -34.96,-31.25 C-26.08,-40.09 -12.16,-40.73 -2.56,-32.73 C-2.52,-32.69 -1.48,-31.81 0,-31.81 C1.44,-31.81 2.56,-32.73 2.56,-32.73 C12.2,-40.73 26.12,-40.09 34.96,-31.25z ;M0.02 0.05 C0.02,0.05 0.01,0.07 0.01,0.07 C0.01,0.07 0.01,0.04 0.01,0.04 C0.01,0.04 0.02,0.03 0.02,0.03 C0.02,0.03 0.01,0.06 0.01,0.06 C0.01,0.06 -0.03,0.03 -0.03,0.03 C-0.03,0.03 0,0.08 0,0.08 C0,0.08 0,0.04 0,0.04 C0,0.04 0.05,0 0.05,0 C0.05,0 0.01,0.04 0.01,0.04 C0.01,0.04 0.02,0.05 0.02,0.05z  M34.96 -31.25 C44.32,-21.85 44.32,-6.61 34.96,2.79 C34.96,2.79 7.6,34.83 7.6,34.83 C5.72,37.03 2.92,38.31 0,38.31 C-2.92,38.31 -5.68,37.03 -7.6,34.83 C-7.6,34.83 -35.04,2.67 -35.04,2.67 C-44.32,-6.61 -44.32,-21.85 -34.96,-31.25 C-26.08,-40.09 -12.16,-40.73 -2.56,-32.73 C-2.52,-32.69 -1.48,-31.81 0,-31.81 C1.44,-31.81 2.56,-32.73 2.56,-32.73 C12.2,-40.73 26.12,-40.09 34.96,-31.25z ;M0.02 0.05 C0.02,0.05 0.01,0.07 0.01,0.07 C0.01,0.07 0.01,0.04 0.01,0.04 C0.01,0.04 0.02,0.03 0.02,0.03 C0.02,0.03 0.01,0.06 0.01,0.06 C0.01,0.06 -0.03,0.03 -0.03,0.03 C-0.03,0.03 0,0.08 0,0.08 C0,0.08 0,0.04 0,0.04 C0,0.04 0.05,0 0.05,0 C0.05,0 0.01,0.04 0.01,0.04 C0.01,0.04 0.02,0.05 0.02,0.05z  M34.96 -31.25 C44.32,-21.85 44.32,-6.61 34.96,2.79 C34.96,2.79 7.6,34.83 7.6,34.83 C5.72,37.03 2.92,38.31 0,38.31 C-2.92,38.31 -5.68,37.03 -7.6,34.83 C-7.6,34.83 -35.04,2.67 -35.04,2.67 C-44.32,-6.61 -44.32,-21.85 -34.96,-31.25 C-26.08,-40.09 -12.16,-40.73 -2.56,-32.73 C-2.52,-32.69 -1.48,-31.81 0,-31.81 C1.44,-31.81 2.56,-32.73 2.56,-32.73 C12.2,-40.73 26.12,-40.09 34.96,-31.25z"
              keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0"
              calcMode="spline"
            ></animate>
          </path>
        </g>
      </g>
    </g>
  </svg>
`;
