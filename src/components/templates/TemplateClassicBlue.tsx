import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const TemplateClassicBlue = ({ data, text }: Props) => {
  const typeLabel = data.propertyType === "sale" ? "SATILIK" : "KİRALIK";

  return (
    <div
      style={{ width: 1080, height: 1080, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Blue border frame */}
      <div
        className="absolute inset-0"
        style={{ background: "#0EA5E9", padding: 16 }}
      >
        <div className="relative h-full w-full overflow-hidden bg-white">
          {/* Top section - diagonal split */}
          <div className="absolute left-0 right-0 top-0 h-[560px]">
            {/* Dark geometric shape */}
            <div
              className="absolute inset-0"
              style={{
                background: "#1a1a2e",
                clipPath: "polygon(0 0, 65% 0, 45% 100%, 0 100%)",
              }}
            />
            {/* Image area */}
            <div
              className="absolute right-0 top-0 h-full"
              style={{
                width: "60%",
                clipPath: "polygon(25% 0, 100% 0, 100% 100%, 5% 100%)",
              }}
            >
              <img
                src={data.images[0]}
                alt=""
                className="h-full w-full object-cover"
                crossOrigin="anonymous"
              />
            </div>

            {/* Text overlay on dark area */}
            <div className="absolute left-[40px] top-[50px] z-10 max-w-[420px]">
              <p
                style={{
                  fontSize: 22,
                  color: "#0EA5E9",
                  fontStyle: "italic",
                  letterSpacing: 1,
                }}
                className="mb-2 font-medium"
              >
                {typeLabel}
              </p>
              <h2
                style={{
                  fontSize: 56,
                  lineHeight: 1.05,
                  color: "#FFFFFF",
                  fontFamily: "'Inter', sans-serif",
                }}
                className="mb-5 font-black uppercase"
              >
                {text.titles[0]}
              </h2>
              <p
                style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}
              >
                📍 {data.location}
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div className="absolute bottom-0 left-0 right-0 h-[488px] bg-white px-[40px] pt-[20px]">
            {/* Section header */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p style={{ fontSize: 16, color: "#0EA5E9", letterSpacing: 2 }} className="font-bold uppercase">
                  Özellikler
                </p>
                <p
                  style={{ fontSize: 28, color: "#1a1a2e" }}
                  className="font-black uppercase"
                >
                  Detaylar
                </p>
              </div>
              <div className="text-right">
                <p style={{ fontSize: 13, color: "#666" }}>Randevu İçin Arayın</p>
                <p style={{ fontSize: 24, color: "#1a1a2e" }} className="font-black">
                  {data.agentPhone || data.price}
                </p>
              </div>
            </div>

            {/* Features + thumbnails row */}
            <div className="flex gap-6">
              {/* Features list */}
              <div className="flex-1 space-y-3 pt-2">
                {data.features.slice(0, 5).map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#0EA5E9",
                        flexShrink: 0,
                      }}
                      className="flex items-center justify-center"
                    >
                      <span style={{ fontSize: 12, color: "white" }}>✓</span>
                    </div>
                    <span style={{ fontSize: 18, color: "#333" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Thumbnail images */}
              <div className="flex gap-3">
                {[1, 2].map((idx) => (
                  <div
                    key={idx}
                    style={{
                      width: 180,
                      height: 200,
                      border: "3px solid #1a1a2e",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    {data.images[idx] ? (
                      <img
                        src={data.images[idx]}
                        alt=""
                        className="h-full w-full object-cover"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-neutral-100">
                        <span style={{ fontSize: 14, color: "#999" }}>Görsel {idx + 1}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Agent bar */}
            <div
              className="mt-4 flex items-center justify-between rounded"
              style={{ background: "#1a1a2e", padding: "12px 20px" }}
            >
              <div className="flex items-center gap-3">
                {data.agentLogo && (
                  <img src={data.agentLogo} alt="" className="h-8 w-8 rounded-full object-contain" crossOrigin="anonymous" />
                )}
                {data.agentName && (
                  <span style={{ fontSize: 15, color: "white" }} className="font-semibold">
                    {data.agentName}
                  </span>
                )}
              </div>
              <p style={{ fontSize: 22, color: "#0EA5E9" }} className="font-black">
                {data.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateClassicBlue;
