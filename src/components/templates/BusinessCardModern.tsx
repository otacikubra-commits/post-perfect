import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

/**
 * Inspired by reference image 1: Split layout with dark navy/teal geometric shapes,
 * large name on left, contact info with circular icons on right, logo bottom-left, QR-style accent
 */
const BusinessCardModern = ({ data }: Props) => {
  return (
    <div
      style={{ width: 1080, height: 640, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden bg-white"
    >
      {/* Geometric dark shapes - top right triangle */}
      <div
        className="absolute"
        style={{
          top: 0,
          right: 0,
          width: 500,
          height: 640,
          background: "hsl(210 40% 15%)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 10% 100%)",
        }}
      />
      {/* Teal accent triangle */}
      <div
        className="absolute"
        style={{
          top: 0,
          right: 180,
          width: 200,
          height: 640,
          background: "hsl(180 35% 35%)",
          clipPath: "polygon(60% 0, 100% 0, 40% 100%, 0% 100%)",
        }}
      />

      {/* Top-left: Small logo */}
      <div className="absolute" style={{ top: 40, left: 50 }}>
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="object-contain"
            style={{ height: 50, maxWidth: 160 }}
            crossOrigin="anonymous"
          />
        ) : (
          <div style={{ fontSize: 11, letterSpacing: 3 }} className="uppercase font-bold" />
        )}
      </div>

      {/* Left side: Name & Title */}
      <div className="absolute" style={{ top: 140, left: 50, maxWidth: 450 }}>
        <h2
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, lineHeight: 1.1, color: "hsl(210 40% 15%)" }}
          className="font-bold mb-3"
        >
          {data.agentName || "İsim Soyisim"}
        </h2>
        <p style={{ fontSize: 14, letterSpacing: 3, color: "hsl(210 20% 45%)" }} className="uppercase font-medium">
          Profesyonel Gayrimenkul Danışmanı
        </p>
      </div>

      {/* Right side: Contact info with circle icons */}
      <div className="absolute flex flex-col gap-5" style={{ top: 140, right: 50 }}>
        {data.agentPhone && (
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 42, height: 42, background: "hsl(45 80% 55%)" }}
            >
              <span style={{ fontSize: 18 }}>📞</span>
            </div>
            <span style={{ fontSize: 20 }} className="font-semibold text-white">{data.agentPhone}</span>
          </div>
        )}
        {data.location && (
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 42, height: 42, background: "hsl(45 80% 55%)" }}
            >
              <span style={{ fontSize: 18 }}>📍</span>
            </div>
            <span style={{ fontSize: 16, maxWidth: 260, lineHeight: 1.4 }} className="text-white/90">{data.location}</span>
          </div>
        )}
      </div>

      {/* Bottom-left: Large logo watermark */}
      <div className="absolute" style={{ bottom: 40, left: 50 }}>
        {data.agentLogo && (
          <img
            src={data.agentLogo}
            alt=""
            className="object-contain opacity-60"
            style={{ height: 90, maxWidth: 220 }}
            crossOrigin="anonymous"
          />
        )}
      </div>

      {/* Bottom-right: Decorative grid (QR-like accent) */}
      <div className="absolute" style={{ bottom: 35, right: 50 }}>
        <div className="grid grid-cols-5 gap-1">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 10,
                height: 10,
                background: i % 3 === 0 ? "hsl(45 80% 55%)" : "hsl(210 40% 15%)",
                opacity: i % 7 === 0 ? 0.3 : 0.8,
              }}
            />
          ))}
        </div>
      </div>

      {/* Gold accent line */}
      <div
        className="absolute"
        style={{ bottom: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg, hsl(45 80% 55%), hsl(45 90% 40%))" }}
      />
    </div>
  );
};

export default BusinessCardModern;
