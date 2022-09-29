const TasksContracts = artifacts.require("TasksContract");

module.exports = (deployer) => {
  deployer.deploy(TasksContracts);
};
