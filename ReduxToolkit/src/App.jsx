import "./App.css";
import TodoList from "./components/TodoList";
import InputForm from "./components/inputForm";

function App() {
  return (
    <div className="border w-4/5 m-auto">
      <div className="text-3xl w-1/2 m-auto text-center  p-2">
        <h1>redux toolkit</h1>
      </div>
      <div className=" mt-6 w-4/5 m-auto">
        <InputForm />
      </div>
      <div className="p-3 mt-6 w-4/5 m-auto text-center text-3xl mb-4 bg-blue-100">
        <h1 className="mb-5 p-2 text-black">My Todos</h1>

        <TodoList />
      </div>
    </div>
  );
}

export default App;
