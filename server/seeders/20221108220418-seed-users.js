'use strict';
const { hashPassword } = require('../helpers/index');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = [
    {
      email: 'abins@mail.com',
      password: hashPassword('abins'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'meong@mail.com',
      password: hashPassword('meong'),
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ]
    await queryInterface.bulkInsert('Users', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
