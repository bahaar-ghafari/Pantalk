import styled from "styled-components";
import { PlayerContainerProps } from "./@types";

export const PlayerContainer = styled.div<PlayerContainerProps>`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${(props) => props.backgroundColor};
`;