import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

/**
 * Large main image top, bold red SATILIK banner across middle,
 * 3 small images row below, beige footer with agent info
 */
const TemplateAgentShowcase = ({ data, text }: Props) => {
  const typeLabel = data.propertyType === "sale" ? "SATILIK" : "KİRALIK";

  return (
    <div
      style={{ width: 1080, height: 1350, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "hsl(30 15% 88%)" }} />

      {/* Main large image */}
      <div className="absolute left-0 right-0 top-0" style={{ height: 680 }}>
        {data.images[0] ? (
          <img src={data.images[0]} alt="" className="h-full w-full object-cover" crossOrigin="anonymous" />
        ) : (
          <div className="flex h-full w-full items-center justify-center" style={{ background: "hsl(30 10% 80%)" }}>
            <span style={{ fontSize: 20, color: "hsl(30 10% 50%)" }}>Ana Görsel</span>
          </div>
        )}
      </div>

      {/* Red banner across middle */}
      <div
        className="absolute left-0 right-0 flex items-center justify-center"
        style={{ top: 620, height: 100, background: "hsl(0 72% 45%)", zIndex: 2 }}
      >
        <h1
          style={{ fontSize: 72, letterSpacing: 16, color: "white" }}
          className="font-black uppercase"
        >
          {typeLabel}
        </h1>
      </div>

      {/* 3 small images row */}
      <div
        className="absolute left-0 right-0 flex gap-[4px]"
        style={{ top: 720, height: 260 }}
      >
        {[0, 1, 2].map((idx) => (
          <div key={idx} className="h-full flex-1 overflow-hidden">
            {data.images[idx] ? (
              <img src={data.images[idx]} alt="" className="h-full w-full object-cover" crossOrigin="anonymous" />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ background: idx % 2 === 0 ? "hsl(30 10% 82%)" : "hsl(30 10% 78%)" }}
              >
                <span style={{ fontSize: 14, color: "hsl(30 10% 50%)" }}>Görsel {idx + 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Beige footer with agent info */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center"
        style={{ top: 980, background: "hsl(30 15% 88%)" }}
      >
        {/* White card */}
        <div
          className="flex flex-col items-center rounded-2xl px-12 py-6"
          style={{ background: "white", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", minWidth: 600 }}
        >
          {data.agentLogo && (
            <img
              src={data.agentLogo}
              alt=""
              className="mb-3 object-contain"
              style={{ height: 50, maxWidth: 200 }}
              crossOrigin="anonymous"
            />
          )}
          <h2
            style={{ fontSize: 36, color: "hsl(220 20% 20%)" }}
            className="mb-2 font-black uppercase"
          >
            {data.agentName || "Emlak Ofisi"}
          </h2>
          {data.agentPhone && (
            <p style={{ fontSize: 30, color: "hsl(0 72% 45%)" }} className="mb-2 font-bold">
              📞 {data.agentPhone}
            </p>
          )}
          <p style={{ fontSize: 18, color: "hsl(220 10% 40%)" }}>
            📍 {data.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateAgentShowcase;
