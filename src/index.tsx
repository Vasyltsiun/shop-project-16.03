import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'

type ContentProps = {
    Title: string
    FirstParagraph: string
    SecondParagraph: string
}

const Content = ({ Title, FirstParagraph, SecondParagraph }: ContentProps) => {
    return (
        <React.Fragment>
            <h2>{Title}</h2>
            <p>{FirstParagraph}</p>
            <p>{SecondParagraph}</p>
        </React.Fragment>
    )
}

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
            <Content
                Title="Hello world"
                FirstParagraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt vitae accusamus consequatur possimus commodi placeat provident ipsa, sint quas repudiandae pariatur asperiores nemo suscipit. Architecto quas beatae iste rem ipsam."
                SecondParagraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt vitae accusamus consequatur possimus commodi placeat provident ipsa, sint quas repudiandae pariatur asperiores nemo suscipit. Architecto quas beatae iste rem ipsam."
            />
            <Content
                Title="Hello world2"
                FirstParagraph="2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt vitae accusamus consequatur possimus commodi placeat provident ipsa, sint quas repudiandae pariatur asperiores nemo suscipit. Architecto quas beatae iste rem ipsam."
                SecondParagraph="2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt vitae accusamus consequatur possimus commodi placeat provident ipsa, sint quas repudiandae pariatur asperiores nemo suscipit. Architecto quas beatae iste rem ipsam."
            />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
