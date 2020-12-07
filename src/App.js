import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskListContextProvider, { TaskListContext } from './context/TaskListContext';
const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
            <div className="main">
              <TaskForm />
            <TaskList/>
            </div>
        </div>

      </div>
    </TaskListContextProvider>
  )
}
export default App;
