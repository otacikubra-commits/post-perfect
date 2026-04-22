import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

const BusinessCardBlueCurved = ({ data }: Props) => {
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
      {/* Blue curved top-right */}
      <div
        className="absolute right-0 top-0"
        style={{
          width: "50%",
          height: "55%",
          background: "#2563EB",
          borderBottomLeftRadius: "50%",
        }}
      />

      {/* Blue curved bottom-left */}
      <div
        className="absolute left-0 bottom-0"
        style={{
          width: "50%",
          height: "45%",
          background: "#2563EB",
          borderTopRightRadius: "50%",
        }}
      />

      {/* Logo centered top */}
      <div className="absolute left-[40px] top-[40px] flex items-center gap-3 z-10">
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="h-[55px] w-auto object-contain"
            crossOrigin="anonymous"
          />
        ) : (
          <div
            style={{
              width: 55,
              height: 55,
              border: "2px dashed #2563EB",
              borderRadius: "50%",
            }}
            className="flex items-center justify-center"
          >
            <span style={{ fontSize: 10, color: "#2563EB" }}>LOGO</span>
          </div>
        )}
      </div>

      {/* Name centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <p style={{ fontSize: 32, color: "#1a1a1a" }} className="font-bold">
          {data.agentName || "İsim Soyisim"}
        </p>
        <p style={{ fontSize: 14, color: "#666", marginTop: 4 }}>
          Emlak Danışmanı
        </p>
      </div>

      {/* Contact bottom-right on blue */}
      <div className="absolute right-[40px] bottom-[30px] z-10 text-right" style={{ maxWidth: 350 }}>
        <div className="space-y-1">
          {data.agentPhone && (
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.9)" }}>{data.agentPhone}</p>
          )}
          {data.agentEmail && (
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.9)" }}>{data.agentEmail}</p>
          )}
          {data.agentAddress && (
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>{data.agentAddress}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessCardBlueCurved;
