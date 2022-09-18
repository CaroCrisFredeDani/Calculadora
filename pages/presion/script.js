function pascalToBar(){
    
    const bar= 1/100000;
    
    let pascal = document.getElementById("pascal").value;

    if(isNaN(pascal)){
        alert("La entrada de pascales no es un numero");
    }else{
        let bares = pascal * bar;
        document.getElementById("bar").value = bares ;
        console.log(bares); 
    }

   
 
}

function barToPascal(){
    
    const pascal= 100000;
    
    let bar = document.getElementById("bar").value;

    if(isNaN(bar)){
        alert("La entrada de bares no es un numero");

    }else{
        let pascales = pascal * bar;
    document.getElementById("pascal").value = pascales ;
    console.log(pascales); 
    }
    
 
}

function reset(){
    document.getElementById("pascal").value = "";
    document.getElementById("bar").value = "";
}