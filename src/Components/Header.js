import React from 'react'
import styled from 'styled-components'
import {Link, withRouter } from 'react-router-dom'

const Header = styled.header`
    /* position:fixed; */
    border:1px solid red;
    padding: 10px;
`

const List = styled.ul`
    display:flex;
    
    
`

const Item = styled.li`
    padding : 0 10px;
    border-bottom:2px solid ${ props => ( props.current ? 'red' : 'black' )}
`

const SLink = styled(Link)`
`

const HeaderContainer = ({location : {pathname} }) => (
    <Header>
    {/* {console.log('헤더 프롭스',props)} */}
    {console.log(pathname)}
        <List>
            <Item current={pathname === '/'}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === '/tv'}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === '/search'}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
)

export default withRouter(HeaderContainer)