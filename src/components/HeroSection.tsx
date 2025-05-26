import { MDBContainer } from "mdb-react-ui-kit";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  backgroundColor?: string;
  textColor?: string;
  backgroundVideo?: string;
  backgroundVideoOpacity?: number;
  backgroundVideoBlur?: string;
  backgroundImage?: string;
  backgroundImageOpacity?: number;
  backgroundImageBlur?: string;
}

function HeroSection({
  title,
  subtitle,
  center = true,
  backgroundColor = "#f8f9fa",
  textColor = "#212529",
  backgroundVideo,
  backgroundVideoOpacity = 0.4,
  backgroundVideoBlur = "9px",
  backgroundImage,
  backgroundImageOpacity = 0.4,
  backgroundImageBlur = "9px",
}: HeroSectionProps) {
  return (
    <div
      className={`hero-section position-relative overflow-hidden shadow-4-strong ${
        center ? "text-center" : ""
      }`}
      style={{
        backgroundColor,
        color: textColor,
        padding: "5rem 1rem",
      }}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <video
          className="position-absolute top-0 start-0"
          style={{
            zIndex: 0,
            opacity: backgroundVideoOpacity,
            filter: `blur(${backgroundVideoBlur})`,
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Background Image */}
      {!backgroundVideo && backgroundImage && (
        <div
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: backgroundImageOpacity,
            filter: `blur(${backgroundImageBlur})`,
            zIndex: 0,
          }}
        />
      )}

      {/* Overlay Content */}
      <MDBContainer style={{ position: "relative", zIndex: 1 }}>
        <h1 className="display-4 fw-bold">{title}</h1>
        {subtitle && (
          <div style={{ maxWidth: "700px", margin: "1rem auto 0" }}>
            <p className="lead mt-3">{subtitle}</p>
          </div>
        )}
      </MDBContainer>
    </div>
  );
}

export default HeroSection;
