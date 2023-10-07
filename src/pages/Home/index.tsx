
import { HomeContainer, HomeImageContainer, } from "./styles";

import { Header } from "../../components/Header";



export function Home() {
    return(
        <HomeContainer>
            <Header/>
            <HomeImageContainer>
                <img src='imageHome01.JPG'/>
            </HomeImageContainer>
        </HomeContainer>

    )
}