import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  const Header = () => {
    return (
      <div>
        <p>{course}</p>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        {parts.map(function(d, index){
         return (<li key={index}>{d.name} ,{d.exercises} </li>)
       })}
      </div>
    )
  }

  const Total = () => {

    return (
      <div>
        Total {parts.reduce((a,v) =>  a = a + v.exercises , 0 )
  }
  
      </div>
    )
  }


  return (
    <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total  parts={parts} />
  </div>
  )
}

 


ReactDOM.render(<App />, document.getElementById('root'))