import styled, {keyframes} from 'styled-components';
const msj = keyframes`
0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  50% {
    transform: rotate3d(1, 1, 1, 180deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
`;
export const ContenedorForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 5rem;
  position: relative;
`;
export const DivContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  @media (max-width: 700px) {
    margin: 1rem auto;
    gap: 1rem;
  }
`;
export const OneContact = styled(DivContact)<any>`
  align-items: center;
  flex-direction: ${(props: any) => props.$direction};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem;
  padding: 1rem;
  width: 450px;
  box-shadow: -2px 2px 3px 1px #ddd;
  border-radius: 5px;

  @media (max-width: 700px) {
    width: 95vw;
    margin: 0;
    margin-bottom: 2rem;
    box-shadow: none;
  }
`;
export const Label = styled.label`
  display: block;
`;
export const Input = styled.input`
  width: 100%;
  text-indent: 6px;
  border-radius: 10px;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid
    ${({theme}: any) => (theme.color == '#fff' ? '#b198ce' : '#000')};
  border-bottom: 3px solid
    ${({theme}: any) => (theme.color == '#fff' ? '#b198ce' : '#000')};
  border-left: 3px solid
    ${({theme}: any) => (theme.color == '#fff' ? '#b198ce' : '#000')};
  &:focus {
    outline: 1px solid #b198cf;
  }
`;
export const Textarea = styled.textarea`
  text-indent: 6px;
  border-radius: 10px;
  font-size: 1rem;
  max-width: 100%;
  min-width: 100%;
  max-height: 310px;
  min-height: 140px;
  padding: 0.5rem;
  border: 1px solid
    ${({theme}: any) => (theme.color == '#fff' ? '#b198ce' : '#000')};

  border-bottom: 3px solid
    ${({theme}: any) => (theme.color == '#fff' ? '#b198ce' : '#000')};

  border-left: 3px solid
    ${({theme}: any) => (theme.color == '#fff' ? '#b198ce' : '#000')};

  &:focus {
    outline: 1px solid #b198cf;
  }
`;
export const Span = styled.span`
  color: ${({theme}: any) =>
    theme.color == '#000' ? '#7868fd' : 'greenyellow'};
`;
export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({theme}: any) =>
    theme.background == '#fff' ? '#a29ae7' : '#3291df'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  &:hover {
    background-color: #4793d1;
  }
  &:active {
    background-color: #2d99f1;
  }
`;
export const Enlaces = styled.a`
  color: ${({theme}: any) => theme.color};
  text-decoration: none;
`;
export const DivEnlaceContact = styled.div<any>`
  width: 25px;
  svg {
    fill: ${({theme}: any) => theme.color};
  }
  .github:hover {
    fill: #e196ff;
    transform: scale(1.2);
  }
  .whatsapp:hover {
    fill: #5cb95c;
    transform: scale(1.2);
  }
  .linkedin:hover {
    fill: #4b9cec;
    transform: scale(1.2);
  }
`;
export const ContainerThankYou = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: brightness(0.2);
`;
export const DivThankYou = styled.div`
  max-width: 1024px;
  width: 95%;
  height: 80%;
  padding: 1rem;
  background-color: ${({theme}) => theme.background};
  border-radius: 15px;
  box-shadow: 0 0 5px 1px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const DivHandSvg = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #5fbe56;
  display: flex;
  justify-content: center;
  align-items: center;
  /* animation: ${msj} 2s ease 5s infinite normal forwards; */
`;
