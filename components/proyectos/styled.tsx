import styled from 'styled-components';

export const TemplateProyect = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}: any) => theme.background};
  color: ${({theme}: any) => theme.color};
  gap: 3rem;
  border: 2px solid #fff;
  box-shadow: #ddd 0px 0px 8px 1px;
  transition: transform 200ms ease;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
export const TemplateLoadingProyect = styled(TemplateProyect)`
  width: 350px;
  height: 400px;
  box-shadow: none;
  border: none;
  background-color: transparent;
  &:hover {
    opacity: 1;
    transform: none;
  }
`;
export const Loader = styled.div`
  @keyframes loading {
    0% {
      left: -100%;
    }

    100% {
      left: 100%;
    }
  }

  width: 100%;
  height: 100%;

  .space {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    gap: 1rem;
  }

  .loading {
    position: relative;
    background-color: #1f1f32;
    width: 5%;
    height: 100%;
    animation: loading 5s steps(40) infinite;
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
