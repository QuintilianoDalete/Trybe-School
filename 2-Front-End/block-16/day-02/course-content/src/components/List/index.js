import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render () {
    return ( // 10th - Performing a map with the elements in the array list, this array is in the props.
      <div>
        <div>
          {this.props.list.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ // 11th - This function maps the entities stored in the states to a props.
  list: state.listReducer}); // 11th - We want to access the data provided by the reducer listReducer, so it's just access the state path with the reducer and name a prop to receive it (in this case we name it list).

export default connect(mapStateToProps)(List); // 11th - Conecting the Redux with the component, using the connect.(mapStateToProps)(ourComponent) - In this case it works because we are doing just data reading.
