import theme from 'styles/theme';
import { ReactNativeThemedStyledComponentsModule } from '../../../node_modules/@types/styled-components/native';
// @ts-ignore
import * as styledComponents from '../../../node_modules/styled-components/native/dist/styled-components.native.cjs';

const {
  default: styled,
  css,
  ThemeProvider,
  withTheme,
} = styledComponents as ReactNativeThemedStyledComponentsModule<typeof theme>;

// Export functions
export { css, ThemeProvider, withTheme };

// Export styled object as default
export default styled;
