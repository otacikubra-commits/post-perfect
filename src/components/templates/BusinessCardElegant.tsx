import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

/**
 * Inspired by reference image 2: White background, gold accents & borders,
 * large logo centered-left, contact details on right, gold bar at bottom with website
 */
const BusinessCardElegant = ({ data }: Props) => {
  return (
    <div
      style={{ width: 1080, height: 640, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden bg-white"
    >
      {/* Top-right corner: decorative logo badge */}
      <div
        className="absolute"
        style={{
          top: 0,
          right: 0,
          width: 200,
          height: 200,
          background: "linear-gradient(135deg, hsl(210 40% 15%), hsl(210 35% 25%))",
          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
        }}
      />
      <div className="absolute" style={{ top: 20, right: 20 }}>
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="object-contain"
            style={{ height: 45, maxWidth: 120 }}
            crossOrigin="anonymous"
          />
        ) : null}
      </div>

      {/* Gold decorative lines */}
      <div className="absolute" style={{ top: 30, left: 50, right: 220, height: 2, background: "hsl(45 80% 55%)" }} />
      <div className="absolute" style={{ top: 36, left: 50, width: 80, height: 2, background: "hsl(45 80% 55%)" }} />

      {/* Left: Name & Title */}
      <div className="absolute" style={{ top: 65, left: 50 }}>
        <h2
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, lineHeight: 1.1, color: "hsl(210 40% 15%)" }}
          className="font-bold mb-2"
        >
          {data.agentName || "İsim Soyisim"}
        </h2>
        <p style={{ fontSize: 13, letterSpacing: 3, color: "hsl(210 20% 45%)" }} className="uppercase">
          Profesyonel Gayrimenkul Danışmanı
        </p>
      </div>

      {/* Center-left: Large Logo */}
      <div className="absolute" style={{ top: 200, left: 50 }}>
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="object-contain"
            style={{ height: 140, maxWidth: 300 }}
            crossOrigin="anonymous"
          />
        ) : (
          <div
            style={{ width: 140, height: 140, border: "3px solid hsl(45 80% 55%)", borderRadius: "50%" }}
            className="flex items-center justify-center"
          >
            <span style={{ fontSize: 12, letterSpacing: 2, color: "hsl(210 20% 45%)" }} className="uppercase">Logo</span>
          </div>
        )}
      </div>

      {/* Right: Contact details */}
      <div className="absolute flex flex-col gap-6" style={{ top: 200, right: 60 }}>
        {data.agentPhone && (
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 44, height: 44, border: "2px solid hsl(45 80% 55%)" }}
            >
              <span style={{ fontSize: 18 }}>📞</span>
            </div>
            <span style={{ fontSize: 22, color: "hsl(210 40% 15%)" }} className="font-bold">{data.agentPhone}</span>
          </div>
        )}
        {data.location && (
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 44, height: 44, border: "2px solid hsl(45 80% 55%)" }}
            >
              <span style={{ fontSize: 18 }}>🏠</span>
            </div>
            <span style={{ fontSize: 15, maxWidth: 300, lineHeight: 1.5, color: "hsl(210 30% 30%)" }}>{data.location}</span>
          </div>
        )}
      </div>

      {/* Bottom: Gold bar with decorative star pattern */}
      <div
        className="absolute flex items-center justify-between"
        style={{
          bottom: 0, left: 0, right: 0, height: 60,
          background: "linear-gradient(90deg, hsl(45 90% 40%), hsl(45 80% 55%), hsl(45 90% 40%))",
          padding: "0 50px",
        }}
      >
        <span style={{ fontSize: 14, letterSpacing: 2 }} className="font-semibold text-white uppercase">
          www.emlak.com
        </span>
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ width: 8, height: 8, background: "white", opacity: 0.5, transform: "rotate(45deg)" }} />
          ))}
        </div>
      </div>

      {/* Gold star accents scattered */}
      <div className="absolute" style={{ bottom: 80, left: 200, opacity: 0.15 }}>
        <span style={{ fontSize: 80, color: "hsl(45 80% 55%)" }}>✦</span>
      </div>
      <div className="absolute" style={{ bottom: 120, right: 80, opacity: 0.08 }}>
        <span style={{ fontSize: 120, color: "hsl(45 80% 55%)" }}>✦</span>
      </div>
    </div>
  );
};

export default BusinessCardElegant;
