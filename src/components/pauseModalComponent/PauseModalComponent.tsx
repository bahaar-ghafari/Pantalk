import React from 'react';
import PauseMenu from '@pt/components/pauseMenu/PauseMenu';
import { TransparentModal } from './PauseModalComponent.style';

interface PauseModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  onHome: () => void;
}

const PauseModalComponent: React.FC<PauseModalComponentProps> = ({ isOpen, onClose, onHome }) => {
  return (
    <TransparentModal isOpen={isOpen}>
      <PauseMenu onClose={onClose} onHome={onHome} />
    </TransparentModal>
  );
};

export default PauseModalComponent;
