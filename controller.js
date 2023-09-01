const readlineSync = require('readline-sync');
const fs = require('fs');
const { EOL } = require('os');
const chalk = require('chalk') 

console.log(chalk.bgGreen('hello'))
const userName = readlineSync.question(`Введите Имя\n`);
console.log('Привет ' + userName + '!');
console.log('Хорошей игры!');

function playTheGame() {
  let enots = fs.readFileSync('./topics/animals.txt', 'utf-8');
  let plan = fs.readFileSync('./topics/computers.txt', 'utf-8');
  let ptices = fs.readFileSync('./topics/funny.txt', 'utf-8');

  let animals = ['animals', 'computers', 'funny'],
  index = readlineSync.keyInSelect(animals, 'Выберите тему');
  let result1 = [];

  if (animals[index] == 'animals') {
    let result = enots.split(EOL).filter((el) => el != '');
    for (let i = 0; i < result.length; i = i + 2) {
      result1.push([result[i], result[i + 1]]);
    }
  } else if (animals[index] == 'computers') {
    let result = plan.split(EOL).filter((el) => el != '');
    for (let i = 0; i < result.length; i = i + 2) {
      result1.push([result[i], result[i + 1]]);
    }
  } else if (animals[index] == 'funny') {
    let result = ptices.split(EOL).filter((el) => el != '');
    for (let i = 0; i < result.length; i = i + 2) {
      result1.push([result[i], result[i + 1]]);
    }
  }
  let userName;
  let count = 0;
  for (let i = 0; i < result1.length; i++) {
    userName = readlineSync.question(`${result1[i][0]}\n`);
    if (userName === `${result1[i][1]}`) { 
        console.log(chalk.blue`Правильно 👍`)
      count +=1
    } else {
      console.log(chalk.bgRed('Вы отвечаете не правильно!!'));
      count = count -1 
    } 
  }
  console.log('Игра закончена')
  if(count < result1.length/2){
    console.log(count)
    console.log(`¯\\_(ツ)_/¯\n__________\nПлохо`)
  } else if (count < result1.length/2) {
  console.log('Вы играете прекрасно!🤓');
  console.log(`Ваш счет: ${count}`)
  } 
}
playTheGame();
