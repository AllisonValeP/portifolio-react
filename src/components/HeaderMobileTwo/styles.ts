import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

export const NaviMobileRoot = styled(NavigationMenu.Root)`
    margin-bottom:200px; 
    display:flex; 
    position:absolute; 
    left:20px;
:hover{
    
}
`;

export const MobileSubTrigger = styled(NavigationMenu.Trigger)`
    padding: 12px 0;
`;

export const MobileSubLi = styled.li`
    background-color:red;
    padding:5px;
`;

export const MobileSubUl = styled.ul`
    background-color:gray;
    padding:15px 0;
`;