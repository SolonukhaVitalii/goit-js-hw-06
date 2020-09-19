/*reduce, filter, sort
Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

Слияние массивов:*/

const getSortedUniqueSkills = (array) => array.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], []).sort().filter((current, index, arr) => arr.indexOf(current) === index);

console.log(getSortedUniqueSkills(users));