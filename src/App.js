//import logo from './logo.svg';
import './App.css';
import Movie from './component/Movie';
import { Container, Row,Col } from 'react-bootstrap';
import Footer from './component/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddMovie from './component/AddMovie';
import ListMovie from './component/ListMovie';
function App() {
  return (
    <Router>
      <Movie/>
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route path="/add" exact component={AddMovie}/>
              <Route path="/edit/:id" exact component={AddMovie}/>
              <Route path="/list" exact component={ListMovie}/>
            </Switch>
          </Col>
        <Footer/>
       </Row>
     </Container>
    </Router>
  );
}

export default App;
