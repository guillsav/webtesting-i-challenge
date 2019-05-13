module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  const newItem = Object.create(item);
  newItem.enhancement < 20 ? newItem.enhancement++ : 20;

  return {...newItem};
}

function fail(item) {
  return {...item};
}

function repair(item) {
  const newItem = Object.create(item);
  newItem.durability = 100;
  return {...newItem};
}

function get(item) {
  return {...item};
}
