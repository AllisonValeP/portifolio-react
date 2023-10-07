import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export interface Props {
    src: string;
    width: string;
    height: string;   
}

export const HomeContainer = styled.div`
  color:blue;
    background-color:red;
    

    align-items:center;

    ::marker {
  color: transparent;
  size: 0.1px;
  z-index: -100;
}

`;
export const HomeImageContainer = styled.div`
   background-color:yellow;

   display:flex;

   justify-content:center;
   

 img{
    max-width:90%;
   max-height:800px;
    display: block;
 }
`

