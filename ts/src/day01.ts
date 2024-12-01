import { readFileSync } from 'node:fs'

const day = "01"
const test: boolean = true

const testDataFile = "../../testdata/day" + day
const dataFile = "../../data/day" + day

let inputData: string[]

if (test === true) {
  inputData = readFileSync(testDataFile).toString().split("\n")
  inputData = inputData.map(str => (str.trim()))
}

else {
  inputData = readFileSync(dataFile).toString().split("\n")
  inputData = inputData.map(str => (str.trim()))
}

function problem1(input: string[]): string{
  for(let i=0; i<input.length-1; i++){
    
  }
  let output = ""
  return output
}

function problem2(input: string[]): string{
  let output = ""
  return output
}

console.log(problem1(inputData))
console.log(problem2(inputData))
