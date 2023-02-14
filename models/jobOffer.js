const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class JobOffer extends Model {}

JobOffer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        offer_price: {
            type: DataTypes.DECIMAL(10,4),
            allowNull: false
        }
    }, 
{
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'job_offer'
}
);

module.exports = JobOffer;