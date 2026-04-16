import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const TemplateGeoBold = ({ data, text }: Props) => {
  const typeLabel = data.propertyType === "sale" ? "SATILIK" : "KİRALIK";

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        fontFamily: "'Inter', sans-serif",
        background: "#4a4a4a",
      }}
      className="relative overflow-hidden"
    >
      {/* Left white panel */}
      <div
        className="absolute left-0 top-0 h-full"
        style={{
          width: "40%",
          background: "#FFFFFF",
          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
        }}
      />

      {/* Yellow accent shape top-left */}
      <div
        className="absolute left-0 top-0"
        style={{
          width: "55%",
          height: "52%",
          background: "#F5C518",
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
        }}
      />

      {/* Dark top-right area */}
      <div
        className="absolute right-0 top-0"
        style={{
          width: "55%",
          height: "52%",
          background: "#2d2d3a",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 10% 100%)",
        }}
      />

      {/* House-shaped image cutout */}
      <div
        className="absolute overflow-hidden"
        style={{
          right: 60,
          top: 80,
          width: 440,
          height: 500,
          clipPath: "polygon(50% 0%, 100% 30%, 100% 100%, 0 100%, 0 30%)",
        }}
      >
        <img
          src={data.images[0]}
          alt=""
          className="h-full w-full object-cover"
          crossOrigin="anonymous"
        />
      </div>

      {/* Title text */}
      <div className="absolute left-[50px] top-[60px] z-10 max-w-[420px]">
        <h2
          style={{
            fontSize: 62,
            lineHeight: 1.05,
            color: "#1a1a2e",
            fontFamily: "'Inter', sans-serif",
          }}
          className="font-black uppercase"
        >
          {typeLabel === "SATILIK" ? "SATILIK\nEMLAK" : "KİRALIK\nEMLAK"}
        </h2>
        <p
          style={{ fontSize: 16, color: "rgba(0,0,0,0.6)", lineHeight: 1.6, marginTop: 16 }}
        >
          {data.title} — {data.location}
        </p>

        {/* Call badge */}
        <div className="mt-5">
          <span
            style={{
              fontSize: 12,
              background: "#1a1a2e",
              color: "white",
              padding: "6px 14px",
              letterSpacing: 2,
            }}
            className="font-bold uppercase"
          >
            Hemen Arayın
          </span>
          {data.agentPhone && (
            <p style={{ fontSize: 22, color: "#1a1a2e", marginTop: 8 }} className="font-bold">
              {data.agentPhone}
            </p>
          )}
        </div>
      </div>

      {/* Dots decoration */}
      <div className="absolute left-[50px] top-[520px] z-10">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#1a1a2e",
              }}
            />
          ))}
        </div>
      </div>

      {/* Price banner */}
      <div
        className="absolute left-0 right-0 z-10"
        style={{ bottom: 180 }}
      >
        {/* Yellow price bar */}
        <div
          style={{
            background: "#F5C518",
            padding: "16px 50px",
            display: "inline-block",
          }}
        >
          <span style={{ fontSize: 14, color: "#1a1a2e", letterSpacing: 2 }} className="font-bold uppercase">
            Fiyat
          </span>
        </div>
        <div
          style={{
            background: "#E53E3E",
            padding: "16px 50px",
            display: "inline-block",
            marginLeft: -4,
          }}
        >
          <span style={{ fontSize: 36, color: "white" }} className="font-black">
            {data.price}
          </span>
        </div>
      </div>

      {/* Bottom agent/logo bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-[50px]"
        style={{ height: 120, background: "#2d2d3a" }}
      >
        <div className="flex items-center gap-4">
          {data.agentLogo && (
            <img
              src={data.agentLogo}
              alt=""
              className="h-12 w-12 rounded-full object-contain"
              crossOrigin="anonymous"
              style={{ border: "2px solid #F5C518" }}
            />
          )}
          <div>
            {data.agentName && (
              <p style={{ fontSize: 18, color: "white" }} className="font-bold">
                {data.agentName}
              </p>
            )}
            {!data.agentName && (
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)" }}>{text.cta}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>📍 {data.location}</span>
        </div>
      </div>
    </div>
  );
};

export default TemplateGeoBold;
