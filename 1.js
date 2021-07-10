/****************************************************************
Описание
	Вам дается квадратная сетка с обычными `.` и заблокированными `X` ячейками. 
  Ваша игровая фигура может перемещаться по любой строке или столбцу или диагонали, пока не достигнет края сетки или заблокированной ячейки. 
  Учитывая сетку, начальную и конечную позиции, определите количество ходов, чтобы добраться до конечной позиции.

Например
	Дана сетка:
  .X.
  .X.
  ...
  
  Система координаты для данной сетки:
  0.0 0.1 0.2
  1.0 1.1	1.2
  2.0	2.1	2.2

  Начальна позиция 2.1 (отсчет идет с верхнего левого края сетки 0.0)
  Конечная позиция 0.2
  
  Путь движения между точками: (2.1) -> (1.2) -> (0.2)
  Ответ: необходимо выполнить 2 шага.

	Задача
  	Завершите выполнение функции в редакторе. Функция должена вывести целое число, обозначающее минимальное количество шагов для перехода от начальной позиции к конечной.
    
  Ограничения
  	Длина сетки > 1 и < 100
    Координата начальной и конечной точки входит в предоставленную сетку.
  	
****************************************************************/

function minWalk(gridList, startX, startY, endX, endY) {
  const gridArr = gridList.map((el) => el.split(""));
  const startPoint = gridArr[startX][startY];
  const endPoint = gridArr[endX][endY];
  let count = 0;

  let x = startX;
  let y = startY;
  let d = 0;
  gridArr[x][y] = "f";
  // const gridListItem = { x, y, d: count };
  const allGridListItems = [];

  if (gridList.length <= 1 || gridList.length >= 100) {
    return console.log("Grid list doesn't match the condition");
  }
  if (startPoint === "X") {
    return console.log("Start point locked");
  }
  if (endPoint === "X") {
    return console.log("End point locked");
  }

  const moveUp = () => {
    if (gridArr[x - 1] === undefined) return;
    if (gridArr[x - 1][y] === "f") return;

    x -= 1;
    d += 1;
    if (gridArr[x][y] !== "X" && gridArr[x][y] !== undefined) {
      gridArr[x][y] = "f";
      allGridListItems.push({ x, y, d });
    }
    x += 1;
    d -= 1;
  };

  const moveUpRight = () => {
    if (gridArr[x - 1] === undefined || gridArr[x][y + 1] === undefined) return;
    if (gridArr[x - 1][y + 1] === "f") return;
    x -= 1;
    y += 1;
    d += 1;
    if (gridArr[x][y] !== "X" && gridArr[x][y] !== undefined) {
      gridArr[x][y] = "f";
      allGridListItems.push({ x, y, d });
    }
    x += 1;
    y -= 1;
    d -= 1;
  };

  const moveRight = () => {
    if (gridArr[x][y + 1] === undefined) return;
    if (gridArr[x][y + 1] === "f") return;
    y += 1;
    d += 1;
    if (gridArr[x][y] !== "X" && gridArr[x][y] !== undefined) {
      gridArr[x][y] = "f";
      allGridListItems.push({ x, y, d });
    }
    y -= 1;
    d -= 1;
  };
  const moveDownRight = () => {
    if (gridArr[x + 1] === undefined) return;
    if (gridArr[x + 1] === "f") return;
    x += 1;
    y += 1;
    d += 1;

    if (gridArr[x][y] !== "X" && gridArr[x][y] !== undefined) {
      gridArr[x][y] = "f";
      allGridListItems.push({ x, y, d });
    }
    x -= 1;
    y -= 1;
    d -= 1;
  };
  const moveDown = () => {
    if (gridArr[x + 1] === undefined) return;
    if (gridArr[x + 1] === "if") return;
    x += 1;
    d += 1;
    if (gridArr[x][y] !== "X" && gridArr[x][y] !== undefined) {
      gridArr[x][y] = "f";
      allGridListItems.push({ x, y, d });
    }
    x -= 1;
    d -= 1;
  };
  const moveDownLeft = () => {
    if (gridArr[x + 1] === undefined || gridArr[x][y - 1] === undefined) return;
    if (gridArr[x + 1][y - 1] === "f") return;
    x += 1;
    y -= 1;
    d += 1;
    if (gridArr[x][y] !== "X" && gridArr[x][y] !== undefined) {
      gridArr[x][y] = "f";
      allGridListItems.push({ x, y, d });
    }
    x -= 1;
    y += 1;
    d -= 1;
  };
  const moveLeft = () => {
    if (gridArr[x][y - 1] === undefined) return;
    if (gridArr[x][y - 1] === "f") return;
    y -= 1;
    d += 1;
    if (gridArr[x][y] !== "X" && gridArr[x][y] !== undefined) {
      gridArr[x][y] = "f";
      allGridListItems.push({ x, y, d });
    }
    y += 1;
    d -= 1;
  };
  const moveUpLeft = () => {
    if (gridArr[x - 1] === undefined || gridArr[x][y - 1] === undefined) return;
    if (gridArr[x - 1][y - 1] === "f") return;
    x -= 1;
    y -= 1;
    d += 1;
    if (gridArr[x][y] !== "X" && gridArr[x][y] !== undefined) {
      gridArr[x][y] = "f";
      allGridListItems.push({ x, y, d });
    }
    x += 1;
    y += 1;
    d -= 1;
  };

  function getSteps() {
    moveUp();
    moveUpRight();
    moveRight();
    moveDownRight();
    moveDown();
    moveDownLeft();
    moveLeft();
    moveUpLeft();
  }
  getSteps();
  console.log(allGridListItems);
  const rek = () => {
    return allGridListItems.map((el) => {
      x = el.x;
      y = el.y;
      d = el.d;
      getSteps();
    });
  };

  const includes = () => {
    return allGridListItems.find((el) => {
      return el.x === endX && el.y === endY;
    });
  };
  while (includes() === undefined) {
    rek();
  }
  console.log(gridArr);

  count = includes().d;
  console.log(allGridListItems);
  if (count) return console.log(count);
}
const result = minWalk([".X.", ".X.", "..."], 0, 0, 0, 2);
