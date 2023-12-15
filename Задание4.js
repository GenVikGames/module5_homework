function myFunction(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(myFunction(1,100));