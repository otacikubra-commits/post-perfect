import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

const BusinessCardRedOrange = ({ data }: Props) => {
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
      {/* Orange curved shapes - right side */}
      <div
        className="absolute right-0 top-0"
        style={{
          width: "40%",
          height: "100%",
          background: "#F97316",
          borderBottomLeftRadius: "40%",
          borderTopLeftRadius: "20%",
        }}
      />
      <div
        className="absolute right-0 top-0"
        style={{
          width: "30%",
          height: "70%",
          background: "#FBBF24",
          borderBottomLeftRadius: "50%",
        }}
      />

      {/* Logo + company */}
      <div className="absolute left-[40px] top-[30px] flex items-center gap-3">
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="h-[50px] w-auto object-contain"
            crossOrigin="anonymous"
          />
        ) : (
          <div
            style={{
              width: 50,
              height: 50,
              background: "#DC2626",
              borderRadius: "50%",
            }}
            className="flex items-center justify-center"
          >
            <span style={{ fontSize: 10, color: "#fff" }}>LOGO</span>
          </div>
        )}
      </div>

      {/* Name */}
      <div className="absolute left-[40px] top-[120px]">
        <p style={{ fontSize: 28, color: "#1a1a1a" }} className="font-bold">
          {data.agentName || "İsim Soyisim"}
        </p>
        <p style={{ fontSize: 13, color: "#DC2626", letterSpacing: 1, marginTop: 2 }} className="uppercase font-medium">
          Emlak Danışmanı
        </p>
      </div>

      {/* Contact details */}
      <div className="absolute left-[40px] bottom-[35px]" style={{ maxWidth: 400 }}>
        <div className="space-y-2">
          {data.agentAddress && (
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.4 }}>{data.agentAddress}</p>
          )}
          <div className="flex gap-6">
            {data.agentPhone && (
              <p style={{ fontSize: 14, color: "#333" }}>Tel: {data.agentPhone}</p>
            )}
          </div>
          {data.agentEmail && (
            <p style={{ fontSize: 14, color: "#333" }}>E-mail: {data.agentEmail}</p>
          )}
        </div>
      </div>

      {/* Bottom red bar */}
      <div
        className="absolute bottom-0 left-0"
        style={{ width: "55%", height: 5, background: "#DC2626" }}
      />
    </div>
  );
};

export default BusinessCardRedOrange;
