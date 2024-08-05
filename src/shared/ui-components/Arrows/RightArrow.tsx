import IconHandler from "../icon-handler/IconHandler";
import { rightArrowIcon } from "../icon-handler/index";

interface RightArrowProps {
  onClick?: () => void;
}

const RightArrow: React.FC<RightArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="dsfx fx-ai-c fx-j-c btn-categoty br-rad-cr bg-col-s bor-col-trp bg-hov-sec2"
    >
      <IconHandler path={rightArrowIcon} iconSize="24x24" className="" />
    </button>
  );
};

export default RightArrow;
