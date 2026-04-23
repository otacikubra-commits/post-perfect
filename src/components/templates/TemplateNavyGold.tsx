import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const TemplateNavyGold = ({ data, text }: Props) => {
  const typeLabel = data.propertyType === "sale" ? "SATILIK" : "KİRALIK";

  return (
    <div
      style={{ width: 1080, height: 1350, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Navy background */}
      <div className="absolute inset-0" style={{ background: "hsl(220 40% 13%)" }} />

      {/* Top gold line */}
      <div className="absolute left-0 right-0 top-0" style={{ height: 6, background: "hsl(38 55% 55%)" }} />

      {/* Title */}
      <div className="absolute left-0 right-0 top-[40px] flex flex-col items-center">
        <h1
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, lineHeight: 1.1, color: "white" }}
          className="mb-6 text-center font-bold"
        >
          {data.title || `${typeLabel} Daire`}
        </h1>

        {/* Badges row */}
        <div className="flex gap-4">
          <span
            style={{
              fontSize: 20,
              letterSpacing: 2,
              padding: "12px 28px",
              border: "2px solid hsl(38 55% 55%)",
              color: "white",
            }}
          >
            {text.titles[0]?.split("—")[0]?.trim() || data.title}
          </span>
          <span
            style={{
              fontSize: 22,
              padding: "12px 28px",
              background: "hsl(38 55% 55%)",
              color: "hsl(220 40% 13%)",
              fontWeight: 700,
            }}
          >
            {data.price}
          </span>
        </div>
      </div>

      {/* Image grid: 1 large left + 2 stacked right */}
      <div
        className="absolute flex gap-[6px]"
        style={{ top: 300, left: 40, right: 40, bottom: 280 }}
      >
        {/* Large left image */}
        <div className="h-full overflow-hidden" style={{ flex: "1 1 50%" }}>
          {data.images[0] ? (
            <img src={data.images[0]} alt="" className="h-full w-full object-cover" crossOrigin="anonymous" />
          ) : (
            <div className="flex h-full w-full items-center justify-center" style={{ background: "hsl(220 30% 20%)" }}>
              <span style={{ color: "hsl(38 55% 55%)", fontSize: 16 }}>Görsel 1</span>
            </div>
          )}
        </div>

        {/* Right stacked images */}
        <div className="flex flex-col gap-[6px]" style={{ flex: "1 1 50%" }}>
          <div className="overflow-hidden" style={{ flex: 1 }}>
            {data.images[1] ? (
              <img src={data.images[1]} alt="" className="h-full w-full object-cover" crossOrigin="anonymous" />
            ) : (
              <div className="flex h-full w-full items-center justify-center" style={{ background: "hsl(220 30% 20%)" }}>
                <span style={{ color: "hsl(38 55% 55%)", fontSize: 16 }}>Görsel 2</span>
              </div>
            )}
          </div>
          <div className="overflow-hidden" style={{ flex: 1 }}>
            {data.images[2] ? (
              <img src={data.images[2]} alt="" className="h-full w-full object-cover" crossOrigin="anonymous" />
            ) : (
              <div className="flex h-full w-full items-center justify-center" style={{ background: "hsl(220 30% 20%)" }}>
                <span style={{ color: "hsl(38 55% 55%)", fontSize: 16 }}>Görsel 3</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div
        className="absolute left-[40px] right-[40px] flex"
        style={{ bottom: 46, height: 220 }}
      >
        {/* Left: Agent info */}
        <div
          className="flex flex-col justify-center px-8"
          style={{ flex: "1 1 50%", background: "hsl(38 55% 55%)" }}
        >
          <div className="mb-3 flex items-center gap-3">
            {data.agentLogo && (
              <img src={data.agentLogo} alt="" className="h-10 w-10 object-contain" crossOrigin="anonymous" />
            )}
            <span style={{ fontSize: 22, color: "hsl(220 40% 13%)" }} className="font-bold">
              {data.agentName || "Emlak Ofisi"}
            </span>
          </div>
          {data.agentPhone && (
            <p style={{ fontSize: 24, color: "hsl(220 40% 13%)" }} className="mb-1 font-bold">
              📞 {data.agentPhone}
            </p>
          )}
          <p style={{ fontSize: 14, color: "hsl(220 40% 20%)" }}>
            📍 {data.location}
          </p>
        </div>

        {/* Right: Features */}
        <div
          className="flex flex-col justify-center px-8"
          style={{ flex: "1 1 50%", background: "hsl(38 45% 48%)" }}
        >
          <p style={{ fontSize: 16, letterSpacing: 2, color: "white" }} className="mb-3 font-bold uppercase">
            Konut Özellikleri
          </p>
          {data.features.length > 0 ? (
            data.features.slice(0, 5).map((f, i) => (
              <p key={i} style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", lineHeight: 1.8 }}>
                • {f}
              </p>
            ))
          ) : (
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)" }}>
              {data.title} — {data.location}
            </p>
          )}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: 6, background: "hsl(38 55% 55%)" }} />
    </div>
  );
};

export default TemplateNavyGold;
