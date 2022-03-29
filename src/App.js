import "./styles.css";
import Todo from "./todo.js";
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
      value: this.state.newItem.slice() + " " + time()
    };

    if (this.state.newItem === "") {
      alert("You cannot enter an empty todo item!");
      // document.write("You cannot enter an empty todo item!");
    } else {
      const list = [...this.state.list];

      list.unshift(newItem);

      this.setState({
        list,
        newItem: ""
      });
      // list.concat(Date())
    }
  }

  keyPressed(e) {
    if (e.code === "Enter") {
      this.addItem();
    }
    //  console.log(e.code);
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
            {/* {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {/* {item.value + Date()} /}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Delete
                  </button>
                </li>
              );
            })} */}
            {this.state.list.map((item, list) => {
              return (
                <Todo
                  key={item.id}
                  item={item.value}
                  // time={Date()}
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
