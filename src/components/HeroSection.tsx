import { MDBContainer } from "mdb-react-ui-kit";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

function HeroSection({
  title,
  subtitle,
  center = true,
  backgroundColor = "bg-light",
  textColor = "text-dark",
}: HeroSectionProps) {
  return (
    <MDBContainer
      fluid
      className={`py-5 ${
        center ? "text-center" : ""
      } ${backgroundColor} ${textColor} hero-section`}
    >
      <h1 className="display-4 fw-bold">{title}</h1>
      {subtitle && (
        <div
          style={{
            maxWidth: "700px", // control width of subtitle here
            margin: "1rem auto 0", // center horizontally, add top margin
          }}
        >
          <p className="lead mt-3">{subtitle}</p>
        </div>
      )}
    </MDBContainer>
  );
}

export default HeroSection;
