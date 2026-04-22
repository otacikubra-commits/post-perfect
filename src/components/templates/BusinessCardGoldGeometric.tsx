import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

const BusinessCardGoldGeometric = ({ data }: Props) => {
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
      {/* Gold geometric shapes - bottom right */}
      <div
        className="absolute right-0 bottom-0"
        style={{
          width: "45%",
          height: "100%",
          background: "#B8860B",
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      <div
        className="absolute right-0 bottom-0"
        style={{
          width: "35%",
          height: "70%",
          background: "#DAA520",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Logo top-left */}
      <div className="absolute left-[40px] top-[30px] flex items-center gap-3">
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="h-[60px] w-auto object-contain"
            crossOrigin="anonymous"
          />
        ) : (
          <div
            style={{
              width: 60,
              height: 60,
              border: "2px dashed #B8860B",
              borderRadius: 8,
            }}
            className="flex items-center justify-center"
          >
            <span style={{ fontSize: 10, color: "#B8860B" }}>LOGO</span>
          </div>
        )}
      </div>

      {/* Name & title */}
      <div className="absolute left-[40px] top-[130px]">
        <p style={{ fontSize: 30, color: "#1a1a1a" }} className="font-bold">
          {data.agentName || "İsim Soyisim"}
        </p>
        <p style={{ fontSize: 14, color: "#B8860B", letterSpacing: 1, marginTop: 4 }} className="font-medium uppercase">
          Emlak Danışmanı
        </p>
      </div>

      {/* Contact details */}
      <div className="absolute left-[40px] bottom-[40px]" style={{ maxWidth: 380 }}>
        <div className="space-y-2">
          {data.agentPhone && (
            <p style={{ fontSize: 15, color: "#444" }}>{data.agentPhone}</p>
          )}
          {data.agentEmail && (
            <p style={{ fontSize: 15, color: "#444" }}>{data.agentEmail}</p>
          )}
          {data.agentAddress && (
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.4 }}>{data.agentAddress}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessCardGoldGeometric;
