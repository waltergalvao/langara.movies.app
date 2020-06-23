import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = theme => ({
    cover: {
        width: '100%'
    }
});

class Poster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'popular'
        };
    }

    render() {
        const {classes} = this.props;

        return (
            <Card>
                <Grid container>
                    <Grid xs={4}>
                        <CardMedia
                            className={classes.cover}
                            component="img"
                            src="https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg"
                            title="Live from space album cover"
                        />
                    </Grid>
                    <Grid xs={8}
                          direction="column"
                          justify="center"
                          alignItems="center"
                          container>
                        <CardContent>
                            <Box textAlign="center" marginBottom={2}>
                                <Typography component="h5" variant="h5">
                                    IO
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Release date: 2008-06-05 | Popularity: 23.401
                                </Typography>
                            </Box>
                            <Typography variant="body" color="textSecondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}

export default withStyles(useStyles)(Poster)
