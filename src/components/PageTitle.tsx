import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

interface TitleProps {
  text: string;
  className?: string;
  containerClass?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function PageTitle({
  text,
  className = "display-4 text-white fw-5",
  containerClass = "text-center rounded-3 py-5",
  tag = "h2",
}: TitleProps) {
  return (
    <MDBContainer className={containerClass}>
      <MDBTypography tag={tag} className={className}>
        {text}
      </MDBTypography>
    </MDBContainer>
  );
}

export default PageTitle;
