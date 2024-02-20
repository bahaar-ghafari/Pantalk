import React from 'react';
import { IonFooter } from '@ionic/react';
import HelpButton from '@pt/components/cooldownButton/CooldownButton';
import PanTaclkButton from '@pt/shared/panTaclkButton/PanTaclkButton';

interface FooterComponentProps {
  onHelpClick: () => void;
  onPauseClick: () => void;
}

const FooterComponent: React.FC<FooterComponentProps> = ({ onHelpClick, onPauseClick }) => {
  return (
    <IonFooter>
      <PanTaclkButton onClick={onPauseClick}>Pause</PanTaclkButton>
      <HelpButton onHandleButtonClick={onHelpClick}>
        Next Word
      </HelpButton>
    </IonFooter>
  );
};

export default FooterComponent;
