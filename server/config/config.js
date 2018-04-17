export default {
  db: {
    database: process.env.DB_NAME || 'Todo_App',
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASS || 'password',
    options: {
      dialect: process.env.DIALECT || 'mssql',
      dialectOptions: {
        instanceName: `PRACTICE`
      },
      operatorsAliases: false,
      freezeTableName: true
    }
  }
}
