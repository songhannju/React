import { useState } from 'react'
function MyComponent(props) {
  return <h1>{props.a}</h1>
}
function App() {

  const listItems = [{content: 'Item 1', id: 'abc'}, {content: 'Item 2', id: 'def'}, {content: 'Item 3', id: 'ghi'}]
  return (
    <div> 
      <MyComponent a = "hello world"/>
    </div>
  )
}

export default App
