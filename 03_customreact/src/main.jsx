import React from 'react'
import { createRoot } from 'react-dom/client'

// import {jsx as _jsx} from 'react/jsx-runtime.js'

import App from './App'
import Learn from './Learn'

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "Click Me to visit Google"
// }

function MyApp(){
  return(
    <div>
      <h1>React App!</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://www.google.com', target: '_blank'},
//   'click me to visit google'
// )

const User = "Raman"

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'click me to visit google ',
  User
)

createRoot(document.getElementById('root')).render(
  // <MyApp />
  // anotherElement
  // reactElement

  // <App /> 
  reactElement
)