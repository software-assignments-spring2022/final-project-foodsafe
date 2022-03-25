import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = ["Dairy", "Eggs", "Tree Nuts", "Peanuts", "Shellfish", "Wheat", "Soy", "Fish"];

class allergy extends Component {
    state = {
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        )
    };

selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [checkbox]: isSelected
            }
        }));
    });
};

selectAll = () => this.selectAllCheckboxes(true);

deselectAll = () => this.selectAllCheckboxes(false);

handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
        checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
        }
    }));
};

handleFormSubmit = formSubmitEvent => {
    /*formSubmitEvent.preventDefault();
    Object.keys(this.state.checkboxes)
    .filter(checkbox => this.state.checkboxes[checkbox])
    .forEach(checkbox => {
        console.log(checkbox, "is selected.");
    });
    this.props.history.push('/');*/
};

createCheckbox = option => (
    <Checkbox
    label={option}
    isSelected={this.state.checkboxes[option]}
    onCheckboxChange={this.handleCheckboxChange}
    key={option}
    />
);

createCheckboxes = () => OPTIONS.map(this.createCheckbox);

render() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12">
                    <form onSubmit={this.handleFormSubmit} action="/groc_list">
                        {this.createCheckboxes()}

                        <div className="form-group mt-2">
                            <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            onClick={this.selectAll}
                            >
                                Select All
                            </button>
                            <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            onClick={this.deselectAll}
                            >
                                Deselect All
                            </button>
                            <a href='/groc_list'>
                            <button  component="a" href="/sign_in" className="btn btn-primary">
                                Continue
                            </button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

}//end class component

export default allergy;