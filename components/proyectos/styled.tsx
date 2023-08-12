import styled from 'styled-components';

export const TemplateProyect = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}: any) => theme.background};
  color: ${({theme}: any) => theme.color};
  gap: 3rem;
  border: 2px solid #fff;
  box-shadow: #ddd 0px 0px 8px 1px;
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
export const DivProyectos = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const Botton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  fill: #ddd;
  &:hover svg {
    fill: tomato;
    width: 45px;
    height: 45px;
    z-index: 10;
  }
  &:focus svg {
    fill: tomato;
    width: 45px;
    height: auto;
    z-index: 10;
  }
`;
