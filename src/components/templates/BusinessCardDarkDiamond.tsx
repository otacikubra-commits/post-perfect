import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

/**
 * Dark navy background, diamond-shaped photo frame in center,
 * logo top-left, contact info on right, blue accent bar at bottom
 */
const BusinessCardDarkDiamond = ({ data }: Props) => {
  const mainImage = data.images?.[0];

  return (
    <div
      style={{ width: 1050, height: 600, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Dark background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, hsl(210 40% 12%), hsl(210 35% 18%))" }}
      />

      {/* Subtle dark pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "repeating-linear-gradient(45deg, transparent, transparent 20px, hsla(0,0%,100%,0.02) 20px, hsla(0,0%,100%,0.02) 40px)",
        }}
      />

      {/* Logo top left */}
      <div className="absolute flex items-center gap-3" style={{ top: 35, left: 45 }}>
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="object-contain"
            style={{ height: 50, maxWidth: 160 }}
            crossOrigin="anonymous"
          />
        ) : (
          <span style={{ fontSize: 18, color: "hsl(200 75% 55%)", fontWeight: 800, letterSpacing: 2 }} className="uppercase">
            EMLAK
          </span>
        )}
      </div>

      {/* Name & title below logo */}
      <div className="absolute" style={{ top: 110, left: 45 }}>
        <h2
          style={{ fontSize: 26, color: "white" }}
          className="font-extrabold"
        >
          {data.agentName || "İsim Soyisim"}
        </h2>
        <p style={{ fontSize: 11, letterSpacing: 2, color: "hsl(200 75% 55%)", marginTop: 4 }} className="uppercase font-semibold">
          Gayrimenkul Danışmanı
        </p>
      </div>

      {/* Diamond photo frame - center */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(45deg)",
          width: 220,
          height: 220,
          overflow: "hidden",
          border: "4px solid hsl(200 75% 55%)",
        }}
      >
        {mainImage ? (
          <img
            src={mainImage}
            alt=""
            className="object-cover"
            style={{
              width: 320,
              height: 320,
              transform: "rotate(-45deg)",
            }}
            crossOrigin="anonymous"
          />
        ) : (
          <div
            style={{
              width: 320,
              height: 320,
              background: "hsl(210 30% 25%)",
              transform: "rotate(-45deg)",
            }}
            className="flex items-center justify-center"
          >
            <span style={{ fontSize: 14, color: "hsl(0 0% 50%)", transform: "rotate(45deg)" }}>🏠</span>
          </div>
        )}
      </div>

      {/* Contact info - right side */}
      <div className="absolute flex flex-col gap-5" style={{ top: 140, right: 50 }}>
        {data.agentPhone && (
          <div className="flex items-center gap-3">
            <span style={{ fontSize: 15, color: "hsl(200 75% 55%)" }}>📞</span>
            <span style={{ fontSize: 18, color: "white" }} className="font-semibold">
              {data.agentPhone}
            </span>
          </div>
        )}
        {data.location && (
          <div className="flex items-center gap-3">
            <span style={{ fontSize: 15, color: "hsl(200 75% 55%)" }}>📍</span>
            <span
              style={{ fontSize: 14, maxWidth: 240, lineHeight: 1.5, color: "hsl(0 0% 75%)" }}
            >
              {data.location}
            </span>
          </div>
        )}
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: "linear-gradient(90deg, hsl(200 75% 55%), hsl(200 85% 40%))",
        }}
      />
    </div>
  );
};

export default BusinessCardDarkDiamond;
