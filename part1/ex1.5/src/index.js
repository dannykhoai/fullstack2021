import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  let sorted = course.parts.map((d, index) => (<li key={index}>{d.name} ,{d.exercises} </li>))
  let sum = course.parts.reduce((a,v) =>  a = a + v.exercises , 0 )
  
  
    
  return (
    <div>
      {Object.values(course.name)}
      {sorted}      
      Total {sum}
    </div>
  )
  }

 


ReactDOM.render(<App />, document.getElementById('root'))