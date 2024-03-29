import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Customized theme provider for the application
// https://material-ui.com/customization/themes/#createmuitheme-options-theme
// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme({
  overrides: {
    MuiListSubheader: {
      gutters: {
        paddingLeft: 0
      }
    }
  },
  palette: {
    secondary: {
      light: "#ffffff",
      main: "#ededed",
      dark: "#bbbbbb"
    },
    primary: {
      light: "#81b6f4",
      main: "#4d86c1",
      dark: "#055990"
    },
    error: red
  },
  typography: { useNextVariants: true }
});

theme = responsiveFontSizes(theme);
export default theme;
