import React from "react";
import { GradientButton } from "./PanTaclkButton.style";

export type PanTalkButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const PanTalkButton: React.FC<PanTalkButtonProps> = (
  props
) => {
  return (
    <GradientButton {...props}>
      <span>{props.children}</span>
    </GradientButton>
  );
};

export default PanTalkButton;
