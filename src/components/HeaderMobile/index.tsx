import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { SubContent, SubTrigger, MobileRoot, DropdownTrigger, MenuOptions, DropdownContent, SubItem, MobileSeparator } from './styles';
import { Link } from 'react-router-dom';

export function HeaderMobile () {
    return(
        
        <MobileRoot>
            <DropdownMenu.Root >
                <DropdownTrigger asChild>
                    <button >
                        <HamburgerMenuIcon style={{width:'30px', height:'25px', }}/>
                    </button>
                </DropdownTrigger>           
                    <DropdownMenu.Portal>
                        <DropdownContent>
                        <MobileSeparator/>
                            <DropdownMenu.Sub>
                                <Link to="/imagens"> 
                                    <SubTrigger> Imagens </SubTrigger>
                                </Link>
                               
                                <DropdownMenu.Portal>
                                    <SubContent>
                                        <SubItem>serie01</SubItem>
                                        <SubItem>serie02</SubItem>
                                        <SubItem>serie03</SubItem>
                                        <SubItem>serie04</SubItem>
                                    </SubContent>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Sub>

                            <MobileSeparator/>

                            <DropdownMenu.Sub>
                                <SubTrigger> Videos </SubTrigger>
                                <DropdownMenu.Portal>
                                    <SubContent>
                                        <SubItem>Video01</SubItem>
                                        <SubItem>Video02</SubItem>
                                        <SubItem>Video03</SubItem>
                                        <SubItem>Video04</SubItem>
                                    </SubContent>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Sub>

                            <MobileSeparator/>

                            <MenuOptions>
                                Sobre mim
                            </MenuOptions>

                            <MobileSeparator/>

                            <MenuOptions>
                                Contato
                            </MenuOptions>
                            
                        </DropdownContent>
                    </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </MobileRoot >
       
    )
}