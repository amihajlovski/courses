import React from "react";
import { Block } from "../styles/Block";
import { CustomForm } from "./CustomForm";

export const Company = () => (
  <Block background="#EFDDC1">
    <CustomForm settings={{ title: "Company", type: "inputs" }} />
  </Block>
);
