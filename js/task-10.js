/*reduce, filter, sort
Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

Слияние массивов:*/

// Write code under this line
const getSortedUniqueSkills = (array) => array.reduce((acc, item) => [...acc, ...item.skills], []).filter((current, index, arr) => arr.indexOf(current) === index).sort();

console.log(getSortedUniqueSkills(users));