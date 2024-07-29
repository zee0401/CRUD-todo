import { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [dataList, setDataList] = useState(
    JSON.parse(localStorage.getItem("dataList")) || []
  );

  const handleEdit = (id, newValue) => {
    setDataList((prevDataList) =>
      prevDataList.map((data) =>
        data.id === id ? { ...data, task: newValue } : data
      )
    );
  };
  const handleDelete = (id) => {
    setDataList(dataList.filter((data) => data.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("dataList", JSON.stringify(dataList));
  }, [dataList]);

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Todo List</h1>
        <InputField
          inputValue={inputValue}
          setInputValue={setInputValue}
          setDataList={setDataList}
        />
        <TodoList
          dataList={dataList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
