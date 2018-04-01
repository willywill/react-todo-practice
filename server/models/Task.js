export default (sequelize, DataTypes) =>
  sequelize.define('Task', {
    taskDescription: {
      type: DataTypes.STRING
    }
  });
