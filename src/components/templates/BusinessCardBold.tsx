import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

const BusinessCardBold = ({ data }: Props) => {
  return (
    <div
      style={{ width: 1080, height: 640, fontFamily: "'Inter', sans-serif", background: "hsl(220 25% 10%)" }}
      className="relative overflow-hidden"
    >
      {/* Geometric gold accent */}
      <div
        className="absolute"
        style={{
          top: 0, right: 0,
          width: 300, height: 300,
          background: "linear-gradient(135deg, hsl(45 80% 55%), hsl(45 90% 40%))",
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
        }}
      />

      {/* Bottom-left small accent */}
      <div
        className="absolute"
        style={{
          bottom: 0, left: 0,
          width: 150, height: 150,
          background: "linear-gradient(315deg, hsl(45 80% 55%), hsl(45 90% 40%))",
          clipPath: "polygon(0 100%, 0 0, 100% 100%)",
        }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-between" style={{ padding: 60 }}>
        {/* Top: Logo */}
        <div className="flex items-start justify-between">
          {data.agentLogo ? (
            <img
              src={data.agentLogo}
              alt=""
              className="object-contain"
              style={{ height: 55, maxWidth: 160 }}
              crossOrigin="anonymous"
            />
          ) : (
            <div style={{ fontSize: 12, letterSpacing: 3 }} className="uppercase font-bold text-white/30">
              LOGO
            </div>
          )}
        </div>

        {/* Center: Name */}
        <div>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 46, lineHeight: 1.1 }}
            className="font-bold text-white mb-3"
          >
            {data.agentName || "İsim Soyisim"}
          </h2>
          <p style={{ fontSize: 15, letterSpacing: 4 }} className="uppercase text-amber-400 font-semibold">
            Emlak Danışmanı
          </p>
        </div>

        {/* Bottom: Contact */}
        <div className="flex items-center gap-8">
          {data.agentPhone && (
            <div className="flex items-center gap-2">
              <span style={{ fontSize: 20 }}>📞</span>
              <span style={{ fontSize: 16 }} className="text-white/80 font-medium">{data.agentPhone}</span>
            </div>
          )}
          {data.location && (
            <div className="flex items-center gap-2">
              <span style={{ fontSize: 20 }}>📍</span>
              <span style={{ fontSize: 16 }} className="text-white/80 font-medium">{data.location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessCardBold;
