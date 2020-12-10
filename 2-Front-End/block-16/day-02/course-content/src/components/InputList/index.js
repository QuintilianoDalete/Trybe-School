// 7th application step: Component InputsList.js implementation: https://app.betrybe.com/course/front-end/redux/react-with-redux-part-1/conteudos/configurando-redux-com-react?use_case=previous_button

import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from '../../actions'; // Importing the action.

class InputsList extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { textValue: '' }; // 7th - Defining the textvalue internal state. Even using redux, if we have a state (like this one) that doesn't need to travel to other components, we can declare it internally.
  }

  render() {
    return ( // 7th - L16 - Creating an input to the user type the task which will be added. L19 - Each time the imput value changes, the value is stored in the state textValue.
      <div>
        <input 
          type="text"
          placeholder="Type a task"
          onChange={event => this.setState({ textValue: event.target.value })}
        />
        <button onClick={() => this.props.add(this.state.textValue)}>
          Add task  
        </button>  
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ // 8th - The function mapDispatchToProps it's the responsable for make a dispatch of an action to a reducer.
  add: e => dispatch(addAssignment(e))}); // 8th - We are naming a property add, that trigger the addAssignmet action dispatch with a paramenter.
// The unique way to sent an action to a reducer is through a dispatch
export default connect(null, mapDispatchToProps)(InputsList); // 9th - The connect give us access to the redux store.(native redux methods)(our component).
