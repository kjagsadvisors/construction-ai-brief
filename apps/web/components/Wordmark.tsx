// Wordmark — set in Fraunces with the SOFT/WONK axes tuned.
// The square crop-mark on the left mimics the corner of a drawing sheet.

export function Wordmark({
  size = "default",
  showSub = true,
}: {
  size?: "default" | "lg" | "sm";
  showSub?: boolean;
}) {
  const heading =
    size === "lg"
      ? "text-3xl md:text-[40px]"
      : size === "sm"
        ? "text-base"
        : "text-xl md:text-2xl";
  return (
    <a href="/" className="group inline-flex items-center gap-3">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 text-ink shrink-0"
      >
        <path
          d="M2 8 L2 2 L8 2 M22 16 L22 22 L16 22 M22 8 L22 2 L16 2 M2 16 L2 22 L8 22"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="square"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display ${heading} tracking-tightest text-ink group-hover:text-accent transition-colors`}
          style={{ fontVariationSettings: '"SOFT" 25, "WONK" 1, "opsz" 96' }}
        >
          Construction AI Brief
        </span>
        {showSub && (
          <span className="meta mt-1.5">
            <span className="text-accent">●</span>{" "}
            tools · news · field reports — 3× weekly
          </span>
        )}
      </span>
    </a>
  );
}
