module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        len: [1]
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        len: [1]
      } 
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        len: [1]
      }
    }

  });

  User.associate = function(models) {
    User.hasMany(models.itineraries, {
      onDelete: 'CASCADE'
    });
  };
  return User;
};
