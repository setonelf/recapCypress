it('nada agora', function () {})

// function soma(a, b){
//     return a+b;
// }

// const soma = function (a,b){
//     return a+b;
// }

// const soma = (a, b) => {
//     return a+b
// }


//const soma =  (a, b) => a + b

//FORMA ERRADA
// const soma = (a,b) => {
//     a+b
// } 

const soma = a => a+a


console.log(soma(1,4))

it ('um teste com funcao...', function(){
    console.log('Function', this)
})

it ('um teste com funcao arrow...', () => {
    console.log('Arrow', this)
})