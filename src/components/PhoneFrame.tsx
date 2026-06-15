import ThemedImage from "./ThemedImage";

export default function PhoneFrame({
  dark,
  light,
  alt,
  width = 322,
  outerRadius = 46,
  innerRadius = 39,
  glow = false,
  className = "",
}: {
  dark: string;
  light: string;
  alt: string;
  width?: number;
  outerRadius?: number;
  innerRadius?: number;
  glow?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#0b0a09] border border-[rgba(242,234,217,0.12)] ${className}`}
      style={{
        borderRadius: outerRadius,
        padding: 7,
        boxShadow: glow
          ? "0 50px 90px -24px rgba(0,0,0,0.75), 0 0 70px -18px rgba(255,77,0,0.35)"
          : "0 36px 70px -26px rgba(0,0,0,0.7)",
        width: "100%",
        maxWidth: width,
      }}
    >
      <div
        className="relative overflow-hidden bg-[#060503]"
        style={{ borderRadius: innerRadius, aspectRatio: "0.5" }}
      >
        <ThemedImage
          dark={dark}
          light={light}
          alt={alt}
          fill
          sizes="(max-width: 768px) 60vw, 322px"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
    </div>
  );
}
