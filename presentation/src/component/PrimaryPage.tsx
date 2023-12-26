import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../index";
import InputBox from "./Input/InputBox";
import { InputTypes } from "lib/@native/rkInputs/input.rk";
import { ButtonTypes } from "lib/@native/rkButton/Button";
import { TextareaTypes } from "lib/@native/rkTextarea/Textarea";
import Button from "./Button/Button";
import Textarea from "./TextArea/Textarea";
import { JSX } from "react/jsx-runtime";
import { Options } from "lib/@native/rkDropdown/dropdown.rk";
import Dropdown from "./Dropdown/Dropdown";

const PrimaryPage = () => {
  const configPath = useContext(AppContext);
  const [controls, setControls] = useState<
    InputTypes[] | ButtonTypes[] | TextareaTypes[] | Options[]
  >([]);

  // const dropdownOptions: Options[] = [
  //   {
  //     id: "group1",
  //     label: "Group 1",
  //     isOptionGroup: false,
  //     options: [
  //       {
  //         id: "item1",
  //         value: "Item 1",
  //         isSelected: true,
  //       },
  //       {
  //         id: "item2",
  //         value: "Item 2",
  //         isSelected: false,
  //       },
  //     ],
  //   },
  //   {
  //     id: "group2",
  //     label: "Group 2",
  //     isOptionGroup: true,
  //     options: [
  //       {
  //         id: "item3",
  //         value: "Item 3",
  //       },
  //       {
  //         id: "item4",
  //         value: "Item 4",
  //       },
  //     ],
  //   },
  //   {
  //     id: "item5",
  //     value: "Item 5",
  //   },
  //   {
  //     id: "item6",
  //     value: "Item 6",
  //     isSelected: true,
  //   },
  //   {
  //     id: "item7",
  //     value: "Item 7",
  //     isSelected: true,
  //   },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(configPath);

        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const data = await response.json();
        setControls(data.Controls);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [configPath]);

  return (
    <div>
      <h1>Form</h1>
      {controls.length > 0 ? (
        controls.map((ctrl) =>
          "input" in ctrl ? (
            <InputBox key={ctrl.id} inputs={ctrl} />
          ) : "button" in ctrl ? (
            <Button children={ctrl.label} dData={ctrl} />
          ) : "textarea" in ctrl ? (
            <Textarea
              key={ctrl.id}
              tData={ctrl}
              map={function (
                arg0: (item: any) => JSX.Element
              ): React.ReactNode {
                throw new Error("Function not implemented.");
              }}
            />
          ) : "dropdown" in ctrl ? (
            <Dropdown
              onChange={(e) => alert(e.target.value + " Dropdown changed")}
              options={ctrl.dropdownOptions}
              onBlur={(event) => console.log("Blur event", event)}
              onFocus={(event) => console.log("Focus event", event)}
            />
          ) : (
            <></>
          )
        )
      ) : (
        <div>No controls available</div>
      )}
    </div>
  );
};

export default PrimaryPage;
