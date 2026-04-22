import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

const BusinessCardElegant = ({ data }: Props) => {
  return (
    <div
      style={{ width: 1080, height: 640, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Full background image */}
      <div className="absolute inset-0">
        {data.images[0] ? (
          <img
            src={data.images[0]}
            alt=""
            className="h-full w-full object-cover"
            crossOrigin="anonymous"
          />
        ) : (
          <div className="h-full w-full" style={{ background: "hsl(220 25% 10%)" }} />
        )}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content centered */}
      <div className="relative flex h-full flex-col items-center justify-center text-center" style={{ padding: 60 }}>
        {/* Logo */}
        {data.agentLogo && (
          <img
            src={data.agentLogo}
            alt=""
            className="object-contain mb-6"
            style={{ height: 60, maxWidth: 180 }}
            crossOrigin="anonymous"
          />
        )}

        {/* Gold divider */}
        <div style={{ width: 60, height: 2, background: "hsl(45 80% 55%)" }} className="mb-6" />

        {/* Name */}
        <h2
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, letterSpacing: 2 }}
          className="font-bold text-white mb-2"
        >
          {data.agentName || "İsim Soyisim"}
        </h2>

        <p style={{ fontSize: 13, letterSpacing: 4 }} className="uppercase text-amber-400 mb-8">
          Emlak Danışmanı
        </p>

        {/* Gold divider */}
        <div style={{ width: 60, height: 2, background: "hsl(45 80% 55%)" }} className="mb-8" />

        {/* Contact row */}
        <div className="flex items-center gap-8">
          {data.agentPhone && (
            <span style={{ fontSize: 16 }} className="text-white/80">
              📞 {data.agentPhone}
            </span>
          )}
          {data.location && (
            <span style={{ fontSize: 16 }} className="text-white/80">
              📍 {data.location}
            </span>
          )}
        </div>
      </div>

      {/* Gold border */}
      <div className="absolute inset-4 border-2" style={{ borderColor: "hsl(45 80% 55% / 0.3)" }} />
    </div>
  );
};

export default BusinessCardElegant;
