'use client';
import styled from 'styled-components';
export const DivEnlaceCv = styled.div`
  @media (max-width: 1020px) {
    display: flex;
    justify-content: center;
  }
`;
export const EnlaceCv = styled.a`
  padding: 0;
  margin: 0;
  text-decoration: none;
  margin-top: 3rem;
  background: none;
  cursor: pointer;
  --hovered-color: ${({theme}) => theme.color};
  position: relative;
  display: flex;
  font-weight: 600;
  font-size: 1.1rem;
  gap: 0.5rem;
  align-items: center;
  width: max-content;
  p {
    margin: 0;
    position: relative;
    font-size: 1.1rem;
    color: #ae7ef9;
  }

  &::after {
    position: absolute;
    content: '';
    width: 0;
    left: 0;
    bottom: -7px;
    background: var(--hovered-color);
    height: 2px;
    transition: 0.3s ease-out;
  }

  p::before {
    position: absolute;
    /*   box-sizing: border-box; */
    content: 'Ver CV';
    width: 0%;
    inset: 0;
    color: var(--hovered-color);
    overflow: hidden;
    transition: 0.3s ease-out;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover p::before {
    width: 100%;
  }

  &:hover svg {
    transform: translateX(4px);
    color: var(--hovered-color);
  }

  svg {
    color: #ae7ef9;
    transition: 0.2s;
    position: relative;
    width: 15px;
    transition-delay: 0.2s;
  }
`;
