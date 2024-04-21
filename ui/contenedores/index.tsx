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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  color: ${({theme}: any) => theme.color};
  background-color: ${({theme}: any) => theme.background};
  transition: all 0.15s linear;

  @media (max-width: 700px) {
    padding: auto 5%;
  }
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
  left: 0;
  background-color: #ff8827;
`;
