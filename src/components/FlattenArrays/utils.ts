/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

const flatten = (arr: any[], depth: number): any[] => {
  // if we reached the depth of 0, return the array (or number)
  if (depth === 0) return arr

  // else if the arr is an array, let's flatten it
  if (Array.isArray(arr)) {
    return arr.reduce((acc, val) => acc.concat(flatten(val, depth - 1)), [])
  }

  // never reaching here, added for typesafety
  return arr
}

export { flatten }
