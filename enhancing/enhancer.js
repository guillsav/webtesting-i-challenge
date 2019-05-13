module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  let {enhancement} = item;
  enhancement < 20 ? enhancement++ : 20;
  return {...item, enhancement};
}

function fail(item) {
  let {enhancement, durability} = item;

  if (enhancement > 16) {
    durability -= 1;
  } else if (enhancement >= 15) {
    durability -= 10;
  } else if (enhancement < 15) {
    durability -= 5;
  }
  return {...item, durability};
}

function repair(item) {
  let {durability} = item;
  durability = 100;
  return {...item, durability};
}

function get(item) {
  let {enhancement, name} = item;
  enhancement > 0 ? (name = `[+${enhancement}] ${name}`) : (name = `${name}`);
  return {...item, name};
}
