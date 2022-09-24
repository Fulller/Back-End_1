'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'phuocday@gmail.com',
      password: 'Vday1210#',
      firstName: 'Phuoc',
      lastName: 'Day',
      address: 'Viet Nam',
      gender: 1,
      roleId: 'OK',
      phoneNumber: '0968449574',
      positionId: 'An Giang',
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
