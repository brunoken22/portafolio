import styled, { keyframes } from 'styled-components';
const move = keyframes`
 0%{
  transform: translateY(0);
 }
 100%{
  transform: translateY(-5px);

 }
`;

export const HeaderNav = styled.header`
  position: sticky;
  backdrop-filter: blur(3px);
  color: ${({ theme }: any) => theme.color};
  background-color: ${({ theme }: any) => theme.background};
  transition: all 0.15s linear;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;
export const NavBar = styled.nav`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important ;
  margin: 0 2rem !important;
  color: ${({ theme }: any) => theme.color} !important;
  transition: all 0.15s linear;

  @media (max-width: 700px) {
    margin: 0 !important;
  }
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  color: ${({ theme }: any) => theme.color};
  @media (max-width: 700px) {
    display: none;
  }
`;
export const Enlaces = styled.a`
  text-decoration: none;
  color: ${({ theme }: any) => theme.color};
  font-weight: 500;
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    margin: auto;
    height: 2px;
    width: 0px;
    transition: all 0.5s;
  }
  &:hover:after {
    width: 100%;
    background: #ff6038;
  }
`;

export const Hambug = styled.button<{ $isActive: boolean }>`
  background-color: transparent;
  border: none;
  display: none;
  flex-direction: column;
  gap: 0.3rem;
  margin-right: 1rem;
  position: relative;
  cursor: pointer;

  @media (max-width: 700px) {
    display: flex;
  }
  div:nth-child(1) {
    display: ${({ $isActive }) => ($isActive ? 'none' : '')};
  }
  div:nth-child(2) {
    border-radius: 10px;
    transform: ${({ $isActive }) => ($isActive ? ' rotate(45deg)' : '')};
  }
  div:nth-child(3) {
    border-radius: 10px;
    transform: ${({ $isActive }) => ($isActive ? ' rotate(138deg)' : '')};
    translate: ${({ $isActive }) => ($isActive ? ' -1px -8px' : '')};
  }
`;
export const DivDespleHam = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 3;
  backdrop-filter: blur(5px);
  @media (min-width: 701px) {
    display: none;
  }
`;
export const LineaDiv = styled.div<{ $isActive: boolean }>`
  width: 30px;
  height: 4px;
  transition: all 1s;
  background-color: ${({ theme }: any) => (theme.background == '#fff' ? '#000' : '#fff')};
`;
export const Mode = styled.div`
  border-radius: 40%;
  height: 30px;
  width: 60px;
  background-color: ${({ theme }: any) => (theme.background == '#fff' ? '#ddd' : 'black')};
  display: flex;
  align-items: center;
  padding: 0px 5px;
`;
export const ModeBoton = styled.div`
  cursor: pointer;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  svg {
    width: 25px;
    height: 25px;
  }
`;
export const DivWhatsaap = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  border-radius: 50%;
  background-color: #2f992f;
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  animation: ${move} 1s
    linear(
      0 0%,
      0 2.27%,
      0.02 4.53%,
      0.04 6.8%,
      0.06 9.07%,
      0.1 11.33%,
      0.14 13.6%,
      0.25 18.15%,
      0.39 22.7%,
      0.56 27.25%,
      0.77 31.8%,
      1 36.35%,
      0.89 40.9%,
      0.85 43.18%,
      0.81 45.45%,
      0.79 47.72%,
      0.77 50%,
      0.75 52.27%,
      0.75 54.55%,
      0.75 56.82%,
      0.77 59.1%,
      0.79 61.38%,
      0.81 63.65%,
      0.85 65.93%,
      0.89 68.2%,
      1 72.7%,
      0.97 74.98%,
      0.95 77.25%,
      0.94 79.53%,
      0.94 81.8%,
      0.94 84.08%,
      0.95 86.35%,
      0.97 88.63%,
      1 90.9%,
      0.99 93.18%,
      0.98 95.45%,
      0.99 97.73%,
      1 100%
    )
    2s infinite;
  &:hover {
    opacity: 0.7;
  }
`;
export const EnlaceWhatsaap = styled.a`
  fill: white;
  height: 40px;
  svg {
    height: 40px;
    width: 40px;
  }
`;
