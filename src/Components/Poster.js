import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.div`
    background: url(${prop => prop.bgUrl}) no-repeat;
    height:180px;
    background-size:cover;
    background-position:center center;
    border-radius:4px;
    margin-bottom:10px;
    transition:opacity 0.2s linear;
`;
const Title = styled.span``;

const Poster = ({ title, id, imageUrl, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={`https://image.tmdb.org/t/p/w300/${imageUrl}`} />
            </ImageContainer>
            <Title>{title}</Title>
        </Container>
    </Link>
)

export default Poster 
