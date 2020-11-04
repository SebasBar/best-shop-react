import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.userInput)

    }
    handleChange = (event) => {
        this.setState({ userInput:event.target.value });
    }
    render(){
        return(
    
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <input type="text" placeholder="Search here" value={this.state.userInput} onChange={(event)=>this.handleChange(event)} />
                <input type="submit" value="search" />
            </form>
        )
    }
}

export default SearchBar;