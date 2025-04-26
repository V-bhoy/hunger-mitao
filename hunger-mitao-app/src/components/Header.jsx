import logo from "../assets/logo.png"

export default function Header(){
    return <div className={"header"}>
        <div className={"logo"}>
            <img src={logo}/>
        </div>
        <div className={"nav-list"}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}