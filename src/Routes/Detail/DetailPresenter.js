import React from 'react'; 
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';


const Container = styled.div``;
const Title = styled.span``;

const DetailPresenter = ({ result, error, loading }) => (
    loading ? <Loader/> : (<Container>
        <Title>
            { result.title ? result.title : result.name}
        </Title>
    </Container>)
)

DetailPresenter.propTypes = {
    result:PropTypes.object,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
}

export default DetailPresenter