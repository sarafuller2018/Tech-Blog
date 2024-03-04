// brings in built-in model from sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// creates blogpost model
class Comments extends Model {}

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: 1,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
          blogpost_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'blogpost',
              key: 'id',
            },
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
      }
);

// exports to allow access
module.exports = Comments;