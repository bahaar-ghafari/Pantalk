import React from "react";
import { GradientButton } from "./PanTaclkButton.style";

export type PanTaclkButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const PanTaclkButton: React.FC<PanTaclkButtonProps> = (
  props
) => {
  return (
    <GradientButton {...props}>
      <span>{props.children}</span>
    </GradientButton>
  );
};

export default PanTaclkButton;
