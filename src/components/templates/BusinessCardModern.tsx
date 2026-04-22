import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

const BusinessCardModern = ({ data }: Props) => {
  return (
    <div
      style={{ width: 1080, height: 640, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden bg-white"
    >
      {/* Left side - dark panel */}
      <div
        className="absolute left-0 top-0 bottom-0 flex flex-col justify-between"
        style={{ width: 420, background: "hsl(220 25% 10%)", padding: 50 }}
      >
        {/* Logo area */}
        <div>
          {data.agentLogo ? (
            <img
              src={data.agentLogo}
              alt=""
              className="object-contain"
              style={{ height: 70, maxWidth: 200 }}
              crossOrigin="anonymous"
            />
          ) : (
            <div
              style={{ fontSize: 14, letterSpacing: 3 }}
              className="uppercase font-bold text-white/40"
            >
              LOGO
            </div>
          )}
        </div>

        {/* Name & Title */}
        <div>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, lineHeight: 1.2 }}
            className="font-bold text-white mb-2"
          >
            {data.agentName || "İsim Soyisim"}
          </h2>
          <p style={{ fontSize: 14, letterSpacing: 2 }} className="uppercase text-amber-400">
            Emlak Danışmanı
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          {data.agentPhone && (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full" style={{ width: 32, height: 32, background: "hsl(45 80% 55%)" }}>
                <span style={{ fontSize: 14 }}>📞</span>
              </div>
              <span style={{ fontSize: 15 }} className="text-white/80">{data.agentPhone}</span>
            </div>
          )}
          {data.location && (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full" style={{ width: 32, height: 32, background: "hsl(45 80% 55%)" }}>
                <span style={{ fontSize: 14 }}>📍</span>
              </div>
              <span style={{ fontSize: 15 }} className="text-white/80">{data.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Right side - image */}
      <div className="absolute right-0 top-0 bottom-0" style={{ left: 420 }}>
        {data.images[0] ? (
          <img
            src={data.images[0]}
            alt=""
            className="h-full w-full object-cover"
            crossOrigin="anonymous"
          />
        ) : (
          <div className="h-full w-full" style={{ background: "hsl(220 15% 92%)" }} />
        )}
        {/* Gold accent stripe */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: 0, width: 6, background: "linear-gradient(180deg, hsl(45 80% 55%), hsl(45 90% 40%))" }}
        />
      </div>
    </div>
  );
};

export default BusinessCardModern;
