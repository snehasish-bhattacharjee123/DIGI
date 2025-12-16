// ClientLogosInlineSVG.tsx
import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion";
import "@splidejs/splide/dist/css/splide.min.css";

type LogoItem = {
  name: string;
  svg?: React.ReactElement;
  img?: {
    src: string;
    alt?: string;
  };
};


const clientsTop: LogoItem[] = [
  
 
  {
    name: "NovaTech",
    img: {
      src: "/images/work/Naksha%20LOGO.png",
      alt: "NovaTech",
    },
    svg: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="Airtel--Streamline-Simple-Icons"
      >
        <desc>Airtel Streamline Icon: https://streamlinehq.com</desc>
        <title>Airtel</title>
        <path
          d="M7.137 23.862c0.79 0 1.708 -0.19 2.751 -0.554 1.55 -0.538 2.784 -1.281 3.986 -2.009l0.316 -0.205a29.733 29.733 0 0 0 3.764 -2.72 16.574 16.574 0 0 0 5.457 -7.529c0.395 -1.138 0.949 -3.384 0.268 -5.487a7.117 7.117 0 0 0 -2.862 -3.749c-0.158 -0.126 -1.898 -1.47 -5.203 -1.47 -3.005 0 -6.31 1.107 -9.806 3.32l-0.11 0.08 -0.317 0.205a20.133 20.133 0 0 0 -2.309 1.693C1.585 6.813 -0.091 9.106 0.004 11.067c0.031 0.79 0.427 1.534 1.075 2.008a3.472 3.472 0 0 0 2.214 0.68c1.803 0 3.765 -0.948 5.109 -1.74l0.253 -0.157 0.696 -0.443 0.237 -0.158c1.898 -1.234 3.875 -2.515 6.105 -3.258a5.255 5.255 0 0 1 1.55 -0.285 3.163 3.163 0 0 1 0.664 0.08 2.112 2.112 0 0 1 1.47 1.106c0.523 1.012 0.396 2.61 -0.316 4.08a17.871 17.871 0 0 1 -4.887 5.836 19.488 19.488 0 0 1 -3.194 2.215l-0.095 0.031a9.634 9.634 0 0 1 -1.471 0.696l-0.08 0.032 -0.41 0.158c-2.23 0.57 -0.87 -1.329 -0.87 -1.329 0.474 -0.537 0.98 -1.028 1.518 -1.502 0.316 -0.269 0.633 -0.554 0.933 -0.854l0.064 -0.063c0.395 -0.38 0.933 -0.902 0.901 -1.645 -0.047 -0.98 -1.075 -1.582 -2.056 -1.613h-0.063c-0.95 0 -1.819 0.522 -2.404 0.98a7.27 7.27 0 0 0 -1.598 1.74c-0.6 0.901 -1.85 3.226 -0.632 5.077 0.49 0.743 1.313 1.123 2.42 1.123z"
          fill="currentColor"
          stroke-width="1"
        ></path>
      </svg>
    ),
  },
  {
    name: "Doritos",
    img: {
      src: "/images/work/Naksha%20LOGO%20(3).png",
      alt: "Doritos",
    },
  },

  // Add the rest of your real logos here (kept concise for the sample)
];

