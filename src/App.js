import "./styles.css";
import React, { Component } from "react";
// import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updateList = list.filter((item) => item.id !== id);
    this.setState({ list: updateList });
  }
  render() {
    return (
      <div className="App">
        <div>
          <h4>Todo App</h4>
          <br />
          <input
            type="text"
            placeholder="Type something"
            value={this.state.newItem}
            maxLength={30}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add Task</button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
