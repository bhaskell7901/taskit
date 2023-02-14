const { Model, DataTypes } = require ('sequelize');
const bcrypt = require ('bcrypt');
const sequelize = require ('../config/connection');


class User extends Model{
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate : {
                isEmail: true
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 32]
            },
        },
        view_preference: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },   
{
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate: async (updateUserData) => {
            updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
            return updateUserData;
        },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  
}
);
module.exports = User;