import React from 'react'
import {HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from 'Routes/Home/index'
import TV from 'Routes/TV/index'
import Search from 'Routes/Search/index'
import Detail from 'Routes/Detail/index'
import Header from 'Components/Header'


export default () => (
    <Router>
    <Header/>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/tv" exact component={TV}></Route>
            <Route path="/tv/popular" render={()=> <h1>Popular</h1>}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/movie/:id" component={Detail}/>
            <Route path="/show/:id" component={Detail}/>


            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)