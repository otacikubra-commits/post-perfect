import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

/**
 * White background with red diagonal curve accent, grey circle on right with logo,
 * contact info on left with red circle icons
 */
const BusinessCardRedCurve = ({ data }: Props) => {
  return (
    <div
      style={{ width: 1050, height: 600, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden bg-white"
    >
      {/* Grey circle - right side */}
      <div
        className="absolute"
        style={{
          top: -40,
          right: -80,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "hsl(0 0% 88%)",
        }}
      />

      {/* Red diagonal curve */}
      <svg
        className="absolute"
        style={{ top: 0, left: 0, width: "100%", height: "100%" }}
        viewBox="0 0 1050 600"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 480 Q 350 350, 550 420 T 1050 200"
          fill="none"
          stroke="hsl(0 75% 45%)"
          strokeWidth="8"
        />
        <path
          d="M 0 500 Q 350 370, 550 440 T 1050 220"
          fill="none"
          stroke="hsl(0 0% 75%)"
          strokeWidth="3"
        />
      </svg>

      {/* Agent Name */}
      <div className="absolute" style={{ top: 45, left: 55 }}>
        <h2
          style={{ fontSize: 38, lineHeight: 1.1, color: "hsl(0 0% 15%)" }}
          className="font-bold"
        >
          {data.agentName || "İsim Soyisim"}
        </h2>
        <div
          style={{ width: 50, height: 4, background: "hsl(0 75% 45%)", marginTop: 12 }}
        />
      </div>

      {/* Contact info */}
      <div className="absolute flex flex-col gap-6" style={{ top: 160, left: 55 }}>
        {data.agentPhone && (
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 42, height: 42, background: "hsl(0 75% 45%)" }}
            >
              <span style={{ fontSize: 18, color: "white" }}>📞</span>
            </div>
            <span style={{ fontSize: 22, color: "hsl(0 0% 15%)" }} className="font-bold">
              {data.agentPhone}
            </span>
          </div>
        )}
        {data.location && (
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 42, height: 42, background: "hsl(0 75% 45%)" }}
            >
              <span style={{ fontSize: 18, color: "white" }}>📍</span>
            </div>
            <span
              style={{ fontSize: 16, maxWidth: 340, lineHeight: 1.5, color: "hsl(0 0% 30%)" }}
              className="font-medium"
            >
              {data.location}
            </span>
          </div>
        )}
      </div>

      {/* Logo on grey circle */}
      <div
        className="absolute flex items-center justify-center"
        style={{ top: 40, right: 40, width: 280, height: 280 }}
      >
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="object-contain"
            style={{ height: 120, maxWidth: 200 }}
            crossOrigin="anonymous"
          />
        ) : (
          <span
            style={{ fontSize: 14, color: "hsl(0 0% 50%)", letterSpacing: 2 }}
            className="uppercase font-bold"
          >
            Logo
          </span>
        )}
      </div>

      {/* Subtitle */}
      <div className="absolute" style={{ bottom: 40, left: 55 }}>
        <p
          style={{ fontSize: 12, letterSpacing: 3, color: "hsl(0 0% 50%)" }}
          className="uppercase font-medium"
        >
          Profesyonel Gayrimenkul Danışmanı
        </p>
      </div>
    </div>
  );
};

export default BusinessCardRedCurve;
