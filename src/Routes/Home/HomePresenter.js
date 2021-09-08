import React from 'react'; 
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section'
import Loader from 'Components/Loader';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding:30px 20px;
    background:lightgoldenrodyellow;
`

const HomePresenter = ({ nowPlaying, upcoming, popular,error,loading }) => loading ? <Loader /> : (
    <Container>
        { nowPlaying && nowPlaying.length > 0 &&
         (<Section title="Now Playing">
         { nowPlaying.map( movie => <Poster isMovie={true} key={movie.id} title={movie.title} imageUrl={movie.poster_path} id={movie.id}/> )}
         </Section>
        )}

        { upcoming && upcoming.length > 0 &&
         (<Section title="Upcoming">
         { upcoming.map( movie => <Poster isMovie={true} key={movie.id} title={movie.title} imageUrl={movie.poster_path} id={movie.id} /> )}
         </Section>
        )}

        { popular && popular.length > 0 &&
         (<Section title="Popular">
         { popular.map( movie => <Poster isMovie={true} key={movie.id} title={movie.title} imageUrl={movie.poster_path} id={movie.id} /> )}
         </Section>
        )}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying:PropTypes.array,
    upcoming:PropTypes.array,
    popular:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
}

export default HomePresenter