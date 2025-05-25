import { MDBContainer } from "mdb-react-ui-kit";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  backgroundColor?: string; // e.g., "#fff" or "var(--bg-main)"
  textColor?: string; // e.g., "#000", "white", or CSS vars
  backgroundImage?: string; // optional image URL
}

function HeroSection({
  title,
  subtitle,
  center = true,
  backgroundColor = "#f8f9fa",
  textColor = "#212529",
  backgroundImage,
}: HeroSectionProps) {
  return (
    <MDBContainer
      fluid
      className={`py-5 ${center ? "text-center" : ""} hero-section`}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="display-4 fw-bold">{title}</h1>
      {subtitle && (
        <div
          style={{
            maxWidth: "700px",
            margin: "1rem auto 0",
          }}
        >
          <p className="lead mt-3">{subtitle}</p>
        </div>
      )}
    </MDBContainer>
  );
}

export default HeroSection;
