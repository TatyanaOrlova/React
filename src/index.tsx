import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello React.js</h1>
}

const Content = () => {
    return (
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            tenetur consequatur cumque assumenda, excepturi, labore velit sint
            molestias corrupti tempore vel aperiam dolorem dolore ab minima, nam
            animi eaque minus.
        </p>
    )
}

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
