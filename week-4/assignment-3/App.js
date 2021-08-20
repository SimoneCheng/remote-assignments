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

//Button Component
class Button extends React.Component {
    OpenHiddenContent() {
        const callToActionButton = document.querySelector("#button input");
        const contentHide = document.querySelector("#content-hide");
        if (contentHide.style.display === "none") {
            contentHide.style.display = "block";
        } else {
            contentHide.style.display = "none";
        }
    }

    render() {
        return (
            <div id="button">
                <input type="button" value="Call to Action" onClick={this.OpenHiddenContent} />
            </div>
        )
    }
}

//Content 5 to 8 Component
function ContentHidden() {
    return (
        <section id="content-hide" style="display: none">
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

// Combine All
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Welcome />
                <Content />
                <Button />
                <ContentHidden />
            </div>
        )
    }
}