import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import {
  deleteTask,
  editTask,
  toggleDone,
} from "../../state/action/taskAction";

function Task({ deleteTask, toggleDone, editTask, task, pos }) {
  let [editing, setEditing] = useState(false);
  var newTask = "";
  const onEdit = () => {
    setEditing(true);
    newTask = "";
  };
  const handleEdit = () => {
    if (newTask === " ".repeat(newTask.length)) {
      alert("task can't be empty");
    } else {
      editTask(pos, newTask);
      setEditing(false);
    }
  };

  return (
    <div>
      <div
        className={`border rounded m-4 d-flex align-items-center border-${
          task.isDone ? "success border-2" : "secondary"
        }`}
      >
        {editing ? (
          <>
            <FormControl
              className="p-3 me-auto"
              placeholder="edit task"
              onChange={(e) => (newTask = e.target.value)}
            />
            <button
              className="btn btn-outline-secondary m-2"
              onClick={() => setEditing(false)}
            >
              cancel
            </button>
            <button
              className="btn btn-outline-primary m-2"
              onClick={() => handleEdit()}
            >
              edit
            </button>
          </>
        ) : (
          <>
            <h4
              className={
                task.isDone
                  ? "p-3 text-decoration-line-through me-auto"
                  : "p-3 me-auto"
              }
            >
              {task.description}
            </h4>
            <button
              className="btn btn-success m-2"
              onClick={() => toggleDone(pos)}
            >
              {task.isDone ? "undo" : "done"}
            </button>
            <button className="btn btn-primary" onClick={() => onEdit()}>
              edit
            </button>
            <button
              className="btn btn-danger m-2"
              onClick={() => deleteTask(pos)}
            >
              delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (index) => dispatch(deleteTask(index)),
    toggleDone: (index) => dispatch(toggleDone(index)),
    editTask: (position, newTask) => dispatch(editTask(position, newTask)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
