function sumInput(){

    let inputs = [];
    
    while (true){

        let value = prompt("Введите число","");
    
        if (value === "" || value === null || !isFinite(value)) break;

        inputs.push(+value);
    }

    let sorted = inputs.sort();

    let sum = 0;
    for (let input of inputs){
        sum += input;
    }
    
    document.getElementById("result").innerHTML = sorted;

    return sum;
}

alert (sumInput());
