import { movieApi, tvApi } from 'api';
import React from 'react'
import DetailPresenter from "./DetailPresenter";

export default class DetailContainer extends React.Component {
    constructor(props) {
        super(props)

        const { location : { pathname } } = props;

        this.state = {
            result:null ,
            error:null,
            loading:true,
            isMovie : pathname.includes('/movie/')
        }
    }

    async componentDidMount() {
        const { match : { params : { id } }, history : { push }, location : {pathname} } = this.props;
        const parsedId = parseInt(id);
        const { isMovie } = this.state;

        if( isNaN(parsedId) ) {
            return push('/')
        }

        let result = null;

        try {
            if ( isMovie ) {
                console.log('영화');
                ({data : result } = await movieApi.movieDetail(parsedId));

            } else {
                console.log('티비');
                ({data : result } = await tvApi.showDetail(parsedId));
            }

            
        } catch (error) {
            this.setState({
                error: '결과를 찾지 못했습니다.'
            })
            
        } finally {
            this.setState({
                loading : false,
                result
            })
        }


        // console.log(parsedId);
    }

    render() {
        const {result,error,loading} = this.state;
        console.log('check',this.props);
        console.log('state check',this.state);
        return <DetailPresenter result={result} error={error} loading={loading} />
    }
}