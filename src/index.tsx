import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    title: string
    text?: string
}

const Title = ({ title, text }: TitleProps) => {
    return (
        <h1>
            {text} {title}
        </h1>
    )
}

const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi tenetur consequatur cumque assumenda, excepturi, labore
                velit sint molestias corrupti tempore vel aperiam dolorem dolore
                ab minima, nam animi eaque minus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                distinctio facilis suscipit, blanditiis reprehenderit unde quae
                at ipsum possimus atque quis, fuga explicabo corporis soluta
                impedit officiis dolores a earum.
            </p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Title text="Hello" title="React" />
            <Title text="Hi" title="About" />
            <Title title="Bla-bla" />
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
