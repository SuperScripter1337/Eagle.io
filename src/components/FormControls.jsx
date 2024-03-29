import React from "react";
import PropTypes from "prop-types";
import SendIcon from "@material-ui/icons/CloudUpload";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as actions from "../store/actions/index";
// Styling
const useStyles = makeStyles(theme => ({
  button: {
    width: "100%"
  },
  buttonIcon: {
    marginLeft: 10
  },
  buttonGridLayout: {
    flexGrow: 1,
    position: "relative"
  },
  buttonProgress: {
    color: theme.palette.primary.dark,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

/**
 * Represents form controls for DataInput view (back, submit button)
 */
function FormControls(props) {
  const {
    postLoading,
    activeStep,
    handleBack,
    showError,
    posted,
    handleResetActiveStep,
    isFormValid
  } = props;
  const classes = useStyles(props);
  const submitButtonLabel = "SEND";
  let backToMenuButtonLabel = "BACK TO MENU";
  if (showError && activeStep === 0) {
    backToMenuButtonLabel = "REFRESH";
  } else {
    backToMenuButtonLabel = "BACK TO MENU";
  }
  return (
    <Grid spacing={6} container justify="space-between">
      {/** Display back to menu button */}
      {showError || posted ? (
        <Grid
          item
          style={{
            width: "100%",
            margin: "0 auto"
          }}
        >
          <Button
            size="large"
            className={classes.button}
            color="primary"
            variant="contained"
            onClick={handleResetActiveStep}
          >
            {backToMenuButtonLabel}
          </Button>
        </Grid>
      ) : null}
      {/** Display back button */}
      <Grid item className={classes.buttonGridLayout}>
        {activeStep === 0 || (showError || posted) ? null : (
          <Button
            size="large"
            className={classes.button}
            color="primary"
            variant="text"
            onClick={handleBack}
          >
            BACK
          </Button>
        )}
      </Grid>
      {/** Display submit button */}
      <Grid item className={classes.buttonGridLayout}>
        {activeStep === 3 && (!showError && !posted) ? (
          <Button
            className={classes.button}
            onClick={() => props.onPostDataInit()}
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            disabled={postLoading || !isFormValid}
          >
            {submitButtonLabel}
            <SendIcon />
          </Button>
        ) : null}
        {postLoading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onPostDataInit: () => dispatch(actions.postDataInit())
  };
};
const mapStateToProps = state => {
  return {
    showError: state.errorHandlerReducer.showError,
    postLoading: state.dataInputReducer.postLoading
  };
};

FormControls.defaultProps = {
  postLoading: false
};
FormControls.propTypes = {
  postLoading: PropTypes.bool,
  activeStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  posted: PropTypes.bool.isRequired,
  showError: PropTypes.bool.isRequired,
  handleResetActiveStep: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  onPostDataInit: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormControls);
