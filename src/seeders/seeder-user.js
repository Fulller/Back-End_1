'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // roleId: DataTypes.STRING,
    // phoneNumber: DataTypes.STRING,
    // positionId: DataTypes.STRING,
    // image: DataTypes.STRING,
    return queryInterface.bulkInsert('Users', [{
      email: 'phuocday@gmail.com',
      password: 'Vday1210#',
      firstName: 'Phuoc',
      lastName: 'Day',
      address: 'Viet Nam',
      gender: 1,
      roleId: 'ok',
      phoneNumber: '0968449574',
      image: 'http://abcxyz',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
