import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

/**
 * Split layout: left side has property photo with blue diagonal overlay,
 * right side has logo, name, and contact details on light grey
 */
const BusinessCardBluePhoto = ({ data }: Props) => {
  const mainImage = data.images?.[0];

  return (
    <div
      style={{ width: 1050, height: 600, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden bg-white"
    >
      {/* Left: Photo area */}
      <div
        className="absolute"
        style={{
          top: 0,
          left: 0,
          width: 480,
          height: 600,
          overflow: "hidden",
        }}
      >
        {mainImage ? (
          <img
            src={mainImage}
            alt=""
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: "hsl(210 30% 85%)" }}
          />
        )}
        {/* Blue diagonal overlay */}
        <div
          className="absolute"
          style={{
            top: 0,
            right: -40,
            width: 120,
            height: "100%",
            background: "hsl(200 75% 50%)",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 60% 0)",
          }}
        />
      </div>

      {/* Right side: light grey bg */}
      <div
        className="absolute"
        style={{
          top: 0,
          right: 0,
          width: 610,
          height: 600,
          background: "hsl(0 0% 96%)",
        }}
      />

      {/* Logo top right */}
      <div className="absolute flex items-center gap-3" style={{ top: 40, right: 50 }}>
        {data.agentLogo ? (
          <img
            src={data.agentLogo}
            alt=""
            className="object-contain"
            style={{ height: 55, maxWidth: 180 }}
            crossOrigin="anonymous"
          />
        ) : (
          <span
            style={{ fontSize: 22, color: "hsl(200 75% 50%)", fontWeight: 800 }}
          >
            EMLAK
          </span>
        )}
      </div>

      {/* Name & Title */}
      <div className="absolute" style={{ top: 160, left: 520 }}>
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ width: 28, height: 28, background: "hsl(200 75% 50%)", borderRadius: "50%" }}
            className="flex items-center justify-center"
          >
            <span style={{ fontSize: 13, color: "white" }}>👤</span>
          </div>
          <div>
            <h2
              style={{ fontSize: 28, color: "hsl(0 0% 15%)" }}
              className="font-extrabold leading-tight"
            >
              {data.agentName || "İsim Soyisim"}
            </h2>
            <p style={{ fontSize: 11, letterSpacing: 2, color: "hsl(200 75% 50%)" }} className="uppercase font-semibold">
              Gayrimenkul Danışmanı
            </p>
          </div>
        </div>
      </div>

      {/* Contact details */}
      <div className="absolute flex flex-col gap-5" style={{ top: 280, left: 520 }}>
        {data.agentPhone && (
          <div className="flex items-center gap-3">
            <span style={{ fontSize: 16, color: "hsl(200 75% 50%)" }}>📞</span>
            <span style={{ fontSize: 18, color: "hsl(0 0% 20%)" }} className="font-semibold">
              {data.agentPhone}
            </span>
          </div>
        )}
        {data.location && (
          <div className="flex items-center gap-3">
            <span style={{ fontSize: 16, color: "hsl(200 75% 50%)" }}>📍</span>
            <span
              style={{ fontSize: 14, maxWidth: 280, lineHeight: 1.5, color: "hsl(0 0% 35%)" }}
            >
              {data.location}
            </span>
          </div>
        )}
      </div>

      {/* Bottom blue accent */}
      <div
        className="absolute"
        style={{
          bottom: 0,
          left: 480,
          right: 0,
          height: 5,
          background: "hsl(200 75% 50%)",
        }}
      />
    </div>
  );
};

export default BusinessCardBluePhoto;
