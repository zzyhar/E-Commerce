import "./CategoryItem.css";
import IconHandler from "../../../shared/ui-components/icon-handler/IconHandler";

interface CategoryItemProps {
  icon: string;
  title: string;
  className: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  icon,
  title,
  className,
}) => {
  return (
    <div className="dsfx fx-j-c fx-d-c fx-ai-c">
      {/* <IconHandler path={icon} iconSize={} className={className} /> */}
      <p>{title}</p>
    </div>
  );
};

export default CategoryItem;
