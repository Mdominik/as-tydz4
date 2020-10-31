import React, { Component } from 'react';

class CarsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: [],
            newCar : {
                mark: null,
                model: null,
                color: "BLACK"
            }
        }

        this.handleChangeMark = this.handleChangeMark.bind(this)
        this.handleChangeModel = this.handleChangeModel.bind(this)
        this.handleChangeColor = this.handleChangeColor.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeMark = event =>{
        this.setState({ newCar: {
                            mark:event.target.value,
                            model: this.state.newCar.model,
                            color: this.state.newCar.color }
                        })
        console.log(this.state.newCar)
    }
    handleChangeModel = event =>{
        this.setState({ newCar: {
                            mark: this.state.newCar.mark,
                            model:event.target.value,
                            color: this.state.newCar.color }
                        })
        console.log(this.state.newCar)
    }
    handleChangeColor = event =>{
        this.setState({ newCar: {
                            mark: this.state.newCar.mark,
                            model: this.state.newCar.model,
                            color: event.target.value}
                        })
        console.log(this.state.newCar)
    }
    handleSubmit = event => {
        const data = {          mark: this.state.newCar.mark,
                                model: this.state.newCar.model,
                                color: this.state.newCar.color}
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch("https://as-tydz3-backend.herokuapp.com/cars", requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        
        alert('A car was added: ' + this.state.newCar.model);
    }

    componentDidMount() {

        fetch("https://as-tydz3-backend.herokuapp.com/cars/color-values", {headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        .then(colors => {
                console.log(colors)
                this.setState({colors})
            }
        );
    }

    addCar() {


    }

    render() {
        return (
            <div>
                <h2 className="text-center">Add a new car</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Brand</label>
                        <input type="mark" name="mark" onChange={this.handleChangeMark} className="form-control" id="carBrand" aria-describedby="emailHelp" required />
                    </div>
                    <div className="form-group">
                        <label>Model</label>
                        <input type="model" name="model" onChange={this.handleChangeModel}  className="form-control" id="carModel" aria-describedby="emailHelp"required />
                    </div>
                    <div className="form-group">
                        <label>Color</label>
                        <select className="form-control form-control-lg " name="color" onChange={this.handleChangeColor} >
                            {this.state.colors.map(color => <option>{color}</option>)}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2" >Add car</button>
                </form>
            </div>
        );
    }
}

export default CarsForm;