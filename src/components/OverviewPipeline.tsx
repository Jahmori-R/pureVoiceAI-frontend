import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBTypography,
} from "mdb-react-ui-kit";

// Define the props for a single pipeline step
type PipelineStepProps = {
  stepNumber: number; // The step number in the pipeline
  title: string; // Title of the step
  description: string; // Short description of the step
  details?: string | React.ReactNode; // Optional additional details
};

// Functional component to display a pipeline step overview
function OverviewPipeline({
  stepNumber,
  title,
  description,
  details,
}: PipelineStepProps) {
  return (
    <MDBCard className="item-card-block-hover">
      {/* Card header displays the step number and title */}
      <MDBCardHeader>
        {stepNumber}. {title}
      </MDBCardHeader>
      <MDBCardBody>
        {/* Main description */}
        <MDBTypography className="mb-2">{description}</MDBTypography>
        {/* Optional details, shown in muted small text */}
        {details && (
          <MDBTypography tag="small" className="text-muted">
            {details}
          </MDBTypography>
        )}
      </MDBCardBody>
    </MDBCard>
  );
}

export default OverviewPipeline;
