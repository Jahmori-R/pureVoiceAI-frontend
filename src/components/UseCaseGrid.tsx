import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

const useCases = [
  {
    icon: "comments",
    title: "Meeting Transcripts",
    description:
      "Separate speakers and generate accurate transcripts for business meetings and interviews.",
  },
  {
    icon: "podcast",
    title: "Podcast Editing",
    description:
      "Eliminate cross-talk and produce clean transcripts for editing and publishing episodes.",
  },
  {
    icon: "headset",
    title: "Call Center Analytics",
    description:
      "Analyze conversations, extract agent/customer segments, and derive insights from transcripts.",
  },
  {
    icon: "microphone",
    title: "Voice Assistants",
    description:
      "Improve recognition by isolating user commands in noisy environments.",
  },
  {
    icon: "chalkboard-teacher",
    title: "Online Learning",
    description:
      "Transcribe lectures and discussions with speaker labels for easier review.",
  },
  {
    icon: "balance-scale",
    title: "Legal & Compliance",
    description:
      "Capture courtroom or client meeting audio with clear attribution and transcripts.",
  },
];

function UseCaseGrid() {
  return (
    <MDBContainer className="py-5">
      {/* Use Case Grid */}
      <MDBRow className="g-4">
        {useCases.map((item, index) => (
          <MDBCol md="6" lg="4" key={index}>
            <MDBCard className="h-100 shadow-3 item-card-block-hover">
              <MDBCardBody className="text-center">
                <MDBIcon
                  fas
                  icon={item.icon}
                  size="3x"
                  className="mb-3 text-primary"
                />
                <MDBCardTitle className="h5">{item.title}</MDBCardTitle>
                <MDBCardText>{item.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>

      {/* CTA Section */}
      <section className="text-center mt-5">
        <h4>See It In Action</h4>
        <p>
          Try uploading or recording audio to experience our AI pipeline live.
        </p>
        <MDBBtn tag={Link} to="/upload" size="lg" className="px-4">
          Upload/Record Audio
        </MDBBtn>
      </section>
    </MDBContainer>
  );
}

export default UseCaseGrid;
