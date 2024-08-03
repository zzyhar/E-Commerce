import "./Marker.css";

interface MarkerProps {
  text: string;
}

const Marker: React.FC<MarkerProps> = ({ text }) => {
  return (
    <div className="heading">
      <div className="marker"></div>
      <div className="title">{text}</div>
    </div>
  );
};

export default Marker;
