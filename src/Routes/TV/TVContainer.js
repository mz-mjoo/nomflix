import { tvApi } from 'api';
import React from 'react'
import TVPresenter from "./TVPresenter";

export default class TVContainer extends React.Component {
    state = {
        topRated:null ,
        popular:null,
        airingToday:null,
        error:null,
        loading:true,
    }

    async componentDidMount() {
        try {
            const {data : { result : topRated }} = tvApi.topRated()
            const {data : { result : airingToday }} = tvApi.airingToday()
            const {data : { result :  popular }} = tvApi.popular()

            this.setState({
                topRated,
                airingToday,
                popular
            })
            
        } catch (error) {
            this.setState({
                error:'티비 정보를 가져올 수 없습니다.'
            })
        } finally {
            this.setState({
                loading:false
            })
        }
    }

    render() {
        const {topRated,popular,airingToday,error,loading} = this.state;

        return <TVPresenter topRated={topRated} airingToday={airingToday} popular={popular} error={error} loading={loading} />
    }
}