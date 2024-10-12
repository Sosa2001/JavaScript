console.log('Hello world!');

//VAR
var PrimeraVariable;
//LET
let SegundaVariable;
//CONST
const PrimeraConstante = 10;

console.log(PrimeraVariable, SegundaVariable, PrimeraConstante);

//----------------------------------------------test


//PrimeraConstante = 20;

PrimeraVariable = 10;

SegundaVariable = 'HOLA';

console.log(PrimeraVariable, SegundaVariable, PrimeraConstante);

PrimeraVariable = 'HOLA';

SegundaVariable = 10;

console.log(PrimeraVariable, SegundaVariable, PrimeraConstante);

const SEGUNDAConstante = 'array';
console.log(SEGUNDAConstante);


//Función

const functions = () => {
    let VarContext = 1000;
    PrimeraVariable = 'Hola 2';
    SegundaVariable = 2;
    console.log(PrimeraVariable, SegundaVariable, PrimeraConstante, VarContext);
};

functions();

console.log(PrimeraVariable, SegundaVariable, PrimeraConstante);

// ^ 1)HOLA 2 2 1 1000
// ^ 2)HOLA 10 1
// ^ 3)HOLA 2 2 1
// ^ 4)ERR

console.log("-----------------------types-----------------------");
let Undl ;
let Bool = true
let arr = [true, 'asdf', 1, []];
let li = null

console.log(typeof(PrimeraVariable), typeof(PrimeraConstante), typeof(Undl), typeof(Bool), typeof(arr), typeof(null));

//* STRING 
//* UNDEFINED
//* NUMBER
//* BOOLEAN 
//* OBJECT
//* NULL

//* BigInit - ^23
//*Symbol

// function
// function
// ()=>{}
// ...