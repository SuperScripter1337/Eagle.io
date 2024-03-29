import React from 'react'
import { makeStyles } from "@material-ui/styles";

// Styling
const useStyles = makeStyles( theme => ({
    InternalServer:{
        color: "red"
    },
    Wrapper:{
        height: "80%",
        width: "100%",
        top: 48,
        position: "absolute"
    }
}))

/**
 * Component that represents the error when connection is not found
 */
function NetworkError(props) {
    const classes = useStyles(props)
    return (
        <section className={classes.Wrapper}>
        <p className={classes.InternalServer}>Could not process the data. Check your connection!!</p>
        </section>
    )
}

export default NetworkError