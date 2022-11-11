import React from "react";
import { Books } from "./books";
import axios from "axios"; //import to use axios

export class Read extends React.Component{
    

    componentDidMount() {
        //read JSON data from the Node/Express server
        axios.get('http://localhost:4000/api/books') 
        .then((response)=>{
            this.setState({books:response.data.myBooks})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    state = {
        books:[ ]
    }
    
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}