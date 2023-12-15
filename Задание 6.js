let arr = [1,2,1,75,99,7];

let res = Array.from(new Set(arr));
if (res.length==arr.length){
    console.log(true);
}
else
console.log(false);