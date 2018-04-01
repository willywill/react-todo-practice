import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import tasks from './routes/tasks';
import { sequelize } from './models';

const port = process.env.PORT || 8081;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api', tasks);

sequelize.sync({force: false}).then(() => {
  app.listen(port, () => console.log(`Server started on port ${port}.`));
});
