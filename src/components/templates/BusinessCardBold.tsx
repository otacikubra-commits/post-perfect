import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

/**
 * Inspired by reference image 3: Clean white with navy geometric arc/circle on right,
 * contact info on left with icons, logo & QR on right side
 */
const BusinessCardBold = ({ data }: Props) => {
  return (
    <div
      style={{ width: 1080, height: 640, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden bg-white"
    >
      {/* Right: Large navy circle (partially visible) */}
      <div
        className="absolute"
        style={{
          top: -80,
          right: -120,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "hsl(210 40% 15%)",
        }}
      />
      {/* Smaller teal circle accent */}
      <div
        className="absolute"
        style={{
          bottom: -60,
          right: 100,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "hsl(180 35% 35%)",
          opacity: 0.8,
        }}
      />

      {/* Top-left: Logo small */}
      <div className="absolute" style={{ top: 40, left: 50 }}>
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="object-contain"
            style={{ height: 50, maxWidth: 160 }}
            crossOrigin="anonymous"
          />
        ) : null}
      </div>

      {/* Left: Name & Title */}
      <div className="absolute" style={{ top: 120, left: 50, maxWidth: 500 }}>
        <h2
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 46, lineHeight: 1.1, color: "hsl(210 40% 15%)" }}
          className="font-bold mb-3"
        >
          {data.agentName || "İsim Soyisim"}
        </h2>
        <p style={{ fontSize: 13, letterSpacing: 3, color: "hsl(210 20% 45%)" }} className="uppercase font-medium">
          Profesyonel Gayrimenkul Danışmanı
        </p>
      </div>

      {/* Left: Contact details */}
      <div className="absolute flex flex-col gap-4" style={{ top: 300, left: 50 }}>
        {data.agentPhone && (
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 38, height: 38, background: "hsl(45 80% 55%)" }}
            >
              <span style={{ fontSize: 16 }}>📞</span>
            </div>
            <span style={{ fontSize: 24, color: "hsl(210 40% 15%)" }} className="font-bold">{data.agentPhone}</span>
          </div>
        )}
        {data.location && (
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 38, height: 38, background: "hsl(45 80% 55%)" }}
            >
              <span style={{ fontSize: 16 }}>📍</span>
            </div>
            <span style={{ fontSize: 15, maxWidth: 350, lineHeight: 1.4, color: "hsl(210 30% 30%)" }}>{data.location}</span>
          </div>
        )}
      </div>

      {/* Right circle: Logo large */}
      <div className="absolute flex items-center justify-center" style={{ top: 60, right: 40, width: 200, height: 200 }}>
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="object-contain"
            style={{ height: 100, maxWidth: 160 }}
            crossOrigin="anonymous"
          />
        ) : (
          <span style={{ fontSize: 14, color: "white", letterSpacing: 2 }} className="uppercase font-bold">Logo</span>
        )}
      </div>

      {/* Bottom-right: QR-style decorative grid */}
      <div className="absolute" style={{ bottom: 40, right: 50 }}>
        <div className="grid grid-cols-6 gap-px">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                background: (i + Math.floor(i / 6)) % 2 === 0 ? "hsl(210 40% 15%)" : "hsl(45 80% 55%)",
                opacity: i % 5 === 0 ? 0.4 : 1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div
        className="absolute"
        style={{ bottom: 0, left: 0, width: "60%", height: 5, background: "linear-gradient(90deg, hsl(45 80% 55%), hsl(45 90% 40%), transparent)" }}
      />
    </div>
  );
};

export default BusinessCardBold;
