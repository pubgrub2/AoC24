import { readFileSync } from 'node:fs'

const day = "00"
const test: boolean = true

const testDataFile = "../../testdata/day" + day
const dataFile = "../../data/day" + day

let inputData: string[]

if (test === true) {
  inputData = readFileSync(testDataFile).toString().trimEnd().split("\n")
  inputData = inputData.map(str => (str.trim()))
}

else {
  inputData = readFileSync(dataFile).toString().trimEnd().split("\n")
  inputData = inputData.map(str => (str.trim()))
}

function problem1(input: string[]): string{


  let output = ""
  return output
}

function problem2(input: string[]): string{


  let output = ""
  return output
}

console.log("Part 1:\n" + problem1(inputData))
console.log("Part 2:\n" + problem2(inputData))
