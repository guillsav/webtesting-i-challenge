module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  const newItem = Object.create(item);
  let {enhancement} = newItem;
  enhancement < 20 ? enhancement++ : 20;
  return {...newItem, enhancement};
}

function fail(item) {
  const newItem = Object.create(item);
  let {enhancement, durability} = newItem;

  if (enhancement > 16) {
    durability -= 1;
  } else if (enhancement >= 15) {
    durability -= 10;
  } else if (enhancement < 15) {
    durability -= 5;
  }
  return {...newItem, durability};
}

function repair(item) {
  const newItem = Object.create(item);
  newItem.durability = 100;
  return {...newItem};
}

function get(item) {
  const newItem = Object.create(item);
  let {enhancement, name} = newItem;
  if (enhancement > 0) {
    name = `[+${enhancement}] ${name}`;
  } else {
    name = `${name}`;
  }
  return {...newItem, name};
}
