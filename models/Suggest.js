const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Suggest extends Model {
    suggestModel = {
        formatDate: function() {
            return this.created_at.toLocaleDateString();
        }
    }
};

Suggest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        suggestion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Suggest'
    }
);

module.exports = Suggest;