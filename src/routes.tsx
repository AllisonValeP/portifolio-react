import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home'
import { Images } from './pages/Images';

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/imagens" element={<Images/>}/>
            </Routes>
        </BrowserRouter>
    )
}