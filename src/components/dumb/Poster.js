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
        if (!this.props.titleData) {
            return (
                <div>Loading...</div>
            );
        }
        const { classes } = this.props;
        const {
            poster_path,
            title,
            release_date,
            popularity,
            overview
        } = this.props.titleData;

        return (
            <Card>
                <Grid container>
                    <Grid xs={4} item>
                        <CardMedia
                            className={classes.cover}
                            component="img"
                            src={ 'https://image.tmdb.org/t/p/original' + poster_path }
                            title="Live from space album cover"
                        />
                    </Grid>
                    <Grid xs={8}
                          item
                          direction="column"
                          justify="center"
                          alignItems="center"
                          container>
                        <CardContent>
                            <Box textAlign="center" marginBottom={2}>
                                <Typography component="h5" variant="h5">
                                    { title }
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Release date: { release_date } | Popularity: { popularity }
                                </Typography>
                            </Box>
                            <Typography color="textSecondary">
                                { overview }
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}

export default withStyles(useStyles)(Poster)
