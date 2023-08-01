import styled from 'styled-components'

export const HeaderNav = styled.header`
   position: sticky;
   backdrop-filter: blur(3px);
   margin: 0;
   padding: 0;
   top: 0;
   right: 0;
   left: 0;
   z-index: 10;
`
export const NavBar = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 2rem;
   color: #fff;
   @media(max-width:700px){
      margin:0
   }
`
export const Div = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 3rem;
   @media(max-width:700px){
      display: none;
   }
`
export const Enlaces = styled.a`
   text-decoration: none;
   color: #fff;
   font-weight: 500;
   cursor: pointer;
   &:after {
      content: "";
      display: block;
      margin: auto;
      height: 2px;
      width: 0px;
      transition: all .5s;
   }
   &:hover:after {
      width: 100%;
      background: #FF6038;
   }
`
export const DivDespleHam = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    backdrop-filter: blur(5px);
   @media(min-width:701px){
      display: none;
   }
`
export const Hambug = styled.div`
   display: none;
   flex-direction: column;
   gap:0.3rem;
   margin-right: 1rem;
   cursor:pointer;
   @media(max-width:700px){
      display: flex;
   }
`

export const LineaDiv = styled.div`
   width: 30px;
   height: 4px;
   background-color: #fff;
`