//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Person } from "./Person";
import { Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  static timer=0;
  constructor() {
    super();

    this.state = {
      person: Person,
      shows: false,
    };
  }

  handleProfile = () =>
    this.state.shows
      ? this.setState({ shows: false })
      : this.setState({ shows: true });

      componentDidMount(){
        let cpt = 0;
        function secondes(){
          cpt++;
          document.getElementById("timer").innerText = cpt;
        }
        setInterval(secondes,1000);
      }
     /* componentWillUnmount(){
          clearInterval(this.interval);
      }*/
      
  render() {
    return (
      <div style={{ textAlign: "center", marginTop:"15%" }}>
      
          { this.state.shows && (
            <Card style={{ width: "18rem",margin:"0 auto" }}>
              <Card.Img variant="top" src={this.state.person.imgSrc} />
              <Card.Body>
                <Card.Title>{this.state.person.fullName}</Card.Title>
                <Card.Text>{this.state.person.bio}</Card.Text>
                <p>{this.state.person.profession}</p>
              </Card.Body>
            </Card>
          )}
          
        
          
          
          
          
         
            <img src="/onOff.png" alt="onOff" onClick={this.handleProfile} style={{cursor:"pointer"}}/>

             <p id="timer">
                  
             </p>
                
            
      </div>
    );
  }
}

export default App;
