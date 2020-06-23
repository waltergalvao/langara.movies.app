import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Poster from './dumb/Poster';
import movieService from "../api/services/movieService";
import {POPULAR, TOP_RATED, NOW_PLAYING, UPCOMING} from "../valueObjects/MovieListType";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = theme => ({
    formControl: {
        minWidth: 120,
    }
});

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: POPULAR,
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
        const response = await movieService.paginate(this.state.type);

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
                <Poster titleData={{...movie, title: movie.original_title}}></Poster>
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
                            <MenuItem value={POPULAR}>Popular</MenuItem>
                            <MenuItem value={TOP_RATED}>Top Rated</MenuItem>
                            <MenuItem value={NOW_PLAYING}>Now Playing</MenuItem>
                            <MenuItem value={UPCOMING}>Upcoming</MenuItem>
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

export default withStyles(useStyles)(Movies)
