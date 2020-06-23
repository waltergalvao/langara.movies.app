import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Banner extends Component {
    render() {
        return (
            <Box border={4} padding={1} align="center">
                <Typography variant="h3" component="h1" fontWeight={600}>
                    React Movies App
                </Typography>
            </Box>
        );
    }
}

export default Banner
