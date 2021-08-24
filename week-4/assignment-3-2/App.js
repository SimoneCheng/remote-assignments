// Header Component
function Header() {
    return (
        <header>
            <nav>
                <div id="brand_logo_and_name">
                    <h3>Welcome Title/LOGO</h3>
                </div>
                <label htmlFor="burger" className="open-menu">&#9776;</label>
                <input type="checkbox" id="burger" />
                <div id="menu">
                    <ul>
                        <label htmlFor="burger" className="close-menu">&times;</label>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

// Welcome Message Componment
class Welcome extends React.Component {
    ChangeMessage() {
        const welcomeMessage = document.querySelector("#welcome-message h1");
        welcomeMessage.textContent = "Have a Good Time!";
    };

    render() {
        return (
            <section id="welcome-message" onClick={this.ChangeMessage}>
                <h1>Welcome Message</h1>
            </section>
        )
    }
}

// Content 1 to 4 Componment
function Content() {
    return (
        <section id="content">
            <div id="content-title">
                <h2>Section Title</h2>
            </div>
            <div id="content-text">
                <div className="row">
                    <div className="container">Content Box 1</div>
                    <div className="container">Content Box 2</div>
                </div>
                <div className="row">
                    <div className="container">Content Box 3</div>
                    <div className="container">Content Box 4</div>
                </div>
            </div>
        </section>
    )
}

//Content 5 to 8 Component
function ContentHidden() {
    return (
        <section id="content-hide">
            <div className="row">
                <div className="container">Content Box 5</div>
                <div className="container">Content Box 6</div>
            </div>
            <div className="row">
                <div className="container">Content Box 7</div>
                <div className="container">Content Box 8</div>
            </div>
        </section>
    )
}

function ContentHiddenControl(props) {
    const isHidden = props.isHidden;
    if (isHidden) { return "";} else { return <ContentHidden />;} 
}

//Button Control Component (Using State)
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isHidden: true };
        this.isHidden = this.isHidden.bind(this);
        this.isNotHidden = this.isNotHidden.bind(this);
    }

    isHidden = () => this.setState({ isHidden: true });
    isNotHidden = () => this.setState({ isHidden: false });

    render() {
        const isHidden = this.state.isHidden;
        let button;
        if (isHidden) {
            button = <input type="button" value="Call to Action" onClick={this.isNotHidden} />
        } else {
            button = <input type="button" value="Call to Action" onClick={this.isHidden} />
        }
        return (
            <div id="button">
                {button}
                <ContentHiddenControl isHidden={isHidden} />
            </div>
        )
    }
}

// Combine All
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Welcome />
                <Content />
                <Button />
            </div>
        )
    }
}