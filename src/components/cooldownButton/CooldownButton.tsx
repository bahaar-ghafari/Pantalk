import React, { useState, useEffect } from "react";
import { CooldownButton } from "./CooldownButton.style";

type HelpButtonProps = {
  onHandleClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const HelpButton: React.FC<HelpButtonProps> = ({ onHandleClick }) => {
  const [cooldown, setCooldown] = useState(0);
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (cooldown > 0) {
      interval = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [cooldown]);

  const handleHelpButtonClick = () => {
    if (cooldown === 0) {
      onHandleClick();
      setCooldown(2);
    }
  };

  return (
    <CooldownButton onClick={handleHelpButtonClick} disabled={cooldown > 0}>
      {cooldown > 0 ? `Please wait ${cooldown}s` : "Gimme new word"}
    </CooldownButton>
  );
};

export default HelpButton;
