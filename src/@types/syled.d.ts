import 'styled-components';
import Dark from '../theme/Dark';

declare module 'styled-components'{
    type DarkThemeType = typeof Dark;

    export interface DefaultTheme extends DarkThemeType{ }
}