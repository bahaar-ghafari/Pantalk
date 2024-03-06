import React, { useState, useEffect } from "react";
import { HelperButton } from "./HelperButton.style";
import { GameStatus } from "@pt/constants/general";

type HelpButtonProps = {
  onHandleClick: () => void;
  gameStatus: GameStatus;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const HelpButton: React.FC<HelpButtonProps> = ({
  onHandleClick,
  gameStatus,
}) => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer]);

  const handleHelpButtonClick = () => {
    if (timer === 0) {
      onHandleClick();
      setTimer(2);
    }
  };

  return (
    <HelperButton
      onClick={handleHelpButtonClick}
      disabled={timer > 0 || gameStatus !== GameStatus.gaming}
    >
      {timer > 0 ? `Please wait ${timer}s` : "Gimme new word"}
    </HelperButton>
  );
};

export default HelpButton;
