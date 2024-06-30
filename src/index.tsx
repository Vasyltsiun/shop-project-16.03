import React from 'react'
import ReactDOM from 'react-dom/client'
//funtion declaration
function Title() {
    return <h1>Hello Title Component</h1>
}
function Component() {
    return (
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            doloremque architecto vitae neque molestiae, ea illo provident
            voluptate, earum necessitatibus sit beatae eos quas corporis
            explicabo sunt assumenda autem quam.
        </p>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
        <Component />
    </React.StrictMode>
)
