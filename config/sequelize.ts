
import { Sequelize } from 'sequelize';

const connectionString = 'postgresql://postgres:admin@localhost:5432/flashcard_db';
const sequelize = new Sequelize(connectionString);



export default sequelize;