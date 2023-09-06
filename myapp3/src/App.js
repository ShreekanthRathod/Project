import { Component } from "react";
export default class App extends Component
{
    state={
        Name:"shrikanth",
        Add:"pune"
    }
    render()
    {
        return(
            <>
            <h1>{this.state.Name}</h1>
            <h1>{this.state.Add}</h1>
        
            </>
            


        )
    }
}