const clientsBottom: LogoItem[] = [
  {
    name: "Cascade",
    img: {
      src: "/images/work/Naksha%20LOGO%20(1).png",
      alt: "Cascade",
    },
    svg: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="Cafepress--Streamline-Simple-Icons"
      >
        <desc>Cafepress Streamline Icon: https://streamlinehq.com</desc>
        <title>CafePress</title>
        <path
          d="M5.899 15.549v-2.063h1.746v0.762h0.018c0.293 -0.579 0.68 -0.882 1.341 -0.882 0.175 0 0.349 0.027 0.532 0.074v1.344c0.379 -0.838 1.2 -1.417 2.285 -1.417 1.892 0 2.708 1.047 2.708 2.912h-3.488c0.047 0.551 0.349 0.926 0.927 0.926 0.294 0 0.615 -0.109 0.762 -0.34h1.614a1.453 1.453 0 0 1 -0.012 -0.174h1.735a0.596 0.596 0 0 0 0.219 0.422c0.102 0.091 0.267 0.137 0.488 0.137 0.239 0 0.614 -0.093 0.614 -0.367 0 -0.275 -0.156 -0.359 -1 -0.505 -1.387 -0.229 -1.947 -0.68 -1.947 -1.497 0 -1.202 1.295 -1.515 2.25 -1.515 1.029 0 2.269 0.285 2.314 1.507h-1.652a0.469 0.469 0 0 0 -0.211 -0.359 0.62 0.62 0 0 0 -0.404 -0.137c-0.258 0 -0.551 0.064 -0.551 0.367 0 0.137 0.109 0.202 0.211 0.248 0.293 0.12 0.992 0.174 1.598 0.367 0.614 0.192 1.14 0.551 1.14 1.332h1.529a0.603 0.603 0 0 0 0.22 0.422c0.102 0.091 0.266 0.137 0.488 0.137 0.238 0 0.615 -0.093 0.615 -0.367 0 -0.275 -0.157 -0.359 -1.001 -0.505 -1.387 -0.229 -1.947 -0.68 -1.947 -1.497 0 -1.202 1.294 -1.515 2.25 -1.515 1.028 0 2.27 0.285 2.314 1.507h-1.653a0.462 0.462 0 0 0 -0.211 -0.359 0.621 0.621 0 0 0 -0.403 -0.137c-0.258 0 -0.551 0.064 -0.551 0.367 0 0.137 0.11 0.202 0.211 0.248 0.293 0.12 0.992 0.174 1.597 0.367 0.615 0.192 1.14 0.551 1.14 1.332 0 1.321 -1.266 1.68 -2.424 1.68 -0.93 0 -1.935 -0.309 -2.266 -1.116 -0.312 0.863 -1.361 1.116 -2.334 1.116 -1.015 0 -2.122 -0.369 -2.34 -1.355 -0.409 0.925 -1.372 1.356 -2.393 1.356 -1.524 0 -2.672 -0.899 -2.672 -2.488 0 -0.306 0.048 -0.598 0.139 -0.869a1.831 1.831 0 0 0 -0.624 -0.088c-0.726 0 -1.102 0.413 -1.102 1.441v1.883H5.899v-1.973c-0.094 1.029 -0.593 2.093 -2.013 2.093 -0.551 0 -1.02 -0.238 -1.304 -0.643h-0.02v2.066H0.746v-6.308h1.755v0.523h0.018c0.22 -0.293 0.515 -0.643 1.395 -0.643 1.224 0 1.874 1.086 1.985 2.183Zm-2.601 1.5c0.653 0 0.799 -0.614 0.799 -1.175 0 -0.562 -0.147 -1.185 -0.799 -1.185 -0.651 0 -0.799 0.624 -0.799 1.185 0 0.559 0.148 1.175 0.799 1.175Zm9.488 -1.716v-0.017a0.787 0.787 0 0 0 -0.783 -0.783h-0.018c-0.55 0 -0.854 0.285 -0.936 0.8h1.737Zm0.295 -7.276c0.034 0.266 0.033 0.546 0.033 0.824v2.589c0 0.474 0.011 1.008 0.292 1.409h-2.454a1.676 1.676 0 0 1 -0.085 -0.596h-0.025c-0.522 0.583 -1.251 0.753 -2.029 0.753 -1.215 0 -2.223 -0.582 -2.223 -1.908 0 -0.139 0.012 -0.268 0.033 -0.387 -0.366 1.476 -1.637 2.296 -3.209 2.296C1.518 13.037 0 11.726 0 9.733c0 -1.992 1.518 -3.316 3.413 -3.316 1.664 0 3.048 0.801 3.208 2.551H4.337c-0.025 -0.267 -0.11 -0.461 -0.267 -0.596a0.903 0.903 0 0 0 -0.608 -0.206c-0.923 0 -1.057 0.801 -1.057 1.567 0 0.778 0.133 1.555 1.057 1.555 0.522 0 0.887 -0.426 0.935 -0.923h2.297a3.21 3.21 0 0 1 -0.037 0.222c0.392 -1.447 2.399 -1.39 3.492 -1.609 0.328 -0.06 0.657 -0.158 0.657 -0.558 0 -0.426 -0.401 -0.583 -0.79 -0.583 -0.729 0 -0.9 0.377 -0.9 0.644H6.883c0.06 -1.787 1.76 -2.066 3.243 -2.066 2.106 0 2.728 0.612 2.911 1.396V6.575h0.983c-0.035 -0.619 0.025 -1.3 0.498 -1.773 0.522 -0.524 1.13 -0.596 2.101 -0.596 0.377 0 0.704 0.037 1.082 0.049v1.652c-0.194 -0.037 -0.389 -0.085 -0.583 -0.085 -0.582 0 -0.778 0.17 -0.74 0.753h1.264v1.267c0.568 -0.86 1.544 -1.425 2.775 -1.425 2.502 0 3.583 1.386 3.583 3.852h-4.616c0.061 0.728 0.461 1.226 1.226 1.226 0.39 0 0.815 -0.147 1.008 -0.45h2.248c-0.486 1.361 -1.823 1.992 -3.243 1.992 -2.017 0 -3.535 -1.189 -3.535 -3.291 0 -0.616 0.149 -1.193 0.423 -1.689h-1.084v4.823H14.02V8.057h-0.939Zm-2.274 1.991c-0.292 0.147 -0.619 0.219 -0.947 0.304 -0.536 0.133 -0.815 0.255 -0.815 0.68 0 0.292 0.316 0.582 0.754 0.582 0.547 0 0.972 -0.314 1.008 -0.983v-0.583Zm10.885 -1.033v-0.021a1.04 1.04 0 0 0 -1.035 -1.035h-0.022c-0.729 0 -1.129 0.375 -1.239 1.056h2.296Z"
          fill="currentColor"
          stroke-width="1"
        ></path>
      </svg>
    ),
  },
  {
    name: "Lumen",
    img: {
      src: "/images/work/Naksha%20LOGO%20(2).png",
      alt: "Lumen",
    },
    svg: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="Burgerking--Streamline-Simple-Icons"
      >
        <desc>Burgerking Streamline Icon: https://streamlinehq.com</desc>
        <title>Burger King</title>
        <path
          d="M15.39 12.614c-0.72 0 -1.11 0.538 -1.11 1.215v1.508c0 0.125 -0.043 0.182 -0.12 0.182 -0.056 0 -0.098 -0.035 -0.147 -0.133l-0.971 -1.885c-0.37 -0.72 -0.755 -0.887 -1.196 -0.887 -0.734 0 -1.14 0.552 -1.14 1.243v4.314c0 0.678 0.392 1.215 1.112 1.215 0.72 0 1.112 -0.537 1.112 -1.215v-1.507c0 -0.126 0.042 -0.182 0.119 -0.182 0.055 0 0.097 0.035 0.146 0.133l0.972 1.885c0.37 0.719 0.769 0.886 1.195 0.886 0.735 0 1.14 -0.551 1.14 -1.242v-4.315c0 -0.677 -0.391 -1.215 -1.111 -1.215zm-4.02 -0.405c0.364 0 0.68 -0.286 0.68 -0.642 0 -0.238 -0.099 -0.412 -0.224 -0.572 -0.203 -0.266 -0.385 -0.496 -0.476 -0.74 -0.02 -0.056 -0.007 -0.105 0.056 -0.154 0.217 -0.167 0.469 -0.537 0.469 -1.124 0 -0.886 -0.734 -1.389 -1.622 -1.389h-0.79c-0.553 0 -0.819 0.321 -0.819 0.754v3.114c0 0.419 0.245 0.754 0.692 0.754 0.448 0 0.693 -0.335 0.693 -0.754v-0.74c0 -0.09 0.042 -0.133 0.111 -0.133 0.084 0 0.112 0.049 0.126 0.133 0.063 0.356 0.23 0.837 0.42 1.082 0.237 0.314 0.46 0.411 0.685 0.411zm-1.146 -2.666h-0.098c-0.119 0 -0.175 -0.07 -0.175 -0.161v-0.474c0 -0.09 0.056 -0.16 0.175 -0.16h0.098c0.294 0 0.385 0.208 0.385 0.39 0 0.174 -0.091 0.405 -0.385 0.405zm-3.761 2.666c1.132 0 1.734 -0.677 1.734 -1.528V8.328c0 -0.419 -0.245 -0.754 -0.692 -0.754 -0.448 0 -0.693 0.335 -0.693 0.754v2.276c0 0.167 -0.097 0.363 -0.35 0.363 -0.251 0 -0.335 -0.196 -0.335 -0.363V8.328c0 -0.419 -0.252 -0.754 -0.7 -0.754 -0.447 0 -0.691 0.335 -0.691 0.754v2.353c0 0.852 0.594 1.528 1.727 1.528zm12.011 -0.034c0.392 0 0.7 -0.23 0.7 -0.65 0 -0.412 -0.308 -0.642 -0.7 -0.642h-0.63c-0.118 0 -0.174 -0.07 -0.174 -0.16v-0.133c0 -0.091 0.056 -0.161 0.175 -0.161h0.482c0.336 0 0.602 -0.202 0.602 -0.559 0 -0.355 -0.266 -0.558 -0.602 -0.558h-0.482c-0.12 0 -0.175 -0.07 -0.175 -0.16V9.04c0 -0.091 0.056 -0.161 0.175 -0.161h0.629c0.392 0 0.7 -0.23 0.7 -0.65 0 -0.411 -0.308 -0.642 -0.7 -0.642h-1.321c-0.553 0 -0.818 0.321 -0.818 0.754v3.079c0 0.432 0.265 0.754 0.818 0.754h1.321zm2.642 3.127h-0.342c-0.615 0 -1.09 0.286 -1.09 0.914 0 0.573 0.517 0.845 0.901 0.845 0.189 0 0.322 0.056 0.322 0.202 0 0.182 -0.224 0.3 -0.462 0.3 -0.79 0 -1.328 -0.537 -1.328 -1.535 0 -1.11 0.734 -1.515 1.3 -1.515 0.692 0 0.804 0.349 1.287 0.349a0.927 0.927 0 0 0 0.936 -0.915 0.95 0.95 0 0 0 -0.398 -0.788c-0.427 -0.315 -1.07 -0.545 -1.979 -0.545 -1.629 0 -3.216 1.026 -3.216 3.414 0 2.282 1.587 3.35 3.153 3.35 1.643 0 2.685 -1.012 2.685 -2.492 0 -0.935 -0.587 -1.584 -1.769 -1.584zm-12.43 -2.688c-0.783 0 -1.21 0.587 -1.21 1.32v4.132c0 0.734 0.427 1.32 1.21 1.32 0.783 0 1.21 -0.586 1.21 -1.32v-4.132c0 -0.733 -0.427 -1.32 -1.21 -1.32zm11.494 -0.405c0.447 0 0.692 -0.335 0.692 -0.754v-0.74c0 -0.09 0.042 -0.132 0.112 -0.132 0.084 0 0.111 0.049 0.125 0.133 0.063 0.355 0.231 0.837 0.42 1.082 0.238 0.314 0.461 0.412 0.685 0.412 0.363 0 0.678 -0.286 0.678 -0.643 0 -0.237 -0.098 -0.412 -0.224 -0.572 -0.237 -0.3 -0.384 -0.496 -0.475 -0.74 -0.02 -0.056 -0.007 -0.105 0.056 -0.153 0.217 -0.168 0.469 -0.538 0.469 -1.124 0 -0.887 -0.735 -1.39 -1.623 -1.39h-0.79c-0.552 0 -0.817 0.321 -0.817 0.754v3.114c0 0.419 0.244 0.753 0.692 0.753zm0.615 -3.301c0 -0.09 0.056 -0.161 0.175 -0.161h0.098c0.293 0 0.384 0.21 0.384 0.391 0 0.175 -0.09 0.405 -0.384 0.405h-0.098c-0.12 0 -0.175 -0.07 -0.175 -0.16zm-18.87 3.267h0.986c0.93 0 1.496 -0.622 1.496 -1.397 0 -0.621 -0.37 -0.907 -0.454 -0.977 -0.035 -0.028 -0.07 -0.056 -0.07 -0.084 0 -0.035 0.021 -0.048 0.056 -0.09 0.133 -0.154 0.266 -0.398 0.266 -0.754 0 -0.838 -0.567 -1.285 -1.448 -1.285h-0.832c-0.552 0 -0.817 0.321 -0.817 0.754v3.079c0 0.433 0.265 0.754 0.817 0.754zm0.413 -3.386c0 -0.09 0.056 -0.16 0.175 -0.16h0.09c0.301 0 0.392 0.209 0.392 0.39 0 0.168 -0.09 0.405 -0.391 0.405h-0.091c-0.12 0 -0.175 -0.07 -0.175 -0.16zm0 1.634c0 -0.091 0.056 -0.161 0.175 -0.161h0.126c0.335 0 0.433 0.223 0.433 0.426 0 0.181 -0.098 0.44 -0.433 0.44h-0.126c-0.12 0 -0.175 -0.07 -0.175 -0.161zm11.878 1.794c1.098 0 1.79 -0.699 1.79 -1.718 0 -0.649 -0.391 -1.096 -1.174 -1.096h-0.224c-0.413 0 -0.734 0.196 -0.734 0.636 0 0.39 0.342 0.58 0.601 0.58 0.133 0 0.217 0.041 0.217 0.139 0 0.125 -0.147 0.21 -0.315 0.21 -0.524 0 -0.88 -0.37 -0.88 -1.062 0 -0.768 0.489 -1.047 0.866 -1.047 0.462 0 0.539 0.238 0.86 0.238 0.37 0 0.623 -0.308 0.623 -0.629a0.669 0.669 0 0 0 -0.266 -0.544c-0.294 -0.217 -0.706 -0.377 -1.321 -0.377 -1.084 0 -2.14 0.712 -2.14 2.36 0 1.576 1.056 2.31 2.097 2.31zm-8.718 3.762a0.354 0.354 0 0 1 -0.07 -0.188c0 -0.077 0.042 -0.133 0.126 -0.21 0.196 -0.181 0.678 -0.635 0.944 -1.047 0.202 -0.314 0.286 -0.6 0.286 -0.837 0 -0.607 -0.552 -1.082 -1.153 -1.082 -0.385 0 -0.748 0.216 -0.993 0.614 -0.329 0.53 -0.72 1.145 -0.972 1.39 -0.063 0.062 -0.098 0.076 -0.146 0.076 -0.084 0 -0.12 -0.056 -0.12 -0.146v-0.699c0 -0.684 -0.405 -1.235 -1.139 -1.235 -0.74 0 -1.14 0.551 -1.14 1.235v4.3c0 0.685 0.399 1.237 1.14 1.237 0.734 0 1.14 -0.552 1.14 -1.236v-0.991c0 -0.084 0.035 -0.147 0.119 -0.147 0.111 0 0.14 0.112 0.167 0.168 0.161 0.384 0.63 1.2 1.063 1.682 0.294 0.32 0.657 0.524 1.042 0.524 0.65 0 1.196 -0.566 1.196 -1.173 0 -0.377 -0.161 -0.657 -0.469 -0.991 -0.392 -0.427 -0.853 -0.986 -1.021 -1.244zm15.751 6.702C19.432 23.707 16.313 24 12 24c-4.313 0 -7.432 -0.293 -9.25 -1.32 -1.09 -0.614 -1.642 -1.451 -1.642 -2.052 0 -0.342 0.181 -0.537 0.587 -0.537h20.61c0.406 0 0.587 0.195 0.587 0.537 0 0.6 -0.552 1.438 -1.643 2.053zm1.056 -15.917H1.695c-0.406 0 -0.587 -0.209 -0.587 -0.586C1.108 3.944 4.47 0 12 0c7.46 0 10.892 3.944 10.892 6.178 0 0.377 -0.181 0.586 -0.587 0.586Z"
          fill="currentColor"
          stroke-width="1"
        ></path>
      </svg>
    ),
  },
  {
    name: "Cafepress",
    img: {
      src: "/images/work/Naksha%20LOGO%20(3).png",
      alt: "Cafepress",
    },
    svg: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="Docker--Streamline-Simple-Icons"
      >
        <desc>Docker Streamline Icon: https://streamlinehq.com</desc>
        <title>Docker</title>
        <path
          d="M13.983 11.078h2.119a0.186 0.186 0 0 0 0.186 -0.185V9.006a0.186 0.186 0 0 0 -0.186 -0.186h-2.119a0.185 0.185 0 0 0 -0.185 0.185v1.888c0 0.102 0.083 0.185 0.185 0.185m-2.954 -5.43h2.118a0.186 0.186 0 0 0 0.186 -0.186V3.574a0.186 0.186 0 0 0 -0.186 -0.185h-2.118a0.185 0.185 0 0 0 -0.185 0.185v1.888c0 0.102 0.082 0.185 0.185 0.185m0 2.716h2.118a0.187 0.187 0 0 0 0.186 -0.186V6.29a0.186 0.186 0 0 0 -0.186 -0.185h-2.118a0.185 0.185 0 0 0 -0.185 0.185v1.887c0 0.102 0.082 0.185 0.185 0.186m-2.93 0h2.12a0.186 0.186 0 0 0 0.184 -0.186V6.29a0.185 0.185 0 0 0 -0.185 -0.185H8.1a0.185 0.185 0 0 0 -0.185 0.185v1.887c0 0.102 0.083 0.185 0.185 0.186m-2.964 0h2.119a0.186 0.186 0 0 0 0.185 -0.186V6.29a0.185 0.185 0 0 0 -0.185 -0.185H5.136a0.186 0.186 0 0 0 -0.186 0.185v1.887c0 0.102 0.084 0.185 0.186 0.186m5.893 2.715h2.118a0.186 0.186 0 0 0 0.186 -0.185V9.006a0.186 0.186 0 0 0 -0.186 -0.186h-2.118a0.185 0.185 0 0 0 -0.185 0.185v1.888c0 0.102 0.082 0.185 0.185 0.185m-2.93 0h2.12a0.185 0.185 0 0 0 0.184 -0.185V9.006a0.185 0.185 0 0 0 -0.184 -0.186h-2.12a0.185 0.185 0 0 0 -0.184 0.185v1.888c0 0.102 0.083 0.185 0.185 0.185m-2.964 0h2.119a0.185 0.185 0 0 0 0.185 -0.185V9.006a0.185 0.185 0 0 0 -0.184 -0.186h-2.12a0.186 0.186 0 0 0 -0.186 0.186v1.887c0 0.102 0.084 0.185 0.186 0.185m-2.92 0h2.12a0.185 0.185 0 0 0 0.184 -0.185V9.006a0.185 0.185 0 0 0 -0.184 -0.186h-2.12a0.185 0.185 0 0 0 -0.184 0.185v1.888c0 0.102 0.082 0.185 0.185 0.185M23.763 9.89c-0.065 -0.051 -0.672 -0.51 -1.954 -0.51 -0.338 0.001 -0.676 0.03 -1.01 0.087 -0.248 -1.7 -1.653 -2.53 -1.716 -2.566l-0.344 -0.199 -0.226 0.327c-0.284 0.438 -0.49 0.922 -0.612 1.43 -0.23 0.97 -0.09 1.882 0.403 2.661 -0.595 0.332 -1.55 0.413 -1.744 0.42H0.751a0.751 0.751 0 0 0 -0.75 0.748 11.376 11.376 0 0 0 0.692 4.062c0.545 1.428 1.355 2.48 2.41 3.124 1.18 0.723 3.1 1.137 5.275 1.137 0.983 0.003 1.963 -0.086 2.93 -0.266a12.248 12.248 0 0 0 3.823 -1.389c0.98 -0.567 1.86 -1.288 2.61 -2.136 1.252 -1.418 1.998 -2.997 2.553 -4.4h0.221c1.372 0 2.215 -0.549 2.68 -1.009 0.309 -0.293 0.55 -0.65 0.707 -1.046l0.098 -0.288Z"
          fill="currentColor"
          stroke-width="1"
        ></path>
      </svg>
    ),
  },

  // ... add other bottom logos (Pivot, Atlas, Ripple, Glyph, Terra) similarly ...
];

