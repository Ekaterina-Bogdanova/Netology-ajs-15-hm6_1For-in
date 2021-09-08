const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(character, order) {
  const massivProp = [];
  for (const prop in character) {
    if (prop in character) {
      massivProp.push({ key: prop, value: character[prop] });
    }
  }

  massivProp.sort((next, current) => {
    if (next.key < current.key) {
      return -1;
    }
    if (next.key > current.key) {
      return 1;
    }
    return 0;
  });

  if (order !== undefined) {
    order.reverse().forEach((item) => {
      const similarIndex = massivProp.findIndex((massivPropItem) => massivPropItem.key === item);
      massivProp.unshift(massivProp[similarIndex]);
      massivProp.splice(similarIndex + 1, 1);
    });
  }
  return massivProp;
}

orderByProps(obj, ['name', 'level']);
