import './Header.css'

type HeaderProps = {
    Order?: number
    LeftPart: string
    text: string
    RightPart: string
    background?: string
    color?: string
}

const Header = ({
    Order,
    LeftPart,
    text,
    RightPart,
    background = 'purple',
    color = 'white',
}: HeaderProps) => {
    return (
        <h1 className="header">
            {Order} {LeftPart} {text} {RightPart}
        </h1>
    )
}

export default Header
