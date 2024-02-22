import React from 'react';
import { TransparentModal } from './PauseModalComponent.style';
import PauseMenu from './components/PauseMenu';

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
