import React from "react";

const InputField = ({ inputValue, setInputValue, setDataList }) => {
  const handleClick = () => {
    const addTodo = (prevDataList) => [
      ...prevDataList,
      { id: prevDataList.length + 1, task: inputValue },
    ];
    setDataList(addTodo);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="input-container">
      <label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add Todo"
          onKeyDown={handleKeyDown}
          className="input-field"
        />
      </label>
      <button className="button" onClick={handleClick}>
        Add Todo
      </button>
    </div>
  );
};

export default InputField;
