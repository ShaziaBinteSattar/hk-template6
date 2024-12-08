export default function Footer() {
    return (
        <div className="footerpage">
            <div className="container">
                <div className="foot-boxes">
                <div className="foot-logo">
                    <h4>Funiro.</h4>
                    <div className="foot-content"><p>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</p></div>
                </div>
                <div className="foot-links">
                    <h6>Links</h6>
                    <div className="foot-content">
                        <ul className="foot-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="foot-links">
                    <h6>Help</h6>
                    <div className="foot-content">
                        <ul className="foot-menu">
                            <li><a href="#">Payment Options</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Privacy Policies</a></li>
                        </ul>
                    </div>
                </div>
                <div className="foot-links">
                    <h6>Newsletter</h6>
                    <div className="foot-content">
                        <div className="foot-input">
                            <input type="text" placeholder="Enter Your Email Address" /><button className="foot-btn-submit">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="foot-right-content">
                    <p>2023 furino. All rights reverved</p>
                </div>
            </div>
        </div>
    )
}