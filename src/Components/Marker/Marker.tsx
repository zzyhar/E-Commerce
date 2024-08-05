import "./Marker.css";

interface MarkerProps {
  text: string;
}

const Marker: React.FC<MarkerProps> = ({ text }) => {
  return (
    <div className="default-container">
      <div className=" dsfx fx-j-s  fx-ai-c mb-12px f-gap-16px">
        <div className="marker br-rad-4px bg-col-sec2"></div>
        <div className="title-16px-semi col-sec2">{text}</div>
      </div>
    </div>
  );
};

export default Marker;
