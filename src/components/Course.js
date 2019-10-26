import React from "react";
import { Block } from "../styles/Block";
import { CustomForm } from "./CustomForm";

export const Course = ({ data }) => (
  <Block>
    <CustomForm
      settings={{
        title: "Course",
        type: "dropdowns",
        dropdownOptions: data
      }}
    />
  </Block>
);
