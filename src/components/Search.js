import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Poster from './dumb/Poster';
import SearchService from "../api/services/searchService";
import Button from "@material-ui/core/Button";
import {MULTI} from "../valueObjects/SearchType";


const useStyles = theme => ({});

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            showMore: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.query !== prevProps.query || this.props.type !== prevProps.type) {
            this.fetch(
                this.props.query,
                this.props.type
            );
        }
    }

    async fetch(query, type) {
        if (!type || !query) {
            this.setState(state => ({ results: [], showMore: false }));
            return;
        }

        let results = (await SearchService.paginate(query, type)).results;

        if (type === MULTI) {
            results = results.filter(result => {
                return ['movie', 'tv'].includes(result.media_type);
            });
        }

        this.setState(state => ({ ...state, results, showMore: false }));
    }

    showMore() {
        this.setState({...this.state, showMore: true})
    }

    isQueryEmpty() {
        return this.props.query === '';
    }

    hasNoResults() {
        return this.props.query !== '' && this.state.results.length === 0
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
        return (
            <div>
                { this.isQueryEmpty() && (<p>Please search for something</p>)}
                { this.hasNoResults() && (<p>No results found</p>)}
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
