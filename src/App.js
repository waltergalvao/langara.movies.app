import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Banner from "./components/dumb/Banner";
import Movies from "./components/Movies";
import Box from "@material-ui/core/Box";
import SearchResults from "./components/SearchResults";
import TVShows from "./components/TvShows";
import SearchService from "./api/services/searchService"

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 12
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
    },
    tabs: {
        backgroundColor: '#F3F3F3'
    }
});

class App extends Component {
    TABS = {
        movies: 0,
        search: 1,
        tvShows: 2,
    };

    SEARCH = {
        multi: 0,
        movies: 1,
        tvShows: 2,
    };

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: this.TABS.movies,
            search: {
                query: '',
                type: this.SEARCH.multi,
            }
        };

        // This binding is necessary to make `this` work in the callback
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(event, tabIndex) {
        this.setState(state => ({
            ...state,
            tabIndex
        }));
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Container>
                    <Banner/>

                    <Box marginTop={8}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={4}>
                                <TextField id="standard-basic" label="Search" variant="outlined" fullWidth={true}/>
                            </Grid>
                            <Grid item>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="search-type-label">Search Type</InputLabel>
                                    <Select
                                        labelId="search-type-label"
                                        label="Search Type"
                                        value={this.state.search.type}
                                    >
                                        <MenuItem value={this.SEARCH.multi}>Multi</MenuItem>
                                        <MenuItem value={this.SEARCH.movies}>Movies</MenuItem>
                                        <MenuItem value={this.SEARCH.tvShows}>TV Shows</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box border={1} marginTop={8}>
                        <Box boxShadow={3}>
                            <Tabs
                                variant="fullWidth"
                                className={classes.tabs}
                                value={this.state.tabIndex}
                                onChange={this.handleTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Movies" value={this.TABS.movies}/>
                                <Tab label="Search Results" value={this.TABS.search}/>
                                <Tab label="TV Shows" value={this.TABS.tvShows}/>
                            </Tabs>
                        </Box>

                        <Box padding={4} hidden={this.state.tabIndex !== this.TABS.movies}>
                          <Movies ></Movies>
                        </Box>

                        <Box padding={4} hidden={this.state.tabIndex !== this.TABS.search}>
                            <SearchResults></SearchResults>
                        </Box>

                        <Box padding={4} hidden={this.state.tabIndex !== this.TABS.tvShows}>
                            <TVShows></TVShows>
                        </Box>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default withStyles(useStyles)(App)
