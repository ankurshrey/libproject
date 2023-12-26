import { TextareaHTMLAttributes } from "react";
import { TextareaTypes } from "lib/@native/rkTextarea/Textarea";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  map(
    arg0: (item: any) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  // Additional props specific to your component can be added here
  tData: TextareaTypes;
}

const Textarea = ({ tData }: TextAreaProps) => {
  //   const { placeholder, ...rest } = tData;
  //   console.log("placeholder = ", tData.placeholder);
  //   let a = "write here your address...";
  //   console.log("rest data in textarea = ", rest);

  return (
    console.log("tData props", tData.required),
    (
      <div>
        <br />
        <label>{tData.label}</label>
        <textarea placeholder={`write here your ${tData.label}`} />
      </div>
    )
  );
};

export default Textarea;
