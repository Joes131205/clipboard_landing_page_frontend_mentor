import logo from "/public/images/logo.svg";

import twitter from "/public/images/icon-twitter.svg";
import facebook from "/public/images/icon-facebook.svg";
import instagram from "/public/images/icon-instagram.svg";
function Footer() {
    return (
        <div className="w-screen h-52 bg-light_gray">
            <div>
                <img src={logo} className="w-20 h-20" alt="Clipboard logo" />
            </div>
            <div>
                <a href=""></a>
                <a href=""></a>
            </div>
            <div>
                <a href=""></a>
                <a href=""></a>
            </div>
            <div>
                <img
                    src={twitter}
                    className="hover:fill-[rgba(36,187,164,255)]"
                />
                <img src={facebook} />
                <img src={instagram} />
            </div>
        </div>
    );
}

export default Footer;
