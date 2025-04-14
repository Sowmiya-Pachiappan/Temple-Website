import User from './userModel.js';
import Temple from './templeModel.js';
import UserTemple from './userTempleModel.js';

// Association for Users connected to many Temples and vice versa
User.belongsToMany(Temple, {
  through: UserTemple,
  foreignKey: 'userId',
  otherKey: 'templeId',
  as: 'connectedTemples',
});

Temple.belongsToMany(User, {
  through: UserTemple,
  foreignKey: 'templeId',
  otherKey: 'userId',
  as: 'connectedUsers',
});

// Association for User has one Temple as familyDevataMandir
User.belongsTo(Temple, {
  as: 'familyDevata',
  foreignKey: 'familyDevataMandir',
});

Temple.hasMany(User, {
  as: 'devotees',
  foreignKey: 'familyDevataMandir',
});

// Association for Member Reference
User.belongsTo(User, {
  as: 'Referrer',
  foreignKey: 'memberReference',
});

User.hasMany(User, {
  as: 'Referrals',
  foreignKey: 'memberReference',
});

export { User, Temple };
