/// <reference types="cypress" />

it('Igualdade', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})

it('Verdadeiro', ()=>{
    const a = true;
    const b = null;
    let c;


    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('Igualdade de objetos', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).to.be.deep.equal({a:1, b:2})
    expect(obj).eql({a:1, b:2})
    expect(obj).include({a:1})
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
})

it('Arrays', ()=>{
    const arr = [1,2,3]
    
    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Tipos', ()=>{
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de Teste'

    expect(str).to.be.equal('String de Teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/^String/)
    expect(str).to.match(/Teste$/)
    expect(str).to.match(/.{15}/)
    expect(str).to.match(/\w+/)
    expect(str).to.match(/\D+/)

})

it('Numeros', ()=>{
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)

    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)

    
})