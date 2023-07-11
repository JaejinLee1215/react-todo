import Wrapper from "./components/wrapper/Wrapper";
import "./App.css";
import DateComponent from "./components/date/DateComponent";
import Week from "./components/week/Week";
import TodoList from "./components/todo-list/Todo-list";


function App() {
  return (
    <div className="App">
      <Wrapper>
        <div className="App-inner-date">
        <DateComponent />
        <Week />
        </div>
        <TodoList />
      </Wrapper>
    </div>
  );
}

export default App;
