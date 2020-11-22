// This application brings a joke and when we click in the button it saves our joke in a list and bings another joke. Each time we click in this button we save the last joke in the list and brings another one.
// Content: Life cicle, how to pass an API call to the didMout component in order to have API data as soon as our page finishes to be mounted, how to make a conditional rendering, how to actualize a state value which is an array based on the value of the previous array and how to make a loading logic, a logic where we condition our rendering to a requisition finishing to be done.
import React, {Component} from 'react';

class DadJoke extends Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this); // In our constructor we make the bind of the functions which we created.
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = { // Our initial states.
      jokeObj: undefined, // Most recent joke.
      loading: true, // Loading key.
      storedJokes: [], // Our joke array.
    };
  }

  async fetchJoke() { // Fetch logic. This function gets the joke from the API asynchronously. When we use 'await' inside the function, we must use 'async' outside it.
    this.setState( // In this function we are saying that the joke is loading and just after the rendering we gonna render the joke. In this way while loading the joke will appear 'loading...'. Our setState is receiving 2 parameters. The first one is the state actualization. This actualization is asynchronous. In the second parameter, we want that this logic happens just after the acctualization be done.
      {loading: true}, // First setState parameter. State actualization. When loading is true, anything will be rendered, until the state be ready.
      async () => { // The second parameter is a call back. Inside it we`ll return basically everything we want.
        const requestHeaders = { headers: { Accept: 'application/json'} } // Creating an object to our requisition headers. Whith the key 'headers' and the key 'Accept' and the value 'application/json'. This sitax come from the API endpoit documentation (https://icanhazdadjoke.com/api), it is basically the key 'Accept' and the value 'application/json' in our headers.
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders) // The fetch will return a promisse and we can above this promisse run a function named .json (line 23). In this line we passed the 'Headers' as well.
        const requestObject = await requestReturn.json() // This function will return a JS object with the requisition return. This function is a promisse (when we use fetch we use .then, here we are doing the same with async/ await).
        this.setState({ // Now we take the joke recovered in the line above (l 23) and throws it in our state.
          loading: false, // When our loading become false it will render the joke on the line 66. Just when our state being actualized our component will be rendered.
          jokeObj: requestObject
        })
      })
  }

  componentDidMount() { // We want that during the page assembly stage to take a joke in order that this joke appears on the screen in the beggining of the components life. In this way, when the page is loaded we take a joke and throws it inside our state.
    this.fetchJoke() // The function componentDidMount it`s a exelent place to we make API requisitions. Because it is in the page assembly stage and it isnt inside the render() nor the contructor() function.
  }

  saveJoke() { // In this function when we click on the button 'save joke' we want to take the current joke from the jokeObj and save it in our joke array.
  this.setState(({ storedJokes, jokeObj }) => ({ // Object disrupting.
    storedJokes: [...storedJokes, jokeObj] // When we use the spread operator (...) we are taking the array content and spreads it inside the new array. We are constructing an array whith all information of the old plus the new array. When we want to actualize  a state which is an array based on the previous state we use spread operator.
  }))
  
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p> {/* It will render the most recent joke, whick is saved in the state */}
        <button type="button" onClick={this.saveJoke}> {/* This button will make our joke be saved in our list */}
          Save joke!
        </button>
      </div>
    )
  }

  render() {
    const { storedJokes, loading } = this.state /* This information came from the state. We disrupted it to use in the line 49. */
    const loadingElement = <span>Loading...</span>
    console.log('Rendered') // Between the we call the joke and it appears, the render() runs twice. The first one when the load runs and the second one when the joke arrives. 
    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))} {/* This function will interate over the jokes that are saved in our joke array. * 'StoresJokes' is equal to 'this.state.StoredJokes', however we disrupted it on the line 43. * '.map(({ id, joke }))' is equal to '.map((jokeObj))', however instead of get the object which is inside each array item, we did a disruption in order to get the 'id' and the 'joke' in a straight way. * '(<p key={id}>{joke}</p>)' here we are making a dinamic list based on ouw array, which the content is the '{joke}' and the key is the '{id}'. We use the 'key' in order to help the React to Render the page in a efficient way */}
        </span>

        <span>{loading ? loadingElement : this.renderJokeElement()}</span> {/* Now we`ll have a conditional redering. When we got to render the loading and when wi`ll render the joke. When we have a component in our screen which will have a different apearence depending on our application state the do it in this way. Here we decide if the 'jokeObj' is defined the joke will be rendered (jokeObjs ? jokeObj.joke) if not (:) the loading element will be rendered */}

      </div>
    );
  }
}

export default DadJoke;





















