
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import ChosenTask from './Pages/ChosenTask';

function App() {
  // hook variables
  const [toDoList, setToDoList] = useState([ { id: 1, task: 'go to bed' } ]);
  const [task, setTask] = useState('');
  const [chosenTask, setChosenTask] = useState({});

  // GlobalState
  const GlobalState = {
    toDoList, setToDoList,
    task, setTask,
    chosenTask, setChosenTask
  }

  // navigation
  return (
    <div className='app'>
      <Router>
        <Routes>

          <Route path='/' element={ <Home GlobalState={GlobalState} /> } />
          <Route path='/chosen-task' element={ <ChosenTask GlobalState={GlobalState} /> } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
