import type { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { flatten } from './utils'

const FlattenArrays: FC = () => {
  const array = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

  return (
    <article>
      <h1>Task #2. Flatten Nested Arrays.</h1>
      <p>Function definition:</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {`
          const flatten = (arr: any[], depth: number): any[] => {
            // if we reached the depth of 0, return the array (or it's element, if the function is called recursively)
            if (depth === 0) return arr
            
            // else if the type of arr is Array, let's flatten it
            if (Array.isArray(arr)) {
              return arr.reduce((acc, val) => acc.concat(flatten(val, depth - 1)), [])
            }
        
            return arr
          }
        `}
      </SyntaxHighlighter>
      <p>Lets define the source array:</p>
      <SyntaxHighlighter language="json" style={oneDark}>
        {JSON.stringify(array)}
      </SyntaxHighlighter>
      <p>Now let's call the function with depth of:</p>
      <ol start={0}>
        {[0, 1, 2].map((depth) => (
          <li key={depth}>
            <SyntaxHighlighter language="json" style={oneDark}>
              {JSON.stringify(flatten(array, depth))}
            </SyntaxHighlighter>
          </li>
        ))}
      </ol>
    </article>
  )
}

export default FlattenArrays
