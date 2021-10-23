import React from "react";
import {Card, Form, Button, ButtonGroup} from 'react-bootstrap';
import axios from "axios";
class AddMovie extends React.Component{
    constructor(props){
        super(props);
        this.state=this.setDeafault;
       this.addMovie=this.addMovie.bind(this);
        this.movieChange=this.movieChange.bind(this);
   
    }
    setDeafault={id: '', namemv:'', type:'', director:''
    };

    componentDidMount(){
        const movieId=+this.props.match.params.id;
        if(movieId){
           this.findMovieById(movieId);
        }
    }

    findMovieById =(movieId) =>{
        axios.get("http://localhost:8096/api/movie/" + movieId)
        .then(response => {
            if(response.data!=null){
                this.setState({
                    id: response.data.id,
                    namemv: response.data.nameMovie,
                    director: response.data.director,
                    type: response.data.typeOfMovie.name
                })
            }
        }).catch((error)=>{
            console.error("Error - " +error)
        });
    }

    addMovie(event){
        event.preventDefault();

        const movie={
            nameMovie:  this.state.namemv,
            director: this.state.director,
            typeOfMovie: 4                  // when add typeOfMovie_Id => error => insert moivedto
        };

        axios.post("http://localhost:8096/api/movie/" , movie)
        .then(response =>{
            if(response.data != null){
                this.setState(this.setDeafault);
                alert("Movie add success");
            }
        })
    }

    
    movieChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    resetMovie=() =>{
        this.setState(()=> this.setDeafault);
    };

    movieList = () =>{
        return this.props.history.push("/list");
    };

    updateMovie = event =>{
        event.preventDefault();

        const movie={
            id: this.state.id,
            nameMovie:  this.state.namemv,
            director: this.state.director,
            typeOfMovie: 4              // when add typeOfMovie_Id => error => insert moivedto
        };

        axios.put("http://localhost:8096/api/movie" , movie)
        .then(response =>{
            if(response.data != null){  
                this.setState({"show":true});
                setTimeout(() => this.setState({"show" : false }),3000);
                setTimeout(() => this.movieList, 3000)
            } else{
                this.setState({"Show" : false})
            }
        })
    };
    
    render(){

        const {namemv, director,type}= this.state;
        return (
            <Card className={"border bg-drak text-black"}> 
                <Card.Header>{this.state.id? "Update movie" : "Add New Movie"} </Card.Header>
                <Card.Body>
                    <Form onReset={this.resetMovie}  onSubmit={ this.state.id ? this.updateMovie : this.addMovie} id="formMovieId">
                        <Form.Group>
                            <Form.Label>Name of movie</Form.Label>
                            <Form.Control  required autoComplete="off"
                                type="text" 
                                name="namemv" 
                                value={namemv}
                                onChange={this.movieChange}
                                className="bg-drak text-black" 
                                placeholder="Enter name of movie"
                            />
                        </Form.Group>
                
                        <Form.Group>
                            <Form.Label>Director</Form.Label>
                            <Form.Control  required autoComplete="off"
                                type="text" 
                                value={director}
                                onChange={this.movieChange}
                                name="director" 
                                placeholder="Enter name of director"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Type of Movie</Form.Label>
                            <Form.Control  required autoComplete="off" //autoComplete=> no sugges data
                                type="text" 
                                value={type}
                                onChange={this.movieChange}
                                name="type" 
                                placeholder="Type of director"/>
                        </Form.Group >
                        <ButtonGroup >
                            <Button size="sm" variant="success" type="submit">{this.state.id? "Update" : "Save"}</Button>
                            <Button size="sm" variant="info" type="reset">Reset</Button>
                            <Button size="sm" variant="info" type="button" onClick={this.movieList.bind()}>Book List</Button>
                        </ButtonGroup>
                    </Form>
                </Card.Body>
              
            </Card>
            );
    }
}

export default AddMovie