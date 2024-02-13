import {Sequelize} from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Product = db.define('products', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Product;