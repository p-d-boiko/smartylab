import { useState, useCallback, type FC, type MouseEventHandler } from 'react'

import { calculate, formatDisplayOutput } from './utils'

const Calculator: FC = () => {
  const [leftOperand, setLeftOperand] = useState<number>(0)
  const [rightOperand, setRightOperand] = useState<number>()
  const [operation, setOperation] = useState<string>()

  const handleNumClick: MouseEventHandler<HTMLInputElement> = useCallback((event) => {
    // lets convert the input value to number and incease the base by it
    // do it on the left operand if operation is set, and on the right operand otherwise
    if (operation) {
      setRightOperand(prev => prev ? prev * 10 + Number((event.target as HTMLInputElement).value) : Number((event.target as HTMLInputElement).value))
    } else {
      setLeftOperand(prev => prev ? prev * 10 + Number((event.target as HTMLInputElement).value) : Number((event.target as HTMLInputElement).value))    
    }
  }, [leftOperand, rightOperand, operation])

  const handleOperatorClick: MouseEventHandler<HTMLInputElement> = useCallback((event) => {
    // lets set the operation
    if (!operation) {
      setOperation((event.target as HTMLInputElement).value)
    }

    // if operation is set, let's calculate
    if (rightOperand) {
      setLeftOperand(calculate(leftOperand, rightOperand, operation))
      setRightOperand(undefined)
      setOperation((event.target as HTMLInputElement).value)
    }
  }, [operation, leftOperand, rightOperand])

  const evaluate = () => {
    // nothing to do if expression is incomplete, early return
    if (!leftOperand || !rightOperand || !operation) return

    // lets the result of expression in left operand and reset right operant and operation:
    setLeftOperand(calculate(leftOperand, rightOperand, operation))
    setRightOperand(undefined)
    setOperation(undefined)
  }

  const del = useCallback(() => {
    // let's delete the last digit of right operand
    if (rightOperand) {
      setRightOperand(prev => Number(String(prev).slice(0, -1)))
      
      return
    }
    
    // let's delete the operation symbol, if no right operand
    if (operation) {
      setOperation(undefined)
      
      return
    }
    
    // no right operand and no operation defined? let's delete the last digit of left operand
    setLeftOperand(prev => Number(String(prev).slice(0, -1)))
  }, [rightOperand, setRightOperand, operation, setOperation, setLeftOperand])

  const clear = () => {
    // reset to initial state
    setLeftOperand(0)
    setRightOperand(undefined)
    setOperation(undefined)
  }

  return (
    <article>
      <h1>Task #3. The Calculator.</h1>
      <div className="calculator">
        <div className="display">{formatDisplayOutput(leftOperand, rightOperand, operation)}</div>
        <div className="keypad">
          <button onClick={clear} className="span2">CLEAR</button>
          <button onClick={del} className="span2">DEL</button>
          <input type="button" value={7} onClick={handleNumClick} />
          <input type="button" value={8} onClick={handleNumClick} />
          <input type="button" value={9} onClick={handleNumClick} />
          <input type="button" value="/" onClick={handleOperatorClick} />
          <input type="button" value={4} onClick={handleNumClick} />
          <input type="button" value={5} onClick={handleNumClick} />
          <input type="button" value={6} onClick={handleNumClick} />
          <input type="button" value="*" onClick={handleOperatorClick} />
          <input type="button" value={1} onClick={handleNumClick} />
          <input type="button" value={2} onClick={handleNumClick} />
          <input type="button" value={3} onClick={handleNumClick} />
          <input type="button" value="-" onClick={handleOperatorClick} />
          <input type="button" value={0} onClick={handleNumClick} className="span2" />
          <input type="button" value="=" onClick={evaluate} />
          <input type="button" value="+" onClick={handleOperatorClick} />
        </div>
      </div>
    </article>
  )
}

export default Calculator
