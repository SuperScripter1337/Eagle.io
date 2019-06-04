import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LogIn from "./components/LogIn/LogIn";
import Layout from "./hoc/Layout/Layout";
import theme from "./shared/utility/CustomMuiTheme";
import Main from "./components/Main/main";
import DataInput from "./containers/DataInput/DataInput";

const App = () => (
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route path="/input" component={DataInput} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={LogIn} />
          <Route path="/" exact component={LogIn} />
        </Switch>
      </Layout>
    </MuiThemeProvider>
  </React.Fragment>
);

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

Layout.defaultProps = {
  isAuthenticated: false
};
Layout.propTypes = {
  isAuthenticated: PropTypes.bool
};
export default connect(mapStateToProps)(withRouter(App));
