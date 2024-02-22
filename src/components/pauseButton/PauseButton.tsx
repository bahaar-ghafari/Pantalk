import React from "react";
import { PanTaclkButtonProps } from "@pt/shared/panTaclkButton/PanTaclkButton";
import { StyledPauseButton } from "./PauseButton.style";

type PauseButtonProps = {
    onClick: () => void;
} & PanTaclkButtonProps;

const PauseButton: React.FC<PauseButtonProps> = ({ onClick }) => {
  return <StyledPauseButton onClick={onClick}>Pause</StyledPauseButton>;
};

export default PauseButton;
