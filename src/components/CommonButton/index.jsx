import React from "react";
import * as B from "components/CommonButton/CommonButtonStyle";

const CommonButton = ({ onClickButton, children }) => {
  return <B.Button onClick={onClickButton}>{children}</B.Button>;
};

export default CommonButton;
