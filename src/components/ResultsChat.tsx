import {
  MDBContainer,
  MDBTypography,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
} from "mdb-react-ui-kit";

// Sample mock data for now
const chatLog = [
  { speaker: "Person", timestamp: "00:00:01", message: "Hi, who are you?" },
  {
    speaker: "Person 2",
    timestamp: "00:00:03",
    message: "I'm your virtual assistant. How can I help?",
  },
  {
    speaker: "Person",
    timestamp: "00:00:06",
    message: "Can you check my schedule for today?",
  },
  {
    speaker: "Person 2",
    timestamp: "00:00:08",
    message:
      "Sure. You have a meeting with Dr. Smith at 2 PM and a project call at 4 PM.",
  },
  {
    speaker: "Person",
    timestamp: "00:00:12",
    message: "Who is attending the 2 PM meeting?",
  },
  {
    speaker: "Person 2",
    timestamp: "00:00:14",
    message:
      "It's just you and Dr. Smith. The topic is your research progress.",
  },
  {
    speaker: "Person",
    timestamp: "00:00:17",
    message: "Okay, and where is the meeting taking place?",
  },
  {
    speaker: "Person 2",
    timestamp: "00:00:19",
    message: "It's scheduled in Room 304 at the Engineering Building.",
  },
  {
    speaker: "Person",
    timestamp: "00:00:22",
    message:
      "Thanks. Can you also remind me about the deadline for the grant application?",
  },
  {
    speaker: "Person 2",
    timestamp: "00:00:25",
    message: "The grant application deadline is this Friday at 5 PM.",
  },
];

function ResultsCheck() {
  return (
    <MDBContainer className="py-5 px-4 bg-light rounded shadow-2 mb-5">
      <MDBTypography tag="h2" className="mb-4 text-primary fw-bold">
        <MDBIcon icon="comments" className="me-2" />
        Conversation Results
      </MDBTypography>

      <MDBCard className="shadow-3 border">
        <MDBCardHeader className="bg-primary text-white fw-semibold">
          Chat Log
        </MDBCardHeader>
        <MDBCardBody style={{ maxHeight: "400px", overflowY: "auto" }}>
          {chatLog.map((entry, index) => (
            <div
              key={index}
              className={`mb-3 p-3 rounded ${
                entry.speaker === "Person 2"
                  ? "bg-light"
                  : "bg-primary text-white"
              }`}
              style={{
                alignSelf:
                  entry.speaker === "Person 2" ? "flex-start" : "flex-end",
                maxWidth: "75%",
              }}
            >
              <div className="fw-bold mb-1">
                <MDBIcon
                  icon={entry.speaker === "Person 2" ? "robot" : "user"}
                  className="me-2"
                />
                {entry.speaker}
                <span className="ms-2 text-muted small">
                  [{entry.timestamp}]
                </span>
              </div>
              <MDBCardText className="mb-0">{entry.message}</MDBCardText>
            </div>
          ))}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default ResultsCheck;
