import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const TemplateMultiImage = ({ data, text }: Props) => {
  const typeLabel = data.propertyType === "sale" ? "SATILIK" : "KİRALIK";
  const accentColor = "#8AACB8";

  return (
    <div
      style={{ width: 1080, height: 1080, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Top half: main image + text */}
      <div className="absolute left-0 right-0 top-0 flex h-[540px]">
        {/* Main image */}
        <div className="h-full w-[540px] overflow-hidden">
          <img
            src={data.images[0]}
            alt=""
            className="h-full w-full object-cover"
            crossOrigin="anonymous"
          />
        </div>

        {/* Text panel */}
        <div
          className="flex h-full w-[540px] flex-col justify-center px-[50px]"
          style={{ background: accentColor }}
        >
          <h2
            style={{
              fontSize: 52,
              lineHeight: 1.1,
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
            }}
            className="mb-6 font-bold uppercase"
          >
            {typeLabel === "SATILIK" ? `${data.title}\nSATILIK` : `${data.title}\nKİRALIK`}
          </h2>

          <div
            style={{ height: 2, background: "rgba(255,255,255,0.5)", width: 80 }}
            className="mb-6"
          />

          <p
            style={{ fontSize: 16, letterSpacing: 3, color: "rgba(255,255,255,0.8)" }}
            className="mb-2 uppercase"
          >
            Fiyat
          </p>
          <p
            style={{ fontSize: 48, color: "#FFFFFF" }}
            className="font-bold"
          >
            {data.price}
          </p>
        </div>
      </div>

      {/* Bottom row: 3 small images */}
      <div className="absolute left-0 right-0 top-[540px] flex h-[440px]">
        {[0, 1, 2].map((idx) => (
          <div key={idx} className="h-full flex-1 overflow-hidden">
            {data.images[idx] ? (
              <img
                src={data.images[idx]}
                alt=""
                className="h-full w-full object-cover"
                crossOrigin="anonymous"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ background: idx % 2 === 0 ? "#e5e7eb" : "#f3f4f6" }}
              >
                <span style={{ fontSize: 14, color: "#999" }}>Görsel {idx + 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-[40px]"
        style={{ height: 100, background: accentColor }}
      >
        <div className="flex items-center gap-4">
          {data.agentLogo && (
            <img
              src={data.agentLogo}
              alt=""
              className="h-12 w-12 rounded-full object-contain"
              crossOrigin="anonymous"
            />
          )}
          {data.agentName && (
            <span style={{ fontSize: 20, color: "white" }} className="font-semibold">
              {data.agentName}
            </span>
          )}
          {!data.agentName && !data.agentLogo && (
            <span style={{ fontSize: 18, color: "white" }}>{text.cta}</span>
          )}
        </div>
        <div className="text-right">
          {data.agentPhone && (
            <p style={{ fontSize: 18, color: "white", letterSpacing: 1 }} className="font-medium">
              {data.agentPhone}
            </p>
          )}
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
            📍 {data.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateMultiImage;
