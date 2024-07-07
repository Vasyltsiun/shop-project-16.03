type HeaderProps = {
    Order?: number
    LeftPart: string
    text: string
    RightPart: string
    background?: string
}

const Header = ({
    Order,
    LeftPart,
    text,
    RightPart,
    background = 'purple',
}: HeaderProps) => {
    return (
        <h1
            style={{
                background: background,
                color: 'white',
                fontSize: '30px',
                padding: '20px',
            }}
        >
            {Order} {LeftPart} {text} {RightPart}
        </h1>
    )
}

export default Header
