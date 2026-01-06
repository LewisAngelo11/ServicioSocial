import { Sequelize } from 'sequelize';

const sequelize = new Sequelize ('activeclassroom', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize