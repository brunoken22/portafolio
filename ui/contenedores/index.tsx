import styled from 'styled-components';

export const DivIconsHero = styled.div<any>`
  svg {
    opacity: 0.4 !important;
  }
  svg:hover {
    opacity: 1 !important;
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
