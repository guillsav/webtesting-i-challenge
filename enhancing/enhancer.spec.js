const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
  const user = {
    name: 'new user',
    enhancement: 15,
    durability: 20
  };
  describe('repair() method', () => {
    it('Should take an object and return a new object with the durability restored to 100', () => {
      const newUser = enhancer.repair(user);
      expect(newUser).not.toBe(user);
      expect(newUser.durability).toBe(100);
    });
  });

  describe('succeed() method', () => {
    it('Should take an object, check if the enhancement is < 20 then return the enhancement +1 or equal 20', () => {
      const newUser = enhancer.succeed(user);
      expect(user.enhancement).not.toBe(20);
      expect(newUser.enhancement).toBe(16);
      expect(newUser.enhancement).not.toBe(user.durability);
    });
  });

  describe('fail() method', () => {
    it('Should take an object, check if the enhancement is < 15, then return the durability - 5 if enhancement < 15 or durability - 10 if enhancement >= 15', () => {
      const newUser = enhancer.fail(user);
      expect(newUser.durability).not.toBe(20);
      expect(newUser.durability).toBe(10);
    });
  });

  describe('get() method', () => {
    it('Should take an object and return the name including the enhancement level in the name only if enhancement > 0', () => {
      const newUser = enhancer.get(user);
      expect(newUser.name).toBe('[+15] new user');
    });
  });
});
