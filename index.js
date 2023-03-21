// Code your solution here
function findMatching(drivers, name){
    let result1 = drivers.filter((element) => element === name);
    let result2 = drivers.filter((element) => element === name.toLowerCase());
    return result1.concat(result2);
}

function fuzzyMatch(drivers, someValue){
    return drivers.filter((elemet) => elemet.startsWith(someValue));
}

function matchName(drivers, name){
    return drivers.filter((drivers) => drivers.name === name);
}