import React , {Component} from 'react';
import './App.css';
// import Filters from "./Filters.js";
import Main from "./Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    }
  }

  render() {
    return(
      <div>
        <Main />
      </div>
    );
  }

}

export default App;
