import React, { Component } from "react";
import Character from "./Character";
import Filters from "./Filters";
import Api from "./Api";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      allCharacters: [],
      characters: [],
      searchText: "",
      filterText: []
    };
  }

  componentDidMount() {
    Api.get("/").then(response => {
      this.setState({
        isLoaded: true,
        allCharacters: response.data.results,
        characters: response.data.results
      });
    });
    this.searchUpdate = this.searchUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchText: event.target.value
    });
    this.searchUpdate();
  }

  searchUpdate() {
    if (this.state.searchText) {
      const searchedCharacters = this.state.allCharacters.filter(character => {
        return character.name
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase());
      });
      this.setState({
        characters: searchedCharacters
      });
    } else {
      this.setState({
        characters: this.state.allCharacters
      });
    }
  }

  handleFilter(event, subscriber) {
    const filterItems = this.state.filterText;
    if (event.target.checked) {
      filterItems.push(event.target.value.toLowerCase());
    } else {
      const index = filterItems.indexOf(event.target.value);
      filterItems.splice(index, 1);
    }
    this.setState({
      filterText: filterItems
    });

    this.applyFilter(subscriber);
  }

  applyFilter(subscriber) {
    if (this.state.filterText.length === 0) {
      this.setState({
        characters: this.state.allCharacters
      });
    } else {
      const filteredCharacters = this.state.allCharacters.filter(character => {
        if (!character[subscriber].name) {
          return (
            this.state.filterText.indexOf(
              character[subscriber].toLowerCase()
            ) >= 0
          );
        } else {
          return (
            this.state.filterText.indexOf(
              character[subscriber].name.toLowerCase()
            ) >= 0
          );
        }
      });
      this.setState({
        characters: filteredCharacters
      });
    }
  }

  render() {
    let { isLoaded, characters, filterText } = this.state;
    if (!isLoaded) {
      return <div> Loading.....</div>;
    } else {
      const characterComponent = characters.map(character => (
        <Character key={character.id} item={character} />
      ));

      let filterVisibility = "hidden";
      let filters = [];
      if (filterText.length > 0) {
        filters = filterText.map(filter => {
          return <button key={filter}>{filter}</button>;
        });
        filterVisibility = "show";
      }

      return (
        <div>
          <Filters handleFilter={this.handleFilter} />
          <div className="filterGrid">
            <div className={filterVisibility}>
              <p>Selected Filters</p>
              {filters}
            </div>
            <label> Search by name </label> <br />
            <input
              className="textBox"
              type="text"
              value={this.state.searchText}
              onChange={this.handleChange}
            />
          </div>
          <div className="contacts">{characterComponent}</div>
        </div>
      );
    }
  }
}

export default Main;
