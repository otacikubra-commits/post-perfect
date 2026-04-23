import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

const BusinessCardBlueDiagonal = ({ data }: Props) => {
  const mainImage = data.images?.[0];

  return (
    <div
      style={{ width: 1050, height: 600, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden bg-white"
    >
      {/* Left: Photo area */}
      <div
        className="absolute"
        style={{ top: 0, left: 0, width: 420, height: 600, overflow: "hidden" }}
      >
        {mainImage ? (
          <img
            src={mainImage}
            alt=""
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
        ) : (
          <div className="w-full h-full" style={{ background: "hsl(210 25% 88%)" }} />
        )}
      </div>

      {/* Blue diagonal shape */}
      <svg
        className="absolute"
        style={{ top: 0, left: 0, width: "100%", height: "100%" }}
        viewBox="0 0 1050 600"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,600 420,600 520,0 380,0 0,600"
          fill="hsl(210 85% 45%)"
        />
      </svg>

      {/* Right side content */}
      <div className="absolute" style={{ top: 0, right: 0, width: 530, height: 600 }}>
        {/* Logo + Company */}
        <div className="flex items-center gap-3" style={{ paddingTop: 50, paddingLeft: 20 }}>
          {data.agentLogo ? (
            <img
              src={data.agentLogo}
              alt=""
              className="object-contain"
              style={{ height: 48, maxWidth: 160 }}
              crossOrigin="anonymous"
            />
          ) : (
            <div className="flex items-center gap-2">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 4L4 16h4v14h8v-10h4v10h8V16h4L18 4z" fill="hsl(210 85% 45%)" />
              </svg>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: "hsl(210 85% 45%)" }}>
                REAL ESTATE
              </span>
            </div>
          )}
        </div>

        {/* Agent Name & Title */}
        <div style={{ paddingLeft: 20, marginTop: 40 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "hsl(0 0% 10%)", lineHeight: 1.1 }}>
            {data.agentName || "MARK CALVIN"}
          </h2>
          <p style={{ fontSize: 13, fontWeight: 600, color: "hsl(210 85% 45%)", letterSpacing: 2, marginTop: 6 }}>
            GAYRİMENKUL DANIŞMANI
          </p>
          <div style={{ width: 50, height: 3, background: "hsl(210 85% 45%)", marginTop: 14 }} />
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-4" style={{ paddingLeft: 20, marginTop: 32 }}>
          {data.agentPhone && (
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 32, height: 32, background: "hsl(210 85% 45%)" }}
              >
                <span style={{ fontSize: 14, color: "white" }}>📞</span>
              </div>
              <span style={{ fontSize: 16, fontWeight: 600, color: "hsl(0 0% 15%)" }}>
                {data.agentPhone}
              </span>
            </div>
          )}
          {data.location && (
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 32, height: 32, background: "hsl(210 85% 45%)" }}
              >
                <span style={{ fontSize: 14, color: "white" }}>📍</span>
              </div>
              <span style={{ fontSize: 14, color: "hsl(0 0% 30%)", maxWidth: 280, lineHeight: 1.5 }}>
                {data.location}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom blue accent line */}
      <div
        className="absolute"
        style={{ bottom: 0, left: 420, right: 0, height: 4, background: "hsl(210 85% 45%)" }}
      />
    </div>
  );
};

export default BusinessCardBlueDiagonal;
