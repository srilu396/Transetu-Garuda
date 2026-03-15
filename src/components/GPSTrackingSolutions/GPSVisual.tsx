"use client";

import React from "react";
import { motion } from "framer-motion";

type OrbitingIconType =
  | "car"
  | "truck"
  | "bus"
  | "mobile"
  | "dog"
  | "mining"
  | "fuel"
  | "bike"
  | "lock"
  | "temperature"
  | "tracker";

const OrbitingIcon = ({
  type,
  className,
}: {
  type: OrbitingIconType;
  className?: string;
}) => {
  const svgClass = className || "w-6 h-6";
  const iconProps = { viewBox: "0 0 24 24" as const, fill: "currentColor", className: svgClass };

  const icons: Record<OrbitingIconType, React.ReactNode> = {
    car: (
      <svg {...iconProps}>
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17zm-7-2c-1.1 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zm8 0c-1.1 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2z" />
      </svg>
    ),
    truck: (
      <svg {...iconProps}>
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1-5.5H3V6h14v7z" />
      </svg>
    ),
    bus: (
      <svg {...iconProps}>
        <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm2-3c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1zm10 0c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1zM6 6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v5H6V6z" />
      </svg>
    ),
    mobile: (
      <svg {...iconProps}>
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
      </svg>
    ),
    dog: (
      <svg {...iconProps}>
        <path d="M8.35 7.48a1.26 1.26 0 1 1 2.52 0 1.26 1.26 0 0 1-2.52 0zm6.3 0a1.26 1.26 0 1 1 2.52 0 1.26 1.26 0 0 1-2.52 0zM7 11.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm10 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM12 16.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    mining: (
      <svg {...iconProps}>
        <path d="M14.5 2L12 4.5 9.5 2 8 3.5l2.5 2.5L8 8.5 9.5 10l2.5-2.5L14.5 10l1.5-1.5-2.5-2.5L16 3.5 14.5 2zM4 7v2h2l2.5 9H6v2h12v-2h-2.5L18 9h2V7H4z" />
      </svg>
    ),
    fuel: (
      <svg {...iconProps}>
        <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>
    ),
    bike: (
      <svg {...iconProps}>
        <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5H5zm0 0c0 2.8 2.2 5 5 5s5-2.2 5-5h-4.5l2.2-2.2-1.4-1.4L10 14.8V12H5z" />
      </svg>
    ),
    lock: (
      <svg {...iconProps}>
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
    ),
    temperature: (
      <svg {...iconProps}>
        <path d="M14 14.76V3.5c0-.83-.67-1.5-1.5-1.5S11 2.67 11 3.5v11.26c-1.61.55-2.5 1.67-2.5 3 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.33-.89-2.45-2.5-3zM12.5 20c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    tracker: (
      <svg {...iconProps}>
        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-11.5C6.48 2.5 2.5 6.48 2.5 12S6.48 21.5 12 21.5 21.5 17.52 21.5 12 17.52 2.5 12 2.5zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
  };

  return <>{icons[type]}</>;
};

const ORBIT_COLORS = [
  "#a78bfa", "#60a5fa", "#34d399", "#fbbf24", "#f472b6",
  "#818cf8", "#2dd4bf", "#fb923c", "#c084fc", "#38bdf8", "#4ade80",
];

const TrackedObject = ({
  radius,
  speed,
  delay,
  type,
  color,
  startAngle = 0,
}: {
  radius: number;
  speed: number;
  delay: number;
  type: OrbitingIconType;
  color?: string;
  startAngle?: number;
}) => {
  const accent = color ?? "#a78bfa";
  return (
    <motion.div
      className="absolute flex items-center justify-center pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        rotate: startAngle,
      }}
      animate={{ rotate: startAngle + 360 }}
      transition={{ duration: speed * 2, repeat: Infinity, ease: "linear", delay }}
    >
      <div
        className="absolute flex flex-col items-center"
        style={{ top: -15 }}
      >
        <motion.div
          className="text-primary relative"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="p-2.5 rounded-full backdrop-blur-md border shadow-lg flex items-center justify-center"
            style={{
              backgroundColor: `${accent}20`,
              borderColor: `${accent}60`,
              boxShadow: `0 0 24px ${accent}40, inset 0 1px 0 rgba(255,255,255,0.15)`,
            }}
          >
            <span style={{ color: accent }}>
              <OrbitingIcon type={type} className="w-6 h-6" />
            </span>
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 pointer-events-none"
            style={{ borderColor: `${accent}80` }}
            animate={{ scale: [1, 3.2], opacity: [0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", repeatDelay: 1.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function GPSVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
      {/* Enhanced Outer Glow */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-40"></div>

      {/* Radar Container */}
      <div className="relative w-full h-full flex items-center justify-center">

        {/* Radar Rings - Higher Opacity for Visibility */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
          <div
            key={i}
            className="absolute border border-primary/25 rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
            style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}
          />
        ))}

        {/* Radar Sweep Effect - Clearer Contrast */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 0% 85%, rgba(var(--primary-rgb), 0.1) 95%, rgba(var(--primary-rgb), 0.3) 100%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Crosshair Lines - Clearer */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full opacity-15">
          <div className="w-full h-[1.5px] bg-primary"></div>
          <div className="h-full w-[1.5px] bg-primary absolute"></div>
        </div>

        {/* Dynamic Tracking Network - Fleet & asset icons only */}
        {[
          { radius: 42, speed: 28, delay: 0, type: "car" as const, startAngle: 0 },
          { radius: 62, speed: 38, delay: 2, type: "truck" as const, startAngle: 127 },
          { radius: 82, speed: 48, delay: 4, type: "bus" as const, startAngle: 291 },
          { radius: 100, speed: 58, delay: 1, type: "mobile" as const, startAngle: 53 },
          { radius: 118, speed: 68, delay: 3, type: "dog" as const, startAngle: 218 },
          { radius: 136, speed: 78, delay: 5, type: "mining" as const, startAngle: 334 },
          { radius: 154, speed: 42, delay: 0.5, type: "fuel" as const, startAngle: 76 },
          { radius: 172, speed: 52, delay: 2.5, type: "bike" as const, startAngle: 241 },
          { radius: 188, speed: 62, delay: 4.5, type: "lock" as const, startAngle: 159 },
          { radius: 200, speed: 72, delay: 1.5, type: "temperature" as const, startAngle: 302 },
          { radius: 208, speed: 82, delay: 3.5, type: "tracker" as const, startAngle: 95 },
        ].map((item, i) => (
          <TrackedObject
            key={item.type + item.radius}
            radius={item.radius}
            speed={item.speed}
            delay={item.delay}
            type={item.type}
            color={ORBIT_COLORS[i % ORBIT_COLORS.length]}
            startAngle={item.startAngle}
          />
        ))}

        {/* Central Hub Icon - Sharper glow & primary colors */}
        <motion.div
          className="relative z-10 p-7 bg-gradient-primary text-white rounded-full shadow-[0_0_50px_rgba(var(--primary-rgb),0.4)] border-2 border-white/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 7 9 3 5 7l4 4" />
            <path d="m17 11 4 4-4 4-4-4" />
            <path d="m4.5 15.5 2 2" />
            <path d="m8.5 11.5 2 2" />
            <path d="m13 15h2" />
            <path d="M13 19h2" />
            <path d="M9 15h2" />
            <path d="M9 19h2" />
            <path d="M12 12l-3 3" />
          </svg> */}

          <svg width="40" height="40" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M85.2634 101.955L83.0496 100.156C79.208 103.601 75.4249 107.033 71.5951 110.412C69.7141 112.071 67.8074 113.713 65.8017 115.215C63.1986 117.165 61.5591 116.959 59.2507 114.585C58.4297 113.741 57.6847 112.822 56.6641 111.663C56.3176 114.759 56.139 117.521 55.6796 120.234C54.783 125.656 52.3996 130.723 48.7946 134.871C45.0535 139.214 42.2431 139.489 38.0018 135.793C35.2833 133.425 32.6494 130.96 29.9669 128.549C29.7058 128.403 29.4267 128.293 29.1366 128.221C27.0554 129.936 24.222 130.887 23.9647 134.563C23.8092 136.787 21.7581 137.963 19.497 138.23C18.2936 138.377 17.0747 138.137 16.0166 137.546C14.9584 136.954 14.116 136.041 13.611 134.939C12.6061 132.788 12.637 130.683 14.2253 128.805C14.627 128.332 15.345 127.722 15.834 127.788C19.8751 128.338 21.3965 125.004 23.8288 122.872C22.3337 121.339 20.8432 119.935 19.497 118.404C17.0613 115.631 14.646 112.836 12.3521 109.947C10.9896 108.23 11.6689 106.377 12.6488 104.731C16.5868 98.1197 22.4827 93.9598 29.7136 91.7532C32.4754 90.9105 35.469 90.8264 38.5085 90.3749C38.2979 89.867 38.0518 89.3747 37.7721 88.9014C34.8074 84.4278 34.9918 83.1526 39.0191 79.4502C43.7566 75.0954 48.4553 70.6979 53.196 66.2978C52.3717 64.3826 51.4042 64.5775 50.1342 65.604C48.6342 66.8746 47.0458 68.0371 45.381 69.0827C42.4334 70.8357 40.6016 70.6231 38.0176 68.3371C34.6702 65.3776 31.3275 62.4097 28.1023 59.3203C19.6574 51.2316 11.2506 43.1039 2.88182 34.9373C-0.451717 31.6924 -0.486506 30.8937 2.3049 27.2201C3.13561 26.2079 4.01895 25.2399 4.95126 24.3204C11.6879 17.1663 18.4718 10.0588 25.1507 2.85816C28.2204 -0.452408 29.7398 -1.02605 33.1954 1.87037C40.0529 7.61792 46.6084 13.7271 53.2538 19.7227C58.9298 24.8454 64.5198 30.0634 70.2181 35.1612C73.8175 38.3818 74.0663 39.7798 71.391 43.7303C70.7202 44.72 70.2483 45.8548 69.5152 46.7895C68.6783 47.7362 67.7847 48.6314 66.8393 49.4699L68.8123 52.3578C70.4137 51.0629 71.9259 49.8821 73.3929 48.6476C78.4847 44.361 83.5825 40.0804 88.6343 35.7472C91.3575 33.4107 92.808 33.3673 96.79 35.9533C97.6629 35.4007 98.6402 34.7549 99.6431 34.151C109.016 28.5157 121.122 33.2171 123.454 43.4933C124.694 48.9619 122.651 53.6068 119.062 57.6046C117.735 59.0814 117.017 60.3271 117.452 62.4838C118.062 65.5029 115.892 67.4917 113.938 69.4732C109.491 73.9829 105.115 78.5635 100.472 83.3619L102.473 85.8416C103.705 84.3576 105.016 82.9416 106.401 81.5996C109.686 78.7432 112.587 78.8338 115.625 81.8622C126.073 92.2809 136.643 102.583 146.852 113.235C153.659 120.336 153.11 121.913 146.614 128.922C138.8 137.212 129.686 144.172 119.631 149.526C113.889 152.641 111.367 152.069 107.072 147.254C98.0521 137.147 88.952 127.105 79.8906 117.035C79.2953 116.392 78.7416 115.713 78.2327 115C76.1849 112.042 76.2597 111.138 78.8142 108.49C80.8548 106.376 82.9413 104.305 85.2634 101.955ZM64.1989 108.997C80.7438 94.5308 94.9582 78.4262 110.113 63.209L91.6771 42.199C74.7003 55.7458 58.4323 69.993 42.9847 85.9112L64.1989 108.997ZM43.5426 131.492C47.7195 125.895 51.3563 116.462 49.9209 110.342C48.3719 103.741 43.9719 99.9718 38.6083 99.8163C32.4472 99.6384 24.3992 102.174 20.2308 106.367C27.507 114.546 36.2934 123.341 43.5426 131.492ZM96.3778 99.9876C92.0657 103.713 87.8907 107.318 83.4808 111.128L93.8168 120.316L105.417 110.415L96.3778 99.9876ZM120.737 96.8845L111.745 86.3247L100.644 96.112L110.756 105.923L120.737 96.8845ZM16.6905 20.3942L5.85372 30.1355L16.5842 39.3787L26.0105 29.2626L16.6905 20.3942ZM30.5596 7.58576L20.2315 17.2602L29.9026 25.3252L38.6083 16.3413L30.5596 7.58576ZM143.816 121.506L136.465 114.602L124.254 123.508L131.843 132.606L143.816 121.506ZM124.54 101.225L113.813 110.237L121.37 119.455C125.177 116.252 128.805 113.198 132.659 109.954L124.54 101.225ZM41.779 45.1453L33.3221 54.1103L43.1015 63.1415L50.3088 54.8027L41.779 45.1453ZM115.848 123.914L108.67 114.446C104.704 117.728 101.114 120.694 97.4995 123.685L105.742 131.795L115.848 123.914ZM116.287 144.611L126.281 137.33L118.501 127.98C114.903 130.503 111.584 132.829 108.262 135.158L116.287 144.611ZM54.8887 33.2164L46.5624 41.2821L56.0058 49.8848L63.4467 41.2211L54.8887 33.2164ZM21.2396 43.3897L27.7432 49.1785L37.1499 41.0446C34.8173 38.5918 32.5903 36.2487 30.3384 33.88L21.2396 43.3897ZM43.8373 21.4063L34.6525 29.9537L41.8296 36.6267L50.4742 28.5407L43.8373 21.4063ZM111.938 52.965C116.007 47.6939 116.256 43.7539 112.972 40.7302C109.688 37.7064 104.4 37.8134 100.737 41.2283L111.938 52.965ZM96.3351 88.0186L88.3232 95.2863L90.1826 97.8256L98.2996 89.286L96.3351 88.0186ZM62.0041 54.5014C56.3819 59.5618 56.3819 59.5618 58.257 61.6168L64.4142 56.1291L62.0041 54.5014Z" fill="#000000" />
          </svg>
        </motion.div>

        {/* Decorative Radar Grid - Stronger presence */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border-[0.8px] border-primary"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}