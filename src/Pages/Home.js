import { useNavigate } from "react-router-dom";

export default function Home({ GlobalState }) {
  const { toDoList, setToDoList, task, setTask, setChosenTask } = GlobalState;
  const navigate = useNavigate();

  const handleSubmit = () => {
    const id = toDoList.length + 1;
    setToDoList((prevState) => [...prevState, { id: id, task: task }]);
    setTask("");
  };

  const handleChooseTask = (e) => {
    console.log(e);
    setChosenTask(e);
    navigate("/chosen-task");
  };

  const handleDeleteTask = (e) => {
    const updatedList = toDoList.filter((task) => task.id !== e.id);
    setToDoList(updatedList);
  };

  return (
    <div className="home-page">
      <input
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="New task..."
      />
      <button onClick={() => handleSubmit()}>Submeter</button>
      <h2>To Do List:</h2>
      {toDoList.map((e) => (
        <div key={e.id}>
          <div className="task" onClick={() => handleChooseTask(e)}>
            {e.task}
          </div>
          <div onClick={() => handleDeleteTask(e)}>
            <button>
              <p>DELETE</p>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
