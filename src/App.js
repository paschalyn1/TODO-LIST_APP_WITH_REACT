import "./styles.css";
import Todo from "./todo.js";
import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      newItem: "",
      list: []
    };
  }
  setState(state) {
    window.localStorage.setItem("state", JSON.stringify(state));
    super.setState(state);
  }
  updateInput(e) {
    this.setState({
      newItem: e.target.value
    });
  }

  addItem() {
    function time() {
      const getTime = Date();
      return getTime;
    }
    const newItem = {
      id: Date.now(),
      value: this.state.newItem.slice() + " -------- time:(" + time()
    };

    if (this.state.newItem === "") {
      alert("You cannot enter an empty todo item!");
    } else {
      const list = [...this.state.list];

      list.unshift(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  keyPressed(e) {
    if (e.code === "Enter") {
      this.addItem();
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updateList = list.filter((item) => item.id !== id);
    this.setState({ list: updateList });
  }

  clearAllItems() {
    this.setState({ list: [] });
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
            maxLength={100}
            onKeyPress={(e) => this.keyPressed(e)}
            onChange={(e) => this.updateInput(e)}
          />
          <button onClick={() => this.addItem()}>Add Task</button>
          <br />
          <ul>
            {this.state.list.map((item, list) => {
              return (
                <Todo
                  key={item.id}
                  item={item.value}
                  deleteItem={() => this.deleteItem(item.id)}
                />
              );
            })}
          </ul>
          <button onClick={() => this.clearAllItems()}>
            Clear all to-do items
          </button>
        </div>
      </div>
    );
  }
}

export default App;
