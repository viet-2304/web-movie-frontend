import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Movie extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark"> 
            <Link to={"/"} className="navbar-brand">movie </Link>               
                <Nav className="mr-auto">
                    <Link to={"/add"} className="navbar-link"> Add Movie </Link>
                    <Link to={"/list"} className="navbar-link"> List movie </Link>
                </Nav>
            </Navbar>
            );
    }
}

export default Movie;