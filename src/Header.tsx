type HeaderProps = {
    Order?: number
    LeftPart: string
    text: string
    RightPart: string
}

const Header = ({ Order, LeftPart, text, RightPart }: HeaderProps) => {
    return (
        <h1>
            {Order} {LeftPart} {text} {RightPart}
        </h1>
    )
}

export default Header
