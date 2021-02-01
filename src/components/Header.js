import './Header.css';

function Header() {
    return (
        <header>
            <p style={{ color: "#FF0000", width: "100%", marginLeft: "1rem" }}>
                In Development
            </p>
            <button className="button-primary">Contact</button>
        </header>
    );
}

export default Header;
