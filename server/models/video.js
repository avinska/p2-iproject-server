'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.belongsToMany(models.User, {
      through: models.Like,
      foreignKey: 'videoId'
    })
    }
  }
  Video.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title is required'
        },
        notEmpty: {
          msg: 'Title is required'
        },
      }
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Video Link is required'
        },
        notEmpty: {
          msg: 'Video Link is required'
        },
      }
    },
    channel: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Channel is required'
        },
        notEmpty: {
          msg: 'Channel is required'
        },
      }
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Views is required'
        },
        notEmpty: {
          msg: 'Views is required'
        },
      }
    },
    dateUpload: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Upload Date is required'
        },
        notEmpty: {
          msg: 'Upload Date is required'
        },
      }
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Verified status is required'
        },
        notEmpty: {
          msg: 'Verified status is required'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};