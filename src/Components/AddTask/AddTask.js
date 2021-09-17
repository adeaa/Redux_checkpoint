import React from "react";
import { InputGroup, FormControl, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, filterTasks } from "../../state/action/taskAction";

function AddTask() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  var task = { description: "", isDone: false };

  const handleChange = (e) => {
    task.description = e.target.value;
  };
  const handleClick = (e) => {
    if (task.description !== " ".repeat(task.description.length)) {
      dispatch(addTask(task));
      e.target.previousElementSibling.value = "";
      task = { description: "", isDone: false };
    } else {
      alert("task can't be empty");
    }
  };

  const handleFilter = (e) => {
    dispatch(filterTasks(e.target.name));
  };
  return (
    <div>
      <InputGroup className="my-3 p-3 " size="lg">
        <FormControl
          placeholder="Enter Task"
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={(e) => handleClick(e)}
        >
          Add Task
        </Button>
        <Dropdown>
          <Dropdown.Toggle
            variant={
              filter === "none"
                ? "secondary"
                : filter === "done"
                ? "success"
                : "danger"
            }
            id="dropdown-basic"
          >
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item name="none" onClick={(e) => handleFilter(e)}>
              None
            </Dropdown.Item>
            <Dropdown.Item name="done" onClick={(e) => handleFilter(e)}>
              Done
            </Dropdown.Item>
            <Dropdown.Item name="notDone" onClick={(e) => handleFilter(e)}>
              Not Done
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </InputGroup>
    </div>
  );
}

export default AddTask;
