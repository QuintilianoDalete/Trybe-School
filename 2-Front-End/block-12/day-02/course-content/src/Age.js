import React, { Component } from 'react';

class Age extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if(value > 100) error = "Congratulations, you should have a lot of experience";

    return(
      <label>
        Age
        <input 
          type="number" 
          name="age" 
          value={value}
          onChange={handleChange}
        />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Age;
