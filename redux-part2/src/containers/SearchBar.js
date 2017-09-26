import React, {Component} from 'react';


export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onFormSubmit(event){
        event.preventDefault();
    }

    onInputChange(event){
        this.setState({term: event.target.value})
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    placeholder='get a five-day forecast'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span>
                    <button type='submit'>Submit</button>
                </span>
            </form>
        );
    }
}