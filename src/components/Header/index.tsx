import { Link } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ALink, ApagarMarker, HeaderContainer, ListMenu, MobileContainer, NavigationRoot, TriggerMenu } from './styles'
import { HeaderMobile } from '../HeaderMobile';
import { HeaderMobileTwo } from '../HeaderMobileTwo'

export function Header (){
    return(
        
        <HeaderContainer>
            <Link to="/">
                <p>Logo</p>
            </Link>
            <NavigationRoot>
                <ListMenu> 
                    <NavigationMenu.Item>
                        <TriggerMenu>
                            <Link to="/imagens" style={{textDecoration:'none'}}> 
                            <ALink>
                                <a>Imagens</a>
                            </ALink>
                            </Link>
                        </TriggerMenu>
                       <NavigationMenu.Content>
                        <ApagarMarker>
                            <ul>
                                <li>serie1</li>
                                <li>serie2</li>
                                <li>serie3</li>
                                <li>serie4</li>
                                <li>serie5</li>
                            </ul>
                        </ApagarMarker>
                       </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <TriggerMenu>
                            <a>Videos</a>
                        </TriggerMenu>
                        <NavigationMenu.Content>
                            <ul>
                                <li>video01</li>
                                <li>video02</li>
                                <li>video03</li>
                                <li>video04</li>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <TriggerMenu>
                            Sobre mim
                        </TriggerMenu>
                    </NavigationMenu.Item>

                </ListMenu>
            </NavigationRoot>

            <MobileContainer>
                <HeaderMobile/>
            </MobileContainer>
        </HeaderContainer>
    )
}