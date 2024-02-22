import React from 'react';
import HelpButton from '@pt/components/cooldownButton/CooldownButton';
import PauseButton from '@pt/components/pauseButton/PauseButton';

interface FooterComponentProps {
  onHelpClick: () => void;
  onPauseClick: () => void;
}

const FooterComponent: React.FC<FooterComponentProps> = ({ onHelpClick, onPauseClick }) => {
  return (
    <div>
      <PauseButton onClick={onPauseClick}>Pause</PauseButton>
      <HelpButton onHandleButtonClick={onHelpClick}>
        Next Word
      </HelpButton>
    </div>
  );
};

export default FooterComponent;
