import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <li>Part {part1.name} has {part1.exercises} exercies </li>
      <li>Part {part2.name} has {part2.exercises} exercies </li>
      <li>Part {part3.name} has {part3.exercises} exercies </li>
      <li>In total it has {part1.exercises + part2.exercises + part3.exercises} exercises  </li>
    </div>
  )
}




ReactDOM.render(<App />, document.getElementById('root'))