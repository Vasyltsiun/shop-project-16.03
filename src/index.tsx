import React from 'react'
import ReactDOM from 'react-dom/client'
//arrow Function

type HeaderProps = {
    text: string
}

const Header = (props: HeaderProps) => {
    return <h1>Hello {props.text} Component</h1>
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
            <Header text="Title" />
            <Header text="App" />
            <Header text="React" />
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
