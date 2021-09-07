import { movieApi } from 'api';
import React from 'react'
import HomePresenter from "./HomePresenter";

export default class HomeContainer extends React.Component {
    state = {
        nowPlaying:null,
        upcoming:null,
        popular:null,
        error:null,
        loading:true,
    }

    async componentDidMount() {
        try {
            const { data : { results: nowPlaying }} = await movieApi.nowPlaying();
            const { data : { results: upcoming }} = await movieApi.upcoming();
            const { data : { results: popular }} = await movieApi.popular();

            this.setState({
                nowPlaying,
                upcoming,
                popular
            })

        } catch (error) {
            this.setState({
                error : '영화 정보를 가져올 수 없습니다.'
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { nowPlaying,upcoming,popular,error,loading } = this.state;
        console.log('state',this.state);
        return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />
    }
}