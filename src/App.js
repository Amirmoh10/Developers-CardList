import React from "react";
// import { Component } from "react";
import CardContainer from "./components/cards_container/cards_container";
import "./App.css";


const developersArray = [
  {
    name: "Omar Bensedikki",
    profession: "Web Developer",
    email: "Omar@gmail.com",
    id: 1
  },
  {
    name: "Seif Ghezala",
    profession: "Web Developer",
    email: "Seif@hotmail.com",
    id: 2
  },
  {
    name: "Amir Ghezala",
    profession: "Web Developer",
    email: "Amir@gmail.com",
    id: 3
  }

]
function App () {
 
    let [enteredName,setEnteredname] = React.useState("");
    let filteredDevelopersArray = developersArray.filter((developer) => 
     
        developer.name.toLowerCase().includes(enteredName.toLowerCase())
   
    )     
    return (
      <div className="App">
          <input  
          placeholder="search"
          value={enteredName}
          onChange = {(event) => setEnteredname(event.target.value)} // setState will make new render to the components
          />
          <CardContainer filteredDevelopersArray={filteredDevelopersArray} />
      </div>
    );
  }


export default App;
