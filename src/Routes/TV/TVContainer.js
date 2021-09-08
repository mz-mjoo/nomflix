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
            const {data : { results : topRated } } = await tvApi.topRated()
            const {data : { results : airingToday } } = await tvApi.airingToday()
            const {data : { results : popular } } = await tvApi.popular()

            this.setState({
                topRated,
                airingToday,
                popular
            })

            console.log('componentDidMount',topRated,airingToday,popular);
            
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
        console.log(this.state);
        return <TVPresenter topRated={topRated} airingToday={airingToday} popular={popular} error={error} loading={loading} />
    }
}