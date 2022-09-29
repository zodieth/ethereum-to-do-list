// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

contract TasksContract {
  constructor() {
    createTask("Tarea de ejemplo", "descriccion de ejemplo");
  }

  uint256 public id = 0;

  struct Task {
    uint256 id;
    string title;
    string description;
    bool done;
    uint256 createdAt;
  }

  mapping(uint256 => Task) public tasks;

  function createTask(string memory _title, string memory _description) public {
    id++;
    tasks[id] = Task(id, _title, _description, false, block.timestamp);
  }

  function toggleDone(uint256 _id) public {
    Task memory _tasks = tasks[_id];
    _tasks.done = !_tasks.done;
    tasks[_id] = _tasks;
  }
}
