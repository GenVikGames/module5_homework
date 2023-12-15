const human = new Map([
    ["gena", "30"],
    ["egor", 22],
    ["kostya", 25],
    ["roman", 38],
]);
human.set("anton", 40);
    for(let [key,value] of human){
        console.log(`Ключ - ${key}, значение - ${value}`)
    }