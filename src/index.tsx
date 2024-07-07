import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Content from './Content'

const App = () => {
    return (
        <>
            <Header
                Order={3}
                LeftPart="Hello"
                text="Title"
                RightPart="component"
                background="aqua"
                color="blue"
            />
            <Header
                LeftPart="Hello1"
                text="App"
                RightPart="component1"
                color="green"
            />
            <Header
                Order={1}
                LeftPart="Hello2"
                text="React"
                RightPart="component2"
                background="red"
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
