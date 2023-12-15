let arr = [1,2,3,4,5,11,20,25];
let nechet=0;
function chetOfOdd(arr){
    let chet = 0;
    for(let i=0; i<=arr.length; i++){
        if(arr[i]%2 ==0)
        chet++
    }
 return chet;   
}
nechet = arr.length - chetOfOdd(arr);
console.log("Количество чётных = " +chetOfOdd(arr))
console.log("Количество нечётных = "+ nechet)