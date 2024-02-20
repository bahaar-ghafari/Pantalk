import React from 'react';
import { IonList, IonItem } from '@ionic/react';

const PauseMenu: React.FC<{ onClose: () => void; onHome: () => void }> = ({ onClose, onHome }) => {
  return (
      <IonList>
        <IonItem button onClick={onClose}>Continue</IonItem>
        <IonItem button onClick={onHome}>Home</IonItem>
      </IonList>
  );
};
export default PauseMenu;