'use client';

import styled from 'styled-components';

export const ContentIcons = styled.div``;
export const DivContentIcons = styled.div`
  fill: ${({theme}: any) => theme.color};
  gap: 2rem;
`;

export const DivSlider = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
  display: grid;
  place-items: center;
  overflow: hidden;

  &:before,
  &:after {
    background: ${({theme}) => theme.lineaGradient};
    position: absolute;
    top: 0;
    width: 10%;
    height: 100%;
    content: '';
    z-index: 2;
  }
  &:before {
    left: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &:after {
    right: 0;
    top: 0;
  }
`;
