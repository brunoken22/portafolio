"use client";
import styled from "styled-components";

export const ButtonCloseMessage = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color};
  svg {
    stroke: ${({ theme }) => theme.background};
    fill: ${({ theme }) => theme.background};
  }

  &:hover {
    opacity: 0.7;
  }
`;
