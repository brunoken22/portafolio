'use client';
import styled from 'styled-components';

export const DivIconsHero = styled.div<any>`
  svg {
    opacity: 1 !important;
  }
  svg:hover {
    opacity: 0.7 !important;
  }
  fill: ${({theme}: any) => theme.color};
`;
export const Container = styled.div`
  color: ${({theme}: any) => theme.color};
  background-color: ${({theme}: any) => theme.background};
  transition: all 0.15s linear;
`;
export const DivContainer = styled.div`
  max-width: 1230px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;
export const EnlaceArrow = styled.a`
  fill: ${({theme}: any) => theme.color};
  &:hover {
    opacity: 0.7;
  }
`;

export const SpanTitle = styled.span`
  position: absolute;
  width: 50px;
  height: 5px;
  bottom: -20%;
  margin-left: 3rem;
  left: 0;
  background-color: #ff8827;
`;
