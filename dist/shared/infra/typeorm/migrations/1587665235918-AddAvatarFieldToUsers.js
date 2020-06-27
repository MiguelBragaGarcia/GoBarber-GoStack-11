"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddAvatarFieldToUsers1587665235918 = void 0;

var _typeorm = require("typeorm");

class AddAvatarFieldToUsers1587665235918 {
  async up(queryRunner) {
    await queryRunner.addColumn('users', new _typeorm.TableColumn({
      name: 'avatar',
      type: 'varchar',
      isNullable: true
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn('users', 'avatar');
  }

}

exports.AddAvatarFieldToUsers1587665235918 = AddAvatarFieldToUsers1587665235918;