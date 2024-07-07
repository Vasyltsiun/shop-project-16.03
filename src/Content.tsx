type ContentProps = {
    Title: string
    FirstParagraph: string
    SecondParagraph: string
}

const Content = ({ Title, FirstParagraph, SecondParagraph }: ContentProps) => {
    return (
        <>
            <h2>{Title}</h2>
            <p>{FirstParagraph}</p>
            <p>{SecondParagraph}</p>
        </>
    )
}

export default Content
