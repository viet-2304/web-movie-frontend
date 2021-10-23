import React from "react";
import { ButtonGroup, Card, Table } from "react-bootstrap";
import axios from "axios"; // use to create request(get put post .......)
import {Link} from 'react-router-dom';

class ListMovie extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies: []
        };
    }

    componentDidMount(){     
       this.findAllMovie();
    }

    findAllMovie(){
        axios.get("http://localhost:8096/api/movie") // must have the method http or https
        .then(response => response.data)
        .then( (data)=>{
            this.setState({movies: data});
        });
    }

    //error function
    deleteMovie = (movieId) =>{
       axios.delete("http://localhost:8096/api/movie/"+movieId)
       .then(response => {
            if(response.data!=null){
                alert("Movie delete success");
                this.setState({
                    movies: this.state.movies.filter(movie => movie.id !== movieId)
                });
            }
       });
    };

    render(){
        return (
            <Card className="border bg-drak text-black">
                <Card.Header>Movie List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                        <tr>
                            <th>Movie name</th>
                            <th>Director</th>
                            <th>Type of movie</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody >
                           {
                           this.state.movies.length ===0 ?
                            <tr align="center">
                                <td colSpan="6"> no movie</td>
                            </tr> :
                            this.state.movies.map((movie)=> (
                                <tr key={movie.id}>
                                    <td>{movie.nameMovie}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.typeOfMovie.name}</td>
                                    <td>
                                        <ButtonGroup>
                                        <Link to={"edit/"+ movie.id} className="navbar-link"> <button>Edit Movie </button></Link>
                                          
                                            <button  variant="red" onClick={this.deleteMovie.bind(this,movie.id)}> Delete</button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))

                           }
                         
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            );
    }
}

export default ListMovie