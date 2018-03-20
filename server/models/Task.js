export default (sequelize, DataTypes) =>
  sequelize.define('Task', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    data: {
      type: DataTypes.STRING
    }
  });
