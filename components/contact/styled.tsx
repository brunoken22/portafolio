import styled, {keyframes} from 'styled-components';
const msj = keyframes`
   0%{
      color:#fff;
   }
   50%{
      color:#8ff79d;

   }
   100%{
      color:#00ff22;
   }
`;
export const ContenedorForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 5rem;
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
    ${({theme}: any) => (theme.color == '#fff' ? '#75b5ff' : '#000')};
  border-bottom: 3px solid
    ${({theme}: any) => (theme.color == '#fff' ? '#75b5ff' : '#000')};
  border-left: 3px solid
    ${({theme}: any) => (theme.color == '#fff' ? '#75b5ff' : '#000')};
  &:focus {
    outline: none;
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
    ${({theme}: any) => (theme.color == '#fff' ? '#75b5ff' : '#000')};

  border-bottom: 3px solid
    ${({theme}: any) => (theme.color == '#fff' ? '#75b5ff' : '#000')};

  border-left: 3px solid
    ${({theme}: any) => (theme.color == '#fff' ? '#75b5ff' : '#000')};

  &:focus {
    outline: none;
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

export const Enviado = styled.p`
  text-align: center;
  animation: ${msj} 2s ease 5s infinite normal forwards;
  box-shadow: 0px 10px 10px 1px;
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
