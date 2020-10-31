import React, { Component } from 'react';

class SearchById extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            cars:[]
        }
        this.handleChangeSearch = this.handleChangeSearch.bind(this)
    }

    handleChangeSearch = event => {
        if (event.target.value != "") {
            fetch("http://localhost:8081/cars/"+event.target.value)
            .then(response => {
                if (response.ok) {
                  return response.json()
                } else if(response.status === 404) {
                  this.props.parentCallback(404);
                  return Promise.reject('error 404')
                } else {
                  return Promise.reject('some other error: ' + response.status)
                }
              })
              .then(cars => {    
                console.log(cars)
                this.props.parentCallback(cars);
                this.setState({cars})
              })
              .catch(error => console.log('error is', error));
        }
        else {
            console.log("no id to search")
            this.props.parentCallback(null);
        }
       

    }


    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Filter by ID</label>
                    <input type="number" onInput={this.handleChangeSearch} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="search ID" />
                </div>
            </form>
        );
    }
}

export default SearchById;
