import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const TemplateAgentShowcase = ({ data }: Props) => {
  const typeLabel = data.propertyType === "sale" ? "SATILIK" : "KİRALIK";
  const features = data.features?.slice(0, 3) || [];

  return (
    <div
      style={{ width: 1080, height: 1350, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "hsl(30 15% 88%)" }} />

      {/* HERO IMAGE */}
      <div className="absolute left-0 right-0 top-0" style={{ height: 620 }}>
        {data.images[0] ? (
          <img src={data.images[0]} alt="" className="h-full w-full object-cover" crossOrigin="anonymous" />
        ) : (
          <div className="flex h-full w-full items-center justify-center" style={{ background: "hsl(30 10% 80%)" }} />
        )}
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)" }}
        />
      </div>

      {/* PRICE BADGE */}
      {data.price && (
        <div
          className="absolute flex items-center justify-center"
          style={{ top: 30, right: 30, zIndex: 3 }}
        >
          <div
            className="rounded-xl px-6 py-3"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          >
            <span style={{ fontSize: 32, fontWeight: 800, color: "white" }}>
              {data.price}
            </span>
          </div>
        </div>
      )}

      {/* RED BANNER */}
      <div
        className="absolute left-0 right-0 flex items-center justify-center"
        style={{ top: 580, height: 90, zIndex: 2 }}
      >
        <div
          className="flex items-center justify-center px-16 py-3"
          style={{ background: "hsl(0 72% 45%)", borderRadius: 6 }}
        >
          <h1
            style={{ fontSize: 56, letterSpacing: 14, color: "white" }}
            className="font-black uppercase"
          >
            {typeLabel}
          </h1>
        </div>
      </div>

      {/* FEATURE CHIPS */}
      {features.length > 0 && (
        <div
          className="absolute left-0 right-0 flex items-center justify-center gap-3"
          style={{ top: 680, zIndex: 2 }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-full px-5 py-2"
              style={{
                background: "white",
                border: "1px solid hsl(0 0% 85%)",
                fontSize: 16,
                fontWeight: 600,
                color: "hsl(0 0% 25%)",
              }}
            >
              {f}
            </div>
          ))}
        </div>
      )}

      {/* GRID - 3 small images */}
      <div
        className="absolute left-6 right-6 flex gap-2"
        style={{ top: 730, height: 240 }}
      >
        {[0, 1, 2].map((idx) => (
          <div key={idx} className="h-full flex-1 overflow-hidden rounded-lg">
            {data.images[idx] ? (
              <img src={data.images[idx]} alt="" className="h-full w-full object-cover" crossOrigin="anonymous" />
            ) : (
              <div
                className="h-full w-full"
                style={{ background: idx % 2 === 0 ? "hsl(30 10% 82%)" : "hsl(30 10% 78%)" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* AGENT CARD */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center"
        style={{ top: 990, background: "hsl(30 15% 88%)" }}
      >
        <div
          className="flex flex-col items-center rounded-2xl px-12 py-5"
          style={{ background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", minWidth: 600 }}
        >
          {/* Logo */}
          {data.agentLogo && (
            <img
              src={data.agentLogo}
              alt=""
              className="mb-3 object-contain"
              style={{ height: 48, maxWidth: 200 }}
              crossOrigin="anonymous"
            />
          )}

          {/* Name */}
          <h2
            style={{ fontSize: 34, color: "hsl(220 20% 20%)" }}
            className="mb-1 font-black uppercase"
          >
            {data.agentName || "Emlak Ofisi"}
          </h2>

          {/* Phone */}
          {data.agentPhone && (
            <p style={{ fontSize: 26, color: "hsl(0 72% 45%)" }} className="mb-3 font-bold">
              {data.agentPhone}
            </p>
          )}

          {/* CTA BUTTON */}
          <div className="mb-3">
            <div
              className="rounded-full px-10 py-2"
              style={{ background: "hsl(0 72% 45%)", cursor: "pointer" }}
            >
              <span style={{ fontSize: 18, fontWeight: 700, color: "white", letterSpacing: 3 }}>
                HEMEN ARA
              </span>
            </div>
          </div>

          {/* Location */}
          <p style={{ fontSize: 16, color: "hsl(220 10% 45%)" }}>
            📍 {data.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateAgentShowcase;
