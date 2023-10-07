import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

export const breakpoints = {
    exsm: "320px",
    sm: "640px",
    md: "740px",
    lg: "920px",
    exlg: "1736px",
  };

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1520px;
  
    text-decoration:none;
    

`;

export const NavigationRoot = styled(NavigationMenu.Root)`
    display: flex;
    flex-direction:row;
    @media (max-width: 570px) {
    display: none;
    text-decoration:none;

    };
`

export const ListMenu = styled(NavigationMenu.List)`
    display: flex;
    flex-direction:row;
    text-decoration:none;

    
`;
export const TriggerMenu = styled(NavigationMenu.Trigger)`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    background-color:  ${({ theme }) => theme.COLORS.BLACK_100};
    font-size:${({ theme }) => theme.FONT_SIZE.MOBILE_MENU};
    color:${({ theme }) => theme.FONT_COLOR.WHITE_100};
    text-decoration:none;

    padding:20px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    marker:none;
`;


export const ALink = styled.div`
      
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    background-color:  ${({ theme }) => theme.COLORS.BLACK_100};
    font-size:${({ theme }) => theme.FONT_SIZE.MOBILE_MENU};
    color:${({ theme }) => theme.FONT_COLOR.WHITE_100};
    
    
    a{
      background-color:red;
      text-decoration:dotted;
    }
    a::marker {
  color: red;
  
};
`;
export const ApagarMarker = styled.div`
    ul li::marker {
  color: transparent;
  size: 0.1px;
  z-index: -100;
}
`;



export const MobileContainer = styled.div`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    background-color:  ${({ theme }) => theme.COLORS.BLACK_100};
    
    
    @media (min-width: 570px) {
    display: none;
     }
`;









