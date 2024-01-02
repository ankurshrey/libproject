import React from "react";
import InputMask from "react-input-mask";

interface MaskingProps {
  data: { [key: string]: any };
}

const DynamicMaskingComponent: React.FC<MaskingProps> = ({ data }) => {
  const getMask = (type: string): string => {
    switch (type) {
      case "email":
        return "*".repeat(5) + "@****.com";
      case "password":
        return "********";
      case "phone":
        return "(999) 999-9999";
      // Add more cases for different types of data
      default:
        return "";
    }
  };

  return (
    <div>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <InputMask
            mask={getMask(key)}
            value={data[key]}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicMaskingComponent;
