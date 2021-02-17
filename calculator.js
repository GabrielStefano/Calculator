function AddNumber(n){
    var num = document.querySelector('input#num')

    if(num.value.length<9){
        num.value=`${num.value}${n}`
    }
    
}

function AddOperator(n){
    var mem = document.querySelector('input#mem')
    var num = document.querySelector('input#num')
    var solution = ''
    if(n=='C'){
        num.value = ''
    }
    else if(n=='CE'){
        num.value = ''
        mem.value = ''
    }
    // else if(isNaN(mem.value.charAt(mem.value.length-2)) == true && (num.value.charAt(0) == '' || editável )){
    else if(isNaN(mem.value.charAt(mem.value.length-2)) == true && num.value.charAt(0) == ''){ // used to change the operation symbol just in case the user chooses another operation instead of a number
        var straux = mem.value.slice(0, -2) +  `${n} `;
        mem.value = straux
    }
    else{
        
        if(/[x\/*\-+]+/.test(mem.value)==true && n!='.'){
            mem.value += `${num.value}`
            num.value = ''
            var operator = mem.value.match(/[x\/*\-+]+/)[0]
            var elements = mem.value.split(operator)
            solution = solve_operation(elements, operator)
            mem.value += ` ${operator}`
            mem.value = `${solution} ${n} `
        }
        else{
            mem.value += `${num.value} ${n} `
            num.value = ''
        }
    }

    if(mem.value.charAt(mem.value.length-2)=='='){
        if(/[x\/*\-+]+/.test(mem.value)==true)
            window.alert('problem') 
        else{
            num.value = mem.value.slice(0, -3)
            mem.value = ''
        }
    }
}

function solve_operation(elements, operator){
    var solution
    switch(operator){
        case operator='+':
            solution = Number(elements[0]) + Number(elements[1]) 
            break
        case operator='-':
            solution = Number(elements[0]) - Number(elements[1]) 
            break
        case operator='x':
            solution = Number(elements[0]) * Number(elements[1]) 
            break
        case operator='/':
            solution = Number(elements[0]) / Number(elements[1]) 
            break
        
    }
    return solution
}
