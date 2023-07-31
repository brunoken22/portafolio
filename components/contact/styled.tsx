import styled from 'styled-components'
export const ContenedorForm = styled.div`

`
export const Form= styled.form`
   display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 3rem;
    padding: 1rem;
    width: 360px;
    border: 2px solid #252525;
    border-left-width: thick;
    border-bottom-width: thick;
`
export const Label = styled.label`
    display: block;
`
export const Input = styled.input`
    height: 30px;
    width: 100%;
    text-indent: 6px;
   &:focus{
      outline: 3px solid #9999FF;
   }
`
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
      background-color: #0b7dda;
   }
   &:active {
      background-color: #0b7dda;
   }
`
   