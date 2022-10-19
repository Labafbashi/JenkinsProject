import numberCruncher from "./numberCruncher.js"

describe('numberCruncher unit test', () => {
  it('should return 9 when adding 2 and 7', () => {
    const data = {numOne: 2, operator: 'add', numTwo:7} 
    expect(numberCruncher(data)).toBe(9)
  })
  it('should return 56 when multiply 7 and 8', () => {
    const data = {numOne: 7, operator: 'multiply', numTwo: 8}
    expect(numberCruncher(data)).toBe(56)
  })
})
