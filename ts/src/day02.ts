import { readFileSync } from 'node:fs'

const day = "02"
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
  const splitIntoNumbers = /(\d+)/g

  let total: number = 0

  for(let i=0; i<input.length; i++) {

    let x: number[] = []
    let y = input[i].match(splitIntoNumbers)

    if (y !== null) {x = y.map(str => +str)}
    else {console.log("continued"); continue}

    let direction: number = 0

    for(let l=0; l<x.length-1; l++) {
      let current = x[l]
      let next = x [l+1]

      if ( current < next ) {
        if (direction === 0) {direction = 1}
        if (direction === 2) {break}
        if ( next - current >= 1 && next - current <= 3 ) { if ( l === x.length-2 ) { total++; } }
        else {break}
      }

      if ( current > next ) {
        if (direction === 0) {direction = 2}
        if (direction === 1) {break}
        if ( current - next >= 1 && current - next <= 3 ) { if ( l === x.length-2 ) { total++; } }
        else {break}
      }

      if ( current === next ) {break}

    }
  }

  let output = total.toString()
  return output
}

function problem2(input: string[]): string{
  const splitIntoNumbers = /(\d+)/g

  let total: number = 0

  for(let i=0; i<input.length; i++) {

    let x: number[] = []
    let y = input[i].match(splitIntoNumbers)

    if (y !== null) {x = y.map(str => +str)}
    else {console.log("continued"); continue}

    let direction: number = 0

    let error: boolean = false

    for(let l=0; l<x.length-1; l++) {
      let current = x[l]
      let next = x [l+1]
      console.log(x)
      if ( current < next ) {
        if (direction === 0) {direction = 1}
        if (direction === 2 && !error) {error = true}
        if (direction === 2 && error) {break}
        if ( next - current >= 1 && next - current <= 3 ) { if ( l === x.length-2 ) { total++; console.log("success1") } }
        else {
          if (!error) {error = true}
          else {break}
        }
      }

      if ( current > next ) {
        if (direction === 0) {direction = 2}
        if (direction === 1 && !error) {error = true}
        if (direction === 1 && error) {break}
        if ( current - next >= 1 && current - next <= 3 ) { if ( l === x.length-2 ) { total++; console.log("success2") } }
        else {
          if (!error) {error = true}
          else {break}
        }
      }

      if ( current === next ) {break}
      if ( current === next ) {break}

    }
  }

  let output = total.toString()
  return output
}

console.log("Part 1:\n" + problem1(inputData))
console.log("Part 2:\n" + problem2(inputData))
