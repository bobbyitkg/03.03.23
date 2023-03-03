// Task #1
const shoppingList = ["Bread", "Milk", "Newspaper"];
// ul > li
const ul = document.createElement("ul");
for (let i = 0; i < shoppingList.length; i++) {
  const li = document.createElement("li");
  li.textContent = shoppingList[i];
  ul.append(li);
}
document.body.append(ul);

// Task #2
const cities = [];
const citiesList = document.querySelectorAll("#cities li");
for (let i = 0; i < citiesList.length; i++) {
  cities.push(citiesList[i].textContent);
}

// Task #3
const players = [
  { name: "Aijan", score: 70 },
  { name: "Ilgiz", score: 65 },
  { name: "Dastan", score: 100 }
];
const playersList = document.createElement("ul");
document.body.append(playersList);
for (let i = 0; i < players.length; i++) {
  const playerLi = document.createElement("li");
  playersList.append(playerLi);

  playerLi.textContent = players[i].name + " - ";

  const score = document.createElement("strong");
  score.textContent = players[i].score;
  playerLi.append(score);
}

// Task #4
const pCities = [];
const pCitiesList = document.querySelectorAll("ol li");
for (let i = 0; i < pCitiesList.length; i++) {
  const li = pCitiesList[i];
  const cName = li.querySelector(".name");
  const cPopulation = li.querySelector(".population");

  const city = {
    name: cName.textContent,
    population: cPopulation.textContent
  }

  pCities.push(city);
}
// console.log(pCities);

// Task #5
const tableData = [
  { name: "Bishkek", population: "1m" },
  { name: "Karakol", population: "80k" },
  { name: "Cholpon-Ata", population: "40k" },
];
const table = document.createElement("table");
document.body.append(table);
for (let i = 0; i < tableData.length; i++) {
  const tr = document.createElement("tr");
  table.append(tr);

  const name = document.createElement("td");
  name.textContent = tableData[i].name;
  tr.append(name);

  const population = document.createElement("td");
  population.textContent = tableData[i].population;
  tr.append(population);
}

// Task #6
const tableData1 = [
  { name: "Bishkek", population: "1m", country: "Kyrgyzstan", continent: "Asia" },
  { name: "Karakol", population: "80k", country: "Kyrgyzstan", continent: "Asia" },
  { name: "Cholpon-Ata", population: "40k", country: "Kyrgyzstan", continent: "Asia" },
];

// создаем таблицу
const table1 = document.createElement("table");
document.body.append(table1);

// создать заголовки
const headers = Object.keys(tableData1[0]);
const tr = document.createElement("tr");
table1.append(tr);
for (let j = 0; j < headers.length; j++) {
  const th = document.createElement("th");
  th.textContent = headers[j];
  th.style.textTransform = "capitalize";
  tr.append(th);
}

// создать строки
// пройтись по элементам массива
for (let i = 0; i < tableData1.length; i++) {
  const tr = document.createElement("tr");
  table1.append(tr);
  
  // пройтись по ключам объекта
  for (let j = 0; j < headers.length; j++) {
    const city = tableData1[i]; // { name: "Bishkek", population: "1m", country: "Kyrgyzstan", continent: "Asia"}

    const td = document.createElement("td");
    td.textContent = city[headers[j]];
    tr.append(td);
  }
}