import React from 'react'
import ReactDOM from 'react-dom/client'
//arrow Function

type HeaderProps = {
    Order?: number
    LeftPart: string
    text: string
    RightPart: string
}

const Header = (props: HeaderProps) => {
    return (
        <h1>
            {props.Order} {props.LeftPart} {props.text} {props.RightPart}
        </h1>
    )
}

const Content = () => (
    <React.Fragment>
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
    </React.Fragment>
)

const App = () => {
    return (
        <>
            <Header
                Order={3}
                LeftPart="Hello"
                text="Title"
                RightPart="component"
            />
            <Header LeftPart="Hello1" text="App" RightPart="component1" />
            <Header
                Order={1}
                LeftPart="Hello2"
                text="React"
                RightPart="component2"
            />
            <Content />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
