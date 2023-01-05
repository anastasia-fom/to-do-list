import React from 'react';
import Item from "./components/Item";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      toDoList:[],
      inputValue:" ",
    }
  }
  addItem = () => {
    const item= {
      itemIndex: Math.floor(Math.random() * 100),
      text: this.state.inputValue,
      isDone: false,
    }

    this.setState((prevState) => {
      const newToDoList = prevState.toDoList.slice()
      newToDoList.push(item)
      return{
        ...prevState,
        toDoList: newToDoList,
      }
    })
  }
  addInputValue = (event) => {
    this.setState({inputValue:event.target.value})
  }

  deleteItem = (event) => {
    this.setState((prevState) => {
      const newToDoList = prevState.toDoList.slice();
      const findIndex = newToDoList.findIndex((element) => element.key === event.target.key);
      newToDoList.splice(findIndex, 1);
      return{
        ...prevState,
        toDoList: newToDoList,
      }
    })
  }

  checkedItem = (event) => {
    this.setState((prevState) => {
      const newToDoList = prevState.toDoList.map((element) => {return {...element};});
      const indexItem = prevState.toDoList.findIndex((element) => element.key === event.target.dataset["key"]);
      newToDoList[indexItem].isDone = !newToDoList[indexItem].isDone;
      console.log(newToDoList);
      console.log('Index',indexItem);
      return{
        ...prevState,
        toDoList: newToDoList
      }
    })
  }

  render (){
    return (
        <div className="todo-list">
          <h1>To do list</h1>

          <div className="todo-list__enter">
            <label>
              <input type="text"
                     placeholder={"Enter please to do"}
                     onChange={this.addInputValue}
                     value={this.state.inputValue}>
              </input>
            </label>

            <button className="submit-btn" onClick={this.addItem}>Submit</button>
          </div>

          <ul>
            {this.state.toDoList.map((element)=>{
              return (
                  <Item
                      data={element.text}
                      element={element}
                      key={Math.floor(Math.random() * 1000)}
                      deleteItem={this.deleteItem}
                      checkedItem={this.checkedItem}
                  />
              )
            })}
          </ul>
        </div>
    );
  }
}

export default App;
