import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components'

export const MobileRoot = styled.nav`
    padding-bottom: 150px;
    background-color:gray;
`;

export const DropdownContent = styled(DropdownMenu.Content)`
    
    text-align:center;
    margin-right:15px;
    background-color:orange;
    width:100%;
`;
export const DropdownTrigger = styled(DropdownMenu.Trigger)`
   background-color: gray;
   border:0;
   border-radius:4px;
   margin:25px;
 
   cursor: pointer;
`;


export const SubTrigger = styled(DropdownMenu.SubTrigger)`
    font-family: Kanit, sans-serif;
    font-weight:${({ theme }) => theme.FONT_FAMILY.BOLDER};
    color:${({ theme }) => theme.FONT_COLOR.WHITE_100};
    font-size:${({ theme }) => theme.FONT_SIZE.MOBILE_MENU};
    cursor: pointer;
    border-radius:6px; 
    &:hover 
      {      
        background-color:blue;
      }

    &:focus
      {       
        background-color:blue;
      };
`;

export const SubContent = styled(DropdownMenu.SubContent)`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color:${({ theme }) => theme.FONT_COLOR.WHITE_100};
    font-size:${({ theme }) => theme.FONT_SIZE.MOBILE_SUBMENU};
    border-radius:4px;
    margin-right:8px;

    background-color:gray;
`;

export const SubItem = styled(DropdownMenu.Item)`
   cursor: pointer;
   padding:5px;
   border-radius:6px; 
   font-weight:border;
   border-radius:4px;
   &:hover 
      {      
        background-color:red;
      }

      &:focus
      {       
        background-color:red;
      };

`;
export const MenuOptions = styled(DropdownMenu.Item)`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-weight:${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-style:${({ theme }) => theme.FONT_STYLE.ITALIC};
    
    color:${({ theme }) => theme.FONT_COLOR.WHITE_100};
    font-size:${({ theme }) => theme.FONT_SIZE.MOBILE_MENU};
    border-radius:4px;
    cursor: pointer;
    /* padding: 3px 0;
    margin-right: 20px; */

    &:hover 
      {      
        background-color:red;
      }

    &:focus
      {       
        background-color:red;
      };
`;

export const MobileSeparator =styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: red;
  margin: 5px;
`