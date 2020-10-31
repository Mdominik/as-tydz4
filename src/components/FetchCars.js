import React, {Component} from 'react'
import Car from './Car'
import SearchById from './SearchById'

export default class FetchCars extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchedCar: null,
            cars: []
        }
        this.RenderCars = this.RenderCars.bind(this)
    }


    componentDidMount() {
        fetch("https://as-tydz3-backend.herokuapp.com/cars/all", {headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        .then(cars => {
                console.log(cars)
                this.setState({cars})
            }
        );
    }

    RenderCars() {
        
         
        if (this.state.searchedCar == null) {
            console.log("Now generate all the cars")
            return this.state.cars.map(car => <Car info={car} />);
        }
        else if (this.state.searchedCar == 404){
            console.log("Now 404")
            return;
        }
        else if(this.state.searchedCar != null && this.state.searchedCar != 404) {
            console.log("Now single car")
            return <Car info={this.state.searchedCar} />
        }
    }

    callbackFunction = (childData) => {
        this.setState({searchedCar: childData})
        console.log(childData)
    }




    render() {
        return(
            <div>
                <SearchById parentCallback = {this.callbackFunction} />
                <h2 className="text-center">Cars list</h2>
                {this.state.cars.length > 0 ? 
                <div className="row">
                
                    <table className="table table-striped table-bordered lead" >
                    
                        <thead className="lead">
                            <tr>
                                <th>Car id</th>
                                <th>Car mark</th>
                                <th>Car model</th>
                                <th>Car color</th>
                                <th>click to save</th>
                                <th>remove</th>
                            </tr>
                        </thead>
                            
                                <tbody>
                                    {this.RenderCars()}
                                    
                                </tbody>
                            

                    </table>
                    
                </div>
                : 
                <h5 className="text-center">No cars</h5>}
            </div>
        );
    }


}
