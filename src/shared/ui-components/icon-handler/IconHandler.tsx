interface IconProps {
  path: string;
  iconSize: "28x28" | "24x24" | "20x20" | "16x16" | "12x12";
  className: string;
}

const iconSizes: {
  [key: string]: {
    width: string;
    height: string;
  };
} = {
  "28x28": {
    width: "28px",
    height: "28px",
  },
  "24x24": {
    width: "24px",
    height: "24px",
  },
  "20x20": {
    width: "20px",
    height: "20px",
  },
  "16x16": {
    width: "16px",
    height: "16px",
  },
  "12x12": {
    width: "12px",
    height: "12px",
  },
};

const IconHandler: React.FC<IconProps> = ({ path, iconSize, className }) => {
  path = path.replace(
    "<svg",
    `<svg width=${iconSizes[iconSize].width} height=${iconSizes[iconSize].height} `
  );

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: path,
      }}
    />
  );
};

export default IconHandler;
