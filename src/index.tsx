import React from 'react'
import ReactDOM from 'react-dom/client'
//arrow Function

const Title = () => <h1>Hello Title Component</h1>

const Content = () => (
    <div>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            doloremque architecto vitae neque molestiae, ea illo provident
            voluptate, earum necessitatibus sit beatae eos quas corporis
            explicabo sunt assumenda autem quam.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias
            doloribus voluptatem provident veritatis at nemo quibusdam
            accusantium, illum facilis deleniti architecto culpa porro optio a
            repellendus possimus nulla mollitia!
        </p>
    </div>
)

const App = () => {
    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
