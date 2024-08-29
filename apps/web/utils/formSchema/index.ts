import { SchemaProp } from "@repo/ui/component";
import { CSSProperties } from "react";
import { z } from "zod";
// Password validation pattern
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()_+[\]{};':",.<>?\\|`~])[A-Za-z\d@#$%^&*()_+[\]{};':",.<>?\\|`~]{8,}$/;

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
//
export const signUpFomrSchema: SchemaProp[] = [
  // email
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
  //first and last name
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
            name: "firstName",
            type: "text",
            style: { ...commonInputStyle, width: "170px" },
          },
          validation: {
            isRequired: true,
            pattern: /^.{2,}$/,
            message: "more than 1 character",
          },
        },
        //
        {
          lable_style: { ...commonLableStyle },
          type: "input",
          lable_text: "* Last Name",
          min_lenght: 1,
          props: {
            name: "lastName",
            type: "text",
            style: { ...commonInputStyle, width: "170px" },
          },
          validation: {
            isRequired: true,
            pattern: /^.{2,}$/,
            message: "more than 1 character",
          },
        },
      ],
    },
  },
  //password
  {
    type: "input",
    lable_text: "* Password",
    lable_style: { ...commonLableStyle },
    props: {
      name: "password",
      type: "password",
      style: { ...commonInputStyle },
    },
    validation: {
      isRequired: true,
      pattern: passwordPattern,
    },
  },
];
//
export const LoginSchema: SchemaProp[] = [
  // email
  {
    type: "input",
    lable_text: "* Email",
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
  // password
  {
    type: "input",
    lable_text: "* Password",
    lable_style: { ...commonLableStyle },
    props: {
      name: "password",
      type: "password",
      style: { ...commonInputStyle },
    },
    validation: {
      isRequired: true,
      pattern: /^.{2,}$/,
      message: "should be greater than 1 character",
    },
  },
];
