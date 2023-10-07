import { Header } from './components/Header';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import Light from './theme/Light';
import Dark from './theme/Dark';


import { AppRoutes } from './routes'

export function App() {


  return (
    <ThemeProvider theme={Dark}>
      
      <AppRoutes/>
    </ThemeProvider> 
  )
}


