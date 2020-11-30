// In this exercise I am using the concepts of React Router and using links to navegate through the pages.
// Video 4 - 8``42``` - We can use Route to render components with props. Using a call back in the render propertie from Route, we can make many parameters and informations generetad by the route go to our component. We can pass props to our components and URL parameters, browser historic and other informations. 
import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={About} /> {/* In this line we are saying: If I navegate to the 'path' render this 'component' */}
        <Route path="/howto" component={HowTo} />
        <Route path="/profile/:anyParameterName" render={(props) => <Profile {...props} name="The test worked really well!!!"/>} /> {/* Passing a prop 'name' to our profile. In order to do it, instead of using 'component' we`ll use 'render' and pass a callback which will return the rendered component. In this way we can pass our prop 'name' inside the component. The 'props' passed as a paramether of the callback function It`s being passed from the Route to our component. This 'props' is an array of props. We pass this array of props to our component with spread operator '...' (As well we use spread operator when we are creating an array starting from another array). '{...props}' - In this way we are passing all Route props to our component, we`ll have access to 3 great props: history, location and match. History will pass the user navigation history. Whith the match we pass parameters through the URL. To make it happen we add the following sintax to the path: '/:anyPatameternName', it means that it will arrive to our component as 'anyParameternName'. */}
        <Route exact path="/" component={Home} /> {/* We use the 'exact' to grant that just a component with a exact path will be rendered */}
    </BrowserRouter>
  );
}

export default App;
