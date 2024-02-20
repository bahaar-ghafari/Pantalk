import { IonModal } from "@ionic/react";
import styled from "styled-components";

const sizes = {
  xs: "3.5rem",
  sm: "6rem",
  md: "8rem",
  lg: "12rem",
  xlg: "15rem",
};

// Styled-components
export const PlayinGroundContainer = styled.div`
height: 100vh;
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 1rem;
`;

export const Table = styled.div`
  width: ${sizes.md};
  height: ${sizes.md};
  border-radius: 50%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  align-self: center;
  font-size: 0.75rem;

  @media (min-width: 768px) {
    width: ${sizes.xlg};
    height: ${sizes.xlg};
  }
`;

export const Player = styled.div<{ angle: number; color: string }>`
  width: ${sizes.xs};
  height: ${sizes.xs};
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: absolute;
  transform: ${(props) =>
    `rotate(${props.angle}deg) translate(${sizes.sm}) rotate(-${props.angle}deg)`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  @media (min-width: 768px) {
    width: ${sizes.sm};
    height: ${sizes.sm};
    transform: ${(props) =>
      `rotate(${props.angle}deg) translate(${sizes.lg}) rotate(-${props.angle}deg)`};
  }
`;

export const CenteredWord = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem; // Start with a reasonable mobile size
  color: #000;
  @media (min-width: 768px) {
    font-size: 2rem; // Slightly larger on bigger screens
  }
`;

export const TransparentModal = styled(IonModal)`
--background: rgba(0, 0, 0, 0.4); // Adjust transparency as needed

.modal-wrapper {
  background: transparent;
}
& > .ion-page {
  position: relative;
  contain: layout style;
  height: 100%;
  display: flex;
  justify-content: center;
}
`;

