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
    // window.alert(`${isNaN(mem.value.charAt(mem.value.length-2))} ${mem.value.charAt(mem.value.length-2)} `)
    // window.alert(num.value.charAt(0))
    if(n=='C'){
        num.value = ''
    }
    else if(n=='CE'){
        mem.value = ''
    }
    
    else if(isNaN(mem.value.charAt(mem.value.length-2)) == true && num.value.charAt(0) == ''){
        var straux = mem.value.slice(0, -2) +  `${n} `;
        // mem.value(mem.value.length-1) = `a `
        window.alert('substi')
        mem.value = straux
    }
    else{
        // window.alert(/[x\/*\-+%]+/.test(mem.value))
        if(/[x\/*\-+]+/.test(mem.value)==true && n!='.'){
            mem.value += `${num.value}`
            // a.indexOf(a.match(/[x\/*\-+%]+/)[0])
            // mem.value.slice(/[x\/*\-+%]+/, -2)
            var operator = mem.value.match(/[x\/*\-+]+/)[0]
            var elements = mem.value.split(operator)
            solution = solve_operation(elements, operator)
            mem.value += ` ${operator}`
        }
        else{
            mem.value += `${num.value} ${n} `
        }
    }

    if(mem.value.charAt(mem.value.length-2)=='='){
        window.alert('oi') 
        if(/[x\/*\-+]+/.test(mem.value)==true)
            window.alert('oi') 
        else{
            mem.value = mem.value.slice(0, -3)
        }
        // mem.value += `${num.value} ${n} ` 
        // window.alert('uepa')
        // num.value = eval(mem.value)
    }

    if (solution!=''){
        num.value = ''
        mem.value = `${solution} ${n}`
    }
    else
        num.value = ''
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
    var num = document.querySelector('input#num')
    // window.alert(solution)
    return solution
}