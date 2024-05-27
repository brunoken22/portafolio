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

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 90vh;
  position: relative;
  z-index: 2;
  &:after {
    content: '';
    height: 250px;
    width: 250px;
    background-color: #2c256f;
    border-radius: 50%;
    filter: blur(200px);
    position: absolute;
    z-index: -1;
    top: 80%;
    right: 0%;
  }
  &:before {
    content: '';
    height: 250px;
    width: 250px;
    background-color: #2c256f;
    border-radius: 50%;
    filter: blur(200px);
    position: absolute;
    z-index: -1;
    top: 0%;
    left: 80%;
  }
  @media (max-width: 1020px) {
    &:after {
      display: none;
    }
    &:before {
      display: none;
    }
  }
`;

export const ContainerMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (max-width: 1020px) {
    & {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      flex-direction: column;
    }
  }
`;

export const DivName = styled.div`
  @media (max-width: 1020px) {
    & {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const DivConnect = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  @media (max-width: 1020px) {
    & {
      margin-top: 2rem;

      justify-content: center;
    }
  }
`;

export const ImageMe = styled.img`
  background-color: rgb(229 229 229);
  border-radius: 50%;
  transition: width 1s ease 1s;
  width: 350px;
  height: auto;
  border: 2px solid;
  @media (max-width: 1020px) {
    width: 250px;
  }
`;
