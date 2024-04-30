'use client';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 0;
  transition: font-size 1s ease 1s;
  @media (max-width: 1020px) {
    font-size: 4rem;
    text-align: center;
    margin-top: 1rem;
  }
`;
export const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: row;

  .codingSvg path:nth-child(1) {
    /* stroke: ${({theme}: any) => theme.color}; */
    fill: ${({theme}: any) => theme.color};
  }
  .codingSvg path:nth-child(2) {
    /* stroke: ${({theme}: any) => theme.color}; */
    fill: none;
  }
  .codingSvg path:nth-child(3) {
    /* stroke: ${({theme}: any) => theme.color}; */
    fill: ${({theme}: any) => theme.color};
  }
  .codingSvg path,
  rect {
    fill: none;
    stroke: ${({theme}: any) => theme.color};
  }
  .computerSvg path,
  rect {
    fill: none;
    stroke: ${({theme}: any) => theme.color};
    stroke-width: 2px;
  }
`;
export const Body = styled.p<any>`
  font-size: ${(props: any) => (props.$size ? props.$size : '1.2rem')};
  font-weight: ${(props: any) => (props.$weight ? props.$weight : 400)};
  opacity: ${(props: any) =>
    props.$opacity && props.theme.color == '#fff' ? props.$opacity : '1'};
  margin: ${(props: any) => (props.$margin ? props.$margin : 0)};
  color: ${({theme}: any) => theme.color};
  text-align: ${(props: any) => (props.$align ? props.$align : 'center')};

  @media (max-width: 700px) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;
export const BodyMain = styled.p<any>`
  opacity: ${(props) =>
    props.$opacity && props.theme.color === '#fff' ? props.$opacity : '1'};
  font-size: 1.3rem;
  text-align: start;
  font-size: 1.1rem;
  margin-top: 4rem;
  width: 80%;
  @media (max-width: 1024px) {
    font-size: 1rem;
    text-align: center;
    margin-top: 2rem;
    width: 100%;
  }
`;
export const BodyParr = styled.p`
  color: ${({theme}: any) => theme.color};
  position: relative;
  float: left;
  background: ${({theme}: any) => theme.background};
  margin-top: 0;
  font-weight: ${({theme}: any) => (theme.background !== '#fff' ? 100 : 500)};
  text-align: center;

  span {
    position: absolute;
    right: 0;
    width: 0;
    background-color: ${({theme}: any) => theme.background};
    border-left: 1px solid ${({theme}: any) => theme.color};
    margin-right: -7px;
    animation: escribir 5s steps(30) infinite alternate;
  }

  @keyframes escribir {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
`;
