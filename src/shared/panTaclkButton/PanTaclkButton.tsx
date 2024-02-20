import React from 'react';
import { IonButton } from '@ionic/react';
import { GradientButton } from './PanTaclkButton.style';



const PanTaclkButton: React.FC<React.ComponentProps<typeof IonButton>> = (props) => {
  return <GradientButton {...props} />;
};

export default PanTaclkButton;
