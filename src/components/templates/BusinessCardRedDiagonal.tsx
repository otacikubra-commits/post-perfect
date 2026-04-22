import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

const BusinessCardRedDiagonal = ({ data }: Props) => {
  return (
    <div
      style={{
        width: 1050,
        height: 600,
        fontFamily: "'Inter', sans-serif",
        background: "#FFFFFF",
      }}
      className="relative overflow-hidden"
    >
      {/* Red diagonal header */}
      <div
        className="absolute top-0 left-0"
        style={{
          width: "60%",
          height: "40%",
          background: "#DC2626",
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
        }}
      />

      {/* Name on red area */}
      <div className="absolute left-[40px] top-[30px] z-10">
        <p style={{ fontSize: 32, color: "#FFFFFF" }} className="font-bold">
          {data.agentName || "İsim Soyisim"}
        </p>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", letterSpacing: 2, marginTop: 4 }} className="uppercase">
          Emlak Danışmanı
        </p>
      </div>

      {/* Logo area - right side */}
      <div className="absolute right-[40px] top-[30px] flex items-center gap-3">
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="h-[80px] w-auto object-contain"
            crossOrigin="anonymous"
          />
        ) : (
          <div
            style={{
              width: 80,
              height: 80,
              border: "2px dashed #ccc",
              borderRadius: 8,
            }}
            className="flex items-center justify-center"
          >
            <span style={{ fontSize: 11, color: "#999" }}>LOGO</span>
          </div>
        )}
      </div>

      {/* Bottom thin red line accent */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 6, background: "#DC2626" }}
      />

      {/* Contact info */}
      <div className="absolute left-[40px] bottom-[40px]" style={{ maxWidth: 420 }}>
        <div className="space-y-2">
          {data.agentPhone && (
            <div className="flex items-center gap-3">
              <span style={{ fontSize: 16, color: "#DC2626" }}>📞</span>
              <span style={{ fontSize: 16, color: "#333" }}>{data.agentPhone}</span>
            </div>
          )}
          {data.agentEmail && (
            <div className="flex items-center gap-3">
              <span style={{ fontSize: 16, color: "#DC2626" }}>✉️</span>
              <span style={{ fontSize: 16, color: "#333" }}>{data.agentEmail}</span>
            </div>
          )}
          {data.agentAddress && (
            <div className="flex items-center gap-3">
              <span style={{ fontSize: 16, color: "#DC2626" }}>📍</span>
              <span style={{ fontSize: 14, color: "#555", lineHeight: 1.4 }}>{data.agentAddress}</span>
            </div>
          )}
        </div>
      </div>

      {/* Right side decorative element */}
      <div
        className="absolute right-0 bottom-0"
        style={{
          width: "35%",
          height: "55%",
          background: "#DC2626",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
          opacity: 0.08,
        }}
      />
    </div>
  );
};

export default BusinessCardRedDiagonal;
