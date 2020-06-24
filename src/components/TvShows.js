import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Poster from './dumb/Poster';
import tvShowService from "../api/services/tvShowService";
import {AIRING_TODAY, ON_THE_AIR, POPULAR, TOP_RATED} from "../valueObjects/TvShowListType";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = theme => ({
    formControl: {
        minWidth: 120,
    }
});

class TvShows extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: AIRING_TODAY,
            showMore: false,
            response: {}
        };

        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    async componentDidMount() {
        await this.fetch();
    }

    async handleTypeChange(event) {
        await this.setState({
            ...this.state,
            type: event.target.value,
            showMore: false
        });

        await this.fetch();
    }

    async fetch() {
        const response = await tvShowService.paginate(this.state.type);

        this.setState({...this.state, response})
    }

    showMore() {
        this.setState({...this.state, showMore: true})
    }

    results(startAt, stopAt) {
        if (!this.state.response.results) {
            return;
        }

        return this.state.response.results.slice(startAt,stopAt).map(movie => (
            <Box marginBottom={2} key={movie.id}>
                <Poster titleData={{...movie, title: movie.original_name}}></Poster>
            </Box>
        ));
    }

    render() {
        const { classes } = this.props;

        return (
            <Box>
                <Box display="flex" justifyContent="center">
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="search-type-label">Search Type</InputLabel>
                            <Select
                                labelId="search-type-label"
                                label="Search Type"
                                value={this.state.type}
                                onChange={this.handleTypeChange}
                            >
                                <MenuItem value={AIRING_TODAY}>Now Playing</MenuItem>
                                <MenuItem value={ON_THE_AIR}>On the air</MenuItem>
                                <MenuItem value={POPULAR}>Popular</MenuItem>
                                <MenuItem value={TOP_RATED}>Top Rated</MenuItem>
                            </Select>
                        </FormControl>
                </Box>
                <Box mt={4}>
                    { this.results(0, 10) }
                    { this.state.showMore && this.results(10) }
                    { !this.state.showMore && (
                        <Button variant="contained" color="primary" onClick={() => this.showMore()}>Show More</Button>
                    )}
                </Box>
            </Box>
        );
    }
}

export default withStyles(useStyles)(TvShows)
