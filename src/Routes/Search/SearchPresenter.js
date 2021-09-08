import React from 'react'; 
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';


const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
`;

const Input = styled.input`
    /* all:unset; */
    font-size: 30px;
    width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, error, loading, searchTerm, handleSubmit, updateTerm }) => (
    
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="영화나 티비쇼를 검색해보세요." value={searchTerm} onChange={updateTerm}></Input>
        </Form>
        
        {
            loading? <Loader /> : (
            <>
                {
                    movieResults && movieResults.length > 0 && (
                        <Section title="Movie Results">
                            {
                                movieResults.map( movie => (
                                    <span key={movie.id}>{movie.title}</span>
                                ))
                            }
                        </Section>
                )}
                {
                    tvResults && tvResults.length > 0 && (
                        <Section title="Tv show Results">
                            {
                                tvResults.map( show => (
                                    <span key={show.id}>{show.name}</span>
                                ))
                            }
                        </Section>
                )}
            </>
        )}

        {
            error && <Message text={error} color="red"/>
        }

        {
            movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && (
                <Message text={`'${searchTerm}'의 검색결과를 찾지 못했습니다.`} color="red" />
            )
        }


    </Container>
)

SearchPresenter.propTypes = {
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    searchTerm : PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm:PropTypes.func.isRequired
}

export default SearchPresenter