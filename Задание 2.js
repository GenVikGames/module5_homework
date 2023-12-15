let number = 10;

switch(typeof number){
    case "number":
        console.log("x - Число");
        break;
    case "string":
        console.log("x - строка");
        break;
    case "boolean":
        console.log("x -логический тип");
        break;
        default:
            console.log("Тип x не определён")

}