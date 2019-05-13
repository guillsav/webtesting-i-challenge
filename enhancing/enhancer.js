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
  const newItem = Object.create(item);

  if (newItem.enhancement > 16) {
    newItem.durability = newItem.durability - 1;
  } else if (newItem.enhancement >= 15) {
    newItem.durability = newItem.durability - 10;
  } else {
    newItem.durability = newItem.durability - 5;
  }
  return {...newItem};
}

function repair(item) {
  const newItem = Object.create(item);
  newItem.durability = 100;
  return {...newItem};
}

function get(item) {
  const newItem = Object.create(item);
  if (newItem.enhancement > 0) {
    newItem.name = `[+${newItem.enhancement}] ${newItem.name}`;
  } else {
    newItem.name = newItem.name;
  }
  return {...newItem};
}
