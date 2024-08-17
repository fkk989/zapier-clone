import { SchemaProp } from "@repo/ui/component";
import { group } from "console";
import { CSSProperties } from "react";

const commonInputStyle: CSSProperties = {
  width: "100%",
  height: "50px",
  border: "1px solid #cbcabf",
  borderRadius: "5px",
  outline: "none",
  padding: "0 10px 0 10px",
};
const commonLableStyle: CSSProperties = {
  color: "#403F3E",
  fontWeight: "500",
};

export const signUpFomrSchema: SchemaProp[] = [
  {
    type: "input",
    lable_text: "* Work Email",
    lable_style: { ...commonLableStyle },
    props: {
      name: "email",
      type: "email",
      style: { ...commonInputStyle },
    },
    validation: {
      isRequired: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "email is not valid",
    },
  },
  //
  {
    type: "input_group",
    group: {
      style: {
        display: "flex",
        gap: "20px",
        width: "100%",
      },
      inputs: [
        {
          lable_style: { ...commonLableStyle },
          type: "input",
          lable_text: "* First Name",
          min_lenght: 1,
          props: {
            name: "First Name",
            type: "text",
            style: { ...commonInputStyle, width: "170px" },
          },
          validation: {
            isRequired: true,
            pattern: /^.{2,}$/,
            message: "First Name should be more than 1 character",
          },
        },
        //
        {
          lable_style: { ...commonLableStyle },
          type: "input",
          lable_text: "* Last Name",
          min_lenght: 1,
          props: {
            name: "Last Name",
            type: "text",
            style: { ...commonInputStyle, width: "170px" },
          },
          validation: {
            isRequired: true,
            pattern: /^.{2,}$/,
            message: "Last Name should be more than 1 character",
          },
        },
      ],
    },
  },
];
