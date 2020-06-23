import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Poster from './dumb/Poster';


const useStyles = theme => ({});

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'popular'
        };
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <h1>Movies</h1>
                <Box marginBottom={2}>
                    <Poster></Poster>
                </Box>
                <Box marginBottom={2}>
                    <Poster></Poster>
                </Box>
            </div>
        );
    }
}

export default withStyles(useStyles)(Movies)
