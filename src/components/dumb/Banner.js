import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {withStyles} from "@material-ui/core";

const useStyles = theme => ({
    heading: {
        fontWeight: 600
    }
});

class Banner extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Box border={4} padding={1} align="center">
                <Typography variant="h3" component="h1" className={classes.heading}>
                    React Movies App
                </Typography>
            </Box>
        );
    }
}

export default withStyles(useStyles)(Banner)
