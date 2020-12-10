// 7th application step: Component InputsList.js implementation: https://app.betrybe.com/course/front-end/redux/react-with-redux-part-1/conteudos/configurando-redux-com-react?use_case=previous_button

import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from './actions';

class InputsList extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { textValue: '' }; // 7th - Defining the textvalue internal state. Even using redux, if we have a state (like this one) that doesn't need to travel to other components, we can declare it internally.
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          placeholder="Type a task"
          onChange={event => this.setState({ textValue: event.target.value })} {/* 7th - Each time the imput value changes, the value is stored in the state textValue. */}
        />
        <button onClick={() => this.props.add(this.state.textValue)}>
          Add task  
        </button>  
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))});

export default connect(null, mapDispatchToProps)(InputsList);
