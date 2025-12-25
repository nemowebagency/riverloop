import type { FC } from "react";

export const Logo: FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-2 ${className ?? ""}`}>
    {/* Placeholder SVG logo, easily replaceable with a real asset */}
    <svg
      aria-hidden="true"
      className="h-8 w-8 text-riverloop-400"
      viewBox="0 0 40 40"
      fill="none"
    >
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="12"
        className="fill-slate-900"
      />
      <path
        d="M11 26C13.5 22 15.5 20.5 19 20.5C23 20.5 25.5 18 27.5 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 14C15 18 17 20.5 21 20.5C24.5 20.5 26.5 22 29 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
    <span className="text-base font-semibold tracking-tight text-slate-50">
      Riverloop
    </span>
  </div>
);


