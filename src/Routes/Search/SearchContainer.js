import { movieApi, tvApi } from 'api';
import React from 'react'
import SearchPresenter from "./SearchPresenter";

export default class SearchContainer extends React.Component {
    state = {
        movieResults:null ,
        tvResults:null,
        searchTerm:'',
        error:null,
        loading:false,
    }
    
    handleSubmit = event => {
        event.preventDefault();

        const { searchTerm } = this.state;

        if( searchTerm !== '' ) {
            this.searchByTerm()
            console.log('enter');
        }
    }

    updateTerm = event => {
        const { target : { value } } = event;
        console.log(value);
        this.setState({
            searchTerm : value
        })

    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;

        this.setState({loading:true})

        console.log('enter2');
        // throw Error();

        try {
            const { data : { results: movieResults } } = await movieApi.search(searchTerm);
            const { data : { results: tvResults } } = await tvApi.search(searchTerm);

            this.setState({
                movieResults,
                tvResults
            })

 
        } catch (error) {
            console.log('에러났다!',error);
            this.setState({
                error : '결과를 찾지 못했습니다.'
            })
            
        } finally {
            this.setState({ loading : false })
        }
    }

    render() {
        const {movieResults,tvResults,searchTerm,error,loading} = this.state;

        console.log(this.state);

        return (
            <SearchPresenter 
                movieResults={movieResults} 
                tvResults={tvResults} 
                searchTerm={searchTerm} 
                error={error} 
                loading={loading} 
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        )
    }
}