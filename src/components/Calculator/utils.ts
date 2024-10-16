const calculate = (
  left: number | undefined,
  right: number | undefined,
  operation: string | undefined
) => {
  switch (operation) {
    case '+':
      return left! + right!
    case '-':
      return left! - right!
    case '*':
      return left! * right!
    case '/':
      return left! / right!
    default:
      return left!
  }
}


const formatDisplayOutput = (
  leftOperand: number,
  rightOperand: number | undefined,
  operation: string | undefined,
) => {
  if (rightOperand) return `${leftOperand} ${operation} ${rightOperand}`

  if (operation) return `${leftOperand} ${operation}`

  return leftOperand
}

export { calculate, formatDisplayOutput }
