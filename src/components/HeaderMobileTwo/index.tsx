import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NaviMobileRoot, MobileSubLi, MobileSubUl, MobileSubTrigger} from './styles'
export function HeaderMobileTwo(){
    return(
        <NaviMobileRoot>
            <NavigationMenu.List>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger style={{padding:'10px'}}>
                        hamburguer
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                        <NavigationMenu.Sub defaultValue='sub1'>
                            <NavigationMenu.List>

                                <NavigationMenu.Item>
                                    <MobileSubTrigger><a>Imagens</a></MobileSubTrigger>
                                        <NavigationMenu.Content>
                                            <MobileSubUl>
                                                <MobileSubLi>serie1</MobileSubLi>
                                                <MobileSubLi>serie2</MobileSubLi>
                                                <MobileSubLi>serie3</MobileSubLi>
                                                <MobileSubLi>serie4</MobileSubLi>
                                                <MobileSubLi>serie5</MobileSubLi>
                                            </MobileSubUl>
                                        </NavigationMenu.Content>
                                </NavigationMenu.Item>

                                <NavigationMenu.Item>
                                    <MobileSubTrigger>Videos</MobileSubTrigger>
                                    <NavigationMenu.Content>
                                        <MobileSubUl>
                                            <MobileSubLi>video01</MobileSubLi>
                                            <MobileSubLi>video02</MobileSubLi>
                                            <MobileSubLi>video03</MobileSubLi>
                                            <MobileSubLi>video04</MobileSubLi>
                                        </MobileSubUl>
                                    </NavigationMenu.Content>
                                </NavigationMenu.Item>

                                <NavigationMenu.Item>
                                    <MobileSubTrigger>Sobre mim</MobileSubTrigger>
                                </NavigationMenu.Item>

                            </NavigationMenu.List>
                        </NavigationMenu.Sub>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NaviMobileRoot>
    )
}