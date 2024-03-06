import { gradient, stylesSizes } from "@pt/constants/general";
import styled from "styled-components";

export const Table = styled.div`
  width: ${stylesSizes.md};
  height: ${stylesSizes.md};
  border-radius: 50%;
  background: ${gradient}
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  align-self: center;
  font-size: 0.25rem;

  @media (min-width: 768px) {
    width: ${stylesSizes.xlg};
    height: ${stylesSizes.xlg};
  }
`;

export const PlayerComponent = styled.div<{
  $angle: number;
  $color: string;
  $isActive: boolean;
}>`
  width: ${stylesSizes.xs};
  height: ${stylesSizes.xs};
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  position: absolute;
  transform: ${(props) =>
    `rotate(${props.$angle}deg) translate(${stylesSizes.sm}) rotate(-${props.$angle}deg)`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  overflow: hidden;

  box-shadow: ${(props) =>
    props.$isActive
      ? `0 0 20px 0px ${props.$color}`
      : `inset 0px 0px 20px 0px #e9dddd`};

  border: ${(props) => (props.$isActive ? `7px solid #e1ffe7` : `none`)};

  @media (min-width: 768px) {
    width: ${stylesSizes.sm};
    height: ${stylesSizes.sm};
    transform: ${(props) =>
      `rotate(${props.$angle}deg) translate(${stylesSizes.lg}) rotate(-${props.$angle}deg)`};
  }
`;

export const CenteredWord = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem; // Start with a reasonable mobile size
  color: #2f2d2d;
  background: white;
  border-radius: 100%;
  height: 90%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: 2rem; // Slightly larger on bigger screens
  }
`;
