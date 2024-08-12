import React from "react";

interface IconProps {
  path: string;
  iconSize:
    | "12x12"
    | "16x16"
    | "20x20"
    | "24x24"
    | "28x28"
    | "32x32"
    | "36x36"
    | "40x40"
    | "44x44"
    | "48x48"
    | "52x52"
    | "56x56"
    | "60x60";
  className: string;
}

const iconSizes: {
  [key: string]: {
    width: string;
    height: string;
  };
} = {
  "60x60": {
    width: "60px",
    height: "60px",
  },
  "56x56": {
    width: "56px",
    height: "56px",
  },
  "52x52": {
    width: "52px",
    height: "52px",
  },
  "48x48": {
    width: "48px",
    height: "48px",
  },
  "44x44": {
    width: "44px",
    height: "44px",
  },
  "40x40": {
    width: "40px",
    height: "40px",
  },
  "36x36": {
    width: "36px",
    height: "36px",
  },
  "32x32": {
    width: "32px",
    height: "32px",
  },
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
      className={className + "dsfx"}
      dangerouslySetInnerHTML={{
        __html: path,
      }}
    />
  );
};

export default IconHandler;
