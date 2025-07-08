it('sem testes ainda', ()=>{})

//const getSomething = () => 10;

//Utilizando Promise
const getPromise = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(13);
        }, 1000)
    } )
    
}

//Utilizando Callback
const getSomething = callback => {
    setTimeout(() => {
        callback(12);
    }, 1000)
}
const system = () =>{
    console.log('init');
    getSomething(some => console.log(`Something is ${some}`));
    console.log('end')
}

const systemPromise = () =>{
    console.log('init');
    getPromise().then(some => {
        console.log(`Something is ${some}`)
    })
    //getPromise(some => console.log(`Something is ${some}`));
    console.log('end')
}

//system();
systemPromise();