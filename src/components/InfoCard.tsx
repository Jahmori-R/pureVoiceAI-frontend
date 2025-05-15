import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

type Props = {
  title: string;
  text: string;
  imageSrc: string;
  width: string;
  height: string;
};

function InfoCard({ title, text, imageSrc, width, height }: Props) {
  return (
    <MDBCard
      className="my-4 shadow-3-strong item-card-hover rounded-8"
      style={{ width: width || "auto", height: height || "auto" }}
    >
      <MDBCardImage
        className=""
        src={imageSrc}
        alt="Card image"
        style={{
          width: "50%",
          height: "auto",
          objectFit: "contain",
          margin: "0 auto", // Centers the image horizontally
          display: "block", // Ensures margin auto works
        }}
      />
      <MDBCardBody>
        <MDBCardTitle className="text-center mb-3">{title}</MDBCardTitle>
        <MDBCardText className="text-muted text-center">{text}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

export default InfoCard;
