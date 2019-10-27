import React from "react";
import { Block } from "../styles/Block";
import { CustomForm } from "./CustomForm";

export const Course = ({ data, passState }) => (
  <Block>
    <CustomForm
      passState={passState}
      settings={{
        title: "Course",
        type: "dropdowns",
        dropdownOptions: data
      }}
    />
  </Block>
);
