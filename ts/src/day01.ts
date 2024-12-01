import { readFileSync } from 'node:fs'

const day = "01"
const test: boolean = false

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
  let total: number = 0

  let left: number[] = []
  let right: number[] = []

  for(let i=0; i<input.length; i++){
    let numbers = input[i].split("   ")
    left.push(+numbers[0])
    right.push(+numbers[1])
  }

  left = left.sort()
  right = right.sort()

  if (left.length !== right.length){console.log("error: left length and right length not equal"); return "error"}

  for(let i=0; i<left.length; i++){
    total += Math.abs(+left[i] - +right[i])
  }
  let output = total.toString()
  return output
}

function problem2(input: string[]): string{
  let output = ""
  return output
}

console.log("Part 1:\n" + problem1(inputData))
console.log("Part 2:\n" + problem2(inputData))
