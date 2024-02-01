import styled from "styled-components";
import { TableContainerProps } from "./@types";

export const TableContainer = styled.div<TableContainerProps>`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${(props) => props.backgroundColor};
`;