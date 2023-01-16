function NumberOneTriangle(num){
    arr=[];
    for(let i = 1; i <= num; i++){
        for(let j = i; j <= i; j++){
            arr.push('*');
        }   
        document.writeln(String(arr),"<br/>")
    }
}

NumberOneTriangle(7);