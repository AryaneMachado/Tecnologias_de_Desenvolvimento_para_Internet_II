const somaA = function(op1, op2) { // Forma tradicional de declarar uma função
    return op1 + op2;
}

const soma = function(op1, op2) { // Segunda forma
    return op1 + op2;
}

Impressões

const a = somaA(1, 2);
console.log(a);
console.log(typeof a);
console.log(somaA(1, 2));

const b = soma("5", 5);
console.log(soma(5, 5));
console.log(soma("5", 5));


const soma = function(op1, op2) { // Segunda forma
    return op1 + op2;
}

console.log(typeof soma); // Retorna o que é a variável soma e não o seu valor conforme a função

//-------------------------------

function hof(f1, f2, op1, op2){
    f2(f1(op1, op2));
}

hof(soma, console.log, 1, 1);

//-------------------------------

const sub = function (op1, op2) {
    return op1 - op2;
}

function hof (operation, writer, op1, op2){
    writer(operation(op1, op2));
}

hof(sub, console.log, 1, 1);