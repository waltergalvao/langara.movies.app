import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Poster from './dumb/Poster';
import SearchService from "../api/services/searchService";
import Button from "@material-ui/core/Button";
import {MULTI} from "../valueObjects/SearchType";
import { Typography } from '@material-ui/core';


const useStyles = theme => ({
    heading: {
        fontWeight: 600
    }
});

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            showMore: false,
            lastSearchQuery: null,
        };

        this.fetch = this.fetch.bind(this);
    }

    componentDidMount() {
        this.props.setSearchHandler(this.fetch);
    }

    async fetch() {
        const query = this.props.query;
        const type = this.props.type;

        if (!type || !query) {
            this.setState(state => ({
                ...state,
                results: [],
                showMore: false,
            }));

            return;
        }

        let results = (await SearchService.paginate(query, type)).results;

        if (type === MULTI) {
            results = results.filter(result => {
                return ['movie', 'tv'].includes(result.media_type);
            });
        }

        this.setState(() => ({
            results,
            showMore: false,
            lastSearchQuery: query
        }));
    }

    showMore() {
        this.setState({...this.state, showMore: true})
    }

    isWaitingSubmit() {
        return this.props.query !== '' && this.state.lastSearchQuery === null;
    }

    hasNotSearchedYet() {
        return this.state.lastSearchQuery === null && this.props.query === '';
    }

    hasNoResults() {
        return this.state.lastSearchQuery !== null && this.state.results.length === 0
    }

    results(startAt, stopAt) {
        if (!this.state.results) {
            return;
        }

        return this.state.results.slice(startAt,stopAt).map(result => (
            <Box marginBottom={2} key={result.id}>
                <Poster titleData={{...result, title: (result.original_name || result.original_title)}}></Poster>
            </Box>
        ));
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                { this.hasNotSearchedYet() && (
                    <Typography variant="h4" align="center" className={classes.heading}>Please enter a search</Typography>
                )}

                { this.isWaitingSubmit() && (
                    <Typography variant="h4" align="center" className={classes.heading} >Please initiate a search</Typography>
                )}

                { this.hasNoResults() && (
                    <Typography variant="h4" align="center" className={classes.heading} >No results found</Typography>
                )}

                { this.results(0, 10) }
                { this.state.showMore && this.results(10) }
                { (!this.state.showMore && this.state.results.length > 10) && (
                    <Button variant="contained" color="primary" onClick={() => this.showMore()}>Show More</Button>
                )}
            </div>
        );
    }
}

export default withStyles(useStyles)(Search)
