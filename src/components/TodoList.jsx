import { useState } from "react";

const TodoList = ({ dataList, handleEdit, handleDelete }) => {
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleSave = (id) => {
    handleEdit(id, editValue);
    setEditId(null);
    setEditValue("");
  };

  return (
    <div className="list-container">
      {dataList.map((list) => {
        const isEditing = editId === list.id;

        return (
          <div key={list.id} className="list-item">
            {isEditing ? (
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="edit-input"
              />
            ) : (
              <p>{list.task}</p>
            )}
            <div>
              {isEditing ? (
                <button
                  className="button save-button"
                  onClick={() => handleSave(list.id)}
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    className="button edit-button"
                    onClick={() => {
                      setEditId(list.id);
                      setEditValue(list.task);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="button delete-button"
                    onClick={() => handleDelete(list.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
