'use strict';

class Level {
  constructor(size) {
    this.fieldSize = size;
  }

  createField() {
    const field = [];

    for (let y = 0; y < this.fieldSize; y++) {
      const row = [];
      for (let x = 0; x < this.fieldSize; x++) {
        row.push('0');
      }
      field.push(row);
    }

    return field;
  }

  displayField(arrayField) {
    let displayField = '';

    for (let row = 0; row < arrayField.length; row++) {
      let rowStr = '<tr>';
      for (let cell = 0; cell < arrayField.length; cell++) {
        rowStr += '<td></td>';
      }
      rowStr += '</tr>';
      displayField += rowStr;
    }

    return `<table>${displayField}</table>`;
  }
}

class Computer {
  constructor(compField) {
    this.field = compField;
  }

  createShip(size) {
    const ship = [];

    const x = Math.floor(Math.random() * this.field.length);
    const y = Math.floor(Math.random() * this.field.length);
    const dir = Math.floor(Math.random() * 2);

    for (let i = 0; i < size; i++) {
      if (dir === 0) {
        if (x < this.field.length/2) {
          ship.push({x: x + i, y: y});
        } else {
          ship.push({x: x - i, y: y});
        }
      } else {
        if (y < this.field.length/2) {
          ship.push({x: x, y: y + i});
        } else {
          ship.push({x: x, y: y - i});
        }
      }
    }

    return ship;
  }

  placeShip(ship) {
    let flag = true;

    function isIntersect(field, ship) {
      let flag = true;

      ship.forEach(block => {
        if (field[block.y][block.x] === '1' || field[block.y][block.x] === '2') {
          flag = false;
        }
      });

      return flag;
    }

    if (isIntersect(this.field, ship)) {
      if (ship.length > 1) {
        if (ship[0].y === ship[1].y) {
          
        }

        if (ship[0].x === ship[1].x) {

        }
      } else {
        this.field[ship[0].y][ship[0].x] = '2';

        if (ship[0].y === 0 && ship[0].x === 0) {
          this.field[ship[0].y][ship[0].x + 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
          this.field[ship[0].y + 1][ship[0].x + 1] = '1';
        } else if (ship[0].y === 0 && ship[0].x === 9) {
          this.field[ship[0].y][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
        } else if (ship[0].y === 9 && ship[0].x === 9) {
          this.field[ship[0].y - 1][ship[0].x - 1] = '1';
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y][ship[0].x - 1] = '1';
        } else if (ship[0].y === 9 && ship[0].x === 0) {
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y - 1][ship[0].x + 1] = '1';
          this.field[ship[0].y][ship[0].x + 1] = '1';
        } else if (ship[0].x === 0) {
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y - 1][ship[0].x + 1] = '1';
          this.field[ship[0].y][ship[0].x + 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
          this.field[ship[0].y + 1][ship[0].x + 1] = '1';
        } else if (ship[0].x === 9) {
          this.field[ship[0].y - 1][ship[0].x - 1] = '1';
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
        } else if (ship[0].y === 0) {
          this.field[ship[0].y][ship[0].x - 1] = '1';
          this.field[ship[0].y][ship[0].x + 1] = '1';
          this.field[ship[0].y + 1][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
          this.field[ship[0].y + 1][ship[0].x + 1] = '1';
        } else if (ship[0].y === 9) {
          this.field[ship[0].y - 1][ship[0].x - 1] = '1';
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y - 1][ship[0].x + 1] = '1';
          this.field[ship[0].y][ship[0].x - 1] = '1';
          this.field[ship[0].y][ship[0].x + 1] = '1';
        } else {
          this.field[ship[0].y - 1][ship[0].x - 1] = '1';
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y - 1][ship[0].x + 1] = '1';
          this.field[ship[0].y][ship[0].x - 1] = '1';
          this.field[ship[0].y][ship[0].x + 1] = '1';
          this.field[ship[0].y + 1][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
          this.field[ship[0].y + 1][ship[0].x + 1] = '1';
        }

      }
    } else {
      flag = false;
    }

    return flag;
  }

  getComputerField() {
    return this.field;
  }
}

class Player {

}

function main() {
  const level = new Level(10);
  const field = level.createField();

  const computer = new Computer(field);
  const cShip4 = computer.createShip(1);
  computer.placeShip(cShip4);

  console.log(computer.getComputerField());

  const root = document.getElementById('root');
  root.innerHTML = level.displayField(field);
}
main();
