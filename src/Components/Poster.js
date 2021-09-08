import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.div`
    
`;
const Title = styled.span``;

const Poster = ({ title, id, imageUrl, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl} />
            </ImageContainer>
            <Title>{title}</Title>
        </Container>
    </Link>
)

export default Poster 