const renderLogoVisual = (c: LogoItem) => {
  if (c.img) {
    return (
      <img
        src={c.img.src}
        alt={c.img.alt ?? c.name}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        width={280}
        height={140}
        style={{
          width: "clamp(64px, 9vw, 140px)",
          height: "auto",
          display: "block",
          objectFit: "contain",
        }}
      />
    );
  }

  if (c.svg) {
    return React.cloneElement(c.svg, {
      width: undefined,
      height: undefined,
      style: {
        width: "clamp(64px, 9vw, 140px)",
        height: "auto",
        display: "block",
      },
    });
  }

  return null;
};

const ClientLogosInlineSVG: React.FC = () => {
  const topSplide = useRef<any>(null);
  const bottomSplide = useRef<any>(null);
  const topEl = useRef<HTMLDivElement | null>(null);
  const bottomEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Clean any previous instances attached to elements (defensive)
    if (topEl.current && (topEl.current as any)._splideInstance) {
      try {
        (topEl.current as any)._splideInstance.destroy(true);
      } catch {}
    }
    if (bottomEl.current && (bottomEl.current as any)._splideInstance) {
      try {
        (bottomEl.current as any)._splideInstance.destroy(true);
      } catch {}
    }

    // Top slider
    if (topEl.current) {
      topSplide.current = new Splide(topEl.current, {
        type: "loop",
        rewind: false,
        perPage: 6,
        gap: "1.25rem",
        arrows: false,
        pagination: false,
        drag: "free",
        autoplay: false,
        speed: 4000, // slide speed (ms) — not autoScroll speed
        breakpoints: {
          1280: { perPage: 5 },
          1024: { perPage: 4 },
          768: { perPage: 3 },
          480: { perPage: 2 },
        },
        // AutoScroll plugin options are passed inside autoScroll
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: true,
          speed: 1.1,
        },
        // reduce movement sensitivity (nice for logos)
        flickPower: 200,
      });

      // attach instance for defensive external access & cleanup
      (topEl.current as any)._splideInstance = topSplide.current;
      topSplide.current.mount({ AutoScroll });
    }

    // Bottom slider (opposite direction)
    if (bottomEl.current) {
      bottomSplide.current = new Splide(bottomEl.current, {
        type: "loop",
        perPage: 6,
        gap: "1.25rem",
        arrows: false,
        pagination: false,
        drag: "free",
        autoplay: false,
        speed: 4000,
        breakpoints: {
          1280: { perPage: 5 },
          1024: { perPage: 4 },
          768: { perPage: 3 },
          480: { perPage: 2 },
        },
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: true,
          speed: -1.25, // negative -> reverse direction
        },
        flickPower: 200,
      });

      (bottomEl.current as any)._splideInstance = bottomSplide.current;
      bottomSplide.current.mount({ AutoScroll });
    }

    return () => {
      try {
        topSplide.current?.destroy(true);
      } catch {}
      try {
        bottomSplide.current?.destroy(true);
      } catch {}
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
      data-mood="light"
    >
      <div className="max-w-[1680px] mx-auto">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-gray-700">
            Trusted by leading brands
          </p>
        </div>

        {/* TOP */}
        <div
          id="splide-top"
          ref={topEl}
          className="splide gradient-mask-horizontal"
          aria-label="Top logos scroller"
        >
          <div className="splide__track">
            <ul className="splide__list">
              {clientsTop.map((c, i) => (
                <li
                  key={`top-${i}`}
                  className="splide__slide flex justify-center items-center"
                >
                  <figure className="logo-wrap flex items-center justify-center">
                    {/* Visual SVG (aria-hidden) */}
                    <div
                      aria-hidden="true"
                      className="logo-visual"
                      title={c.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {renderLogoVisual(c)}
                    </div>

                    {/* Screen-reader label */}
                    <figcaption className="sr-only">{c.name}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          id="splide-bottom"
          ref={bottomEl}
          className="splide gradient-mask-horizontal mt-10"
          aria-label="Bottom logos scroller"
        >
          <div className="splide__track">
            <ul className="splide__list">
              {clientsBottom.map((c, i) => (
                <li
                  key={`bottom-${i}`}
                  className="splide__slide flex justify-center items-center"
                >
                  <figure className="logo-wrap flex items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="logo-visual"
                      title={c.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {renderLogoVisual(c)}
                    </div>

                    <figcaption className="sr-only">{c.name}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scoped styles — move to your CSS/Tailwind if preferred */}
      <style>{`
        /* Horizontal fade masks so logos "enter" from sides */
        .gradient-mask-horizontal {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
        }

        .logo-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          transition: transform 0.35s ease, color 0.35s ease;
          color: #1f2937; /* base color for SVG via currentColor */
        }

        .logo-wrap .logo-visual svg {
          transition: transform 0.35s ease, filter 0.35s ease, opacity 0.35s ease;
          width: clamp(64px, 9vw, 140px);
          height: auto;
          display: block;
        }

        .logo-wrap .logo-visual img {
          transition: transform 0.35s ease, filter 0.35s ease, opacity 0.35s ease;
          width: clamp(64px, 9vw, 140px);
          height: auto;
          display: block;
          object-fit: contain;
        }

        .splide__slide:hover .logo-wrap {
          transform: translateY(-4px) scale(1.03);
          color: #0f62fe; /* hover tint applied to SVG via currentColor */
        }

        /* Ensure stroke/fill respects currentColor */
        .logo-wrap svg [stroke] { stroke: currentColor; }
        .logo-wrap svg [fill="currentColor"] { fill: currentColor; }

        /* simple sr-only utility (if Tailwind's sr-only isn't available) */
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
      `}</style>
    </motion.section>
  );
};

export default ClientLogosInlineSVG;
