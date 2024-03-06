import React from "react";
import { GradientButton } from "./PanTalkButton.style";

export type PanTalkButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const PanTalkButton: React.FC<PanTalkButtonProps> = (props) => {
  return <GradientButton {...props}>{props.children}</GradientButton>;
};

export default PanTalkButton;
