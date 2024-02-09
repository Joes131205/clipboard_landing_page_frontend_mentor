import logo from "/public/images/logo.svg";

import twitter from "/public/images/icon-twitter.svg";
import facebook from "/public/images/icon-facebook.svg";
import instagram from "/public/images/icon-instagram.svg";
function Footer() {
    return (
        <div className="w-screen h-80 md:h-52 bg-light_gray flex flex-col md:flex-row justify-center md:justify-around items-center gap-5 md:gap-20">
            <div className="flex flex-col md:flex-row text-center gap-3 md:gap-10">
                <div className="flex flex-col items-center justify-center">
                    <img src={logo} className="w-10" alt="Clipboard Logo" />
                </div>

                <div className="flex flex-col gap-5 md:gap-5">
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        className="hover:text-strong_cyan "
                    >
                        FAQs
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        className="hover:text-strong_cyan "
                    >
                        Contact Us
                    </a>
                </div>
                <div className="flex flex-col gap-5 md:gap-5">
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        className="hover:text-strong_cyan "
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        className="hover:text-strong_cyan "
                    >
                        Press Kit
                    </a>
                </div>
                <div className="flex flex-col gap-5 md:gap-5">
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        className="hover:text-strong_cyan "
                    >
                        Install Guide
                    </a>
                </div>
            </div>

            <div className="flex gap-10 items-center justify-center">
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                >
                    <img src={twitter} alt="Twitter Logo" />
                </a>
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                >
                    <img src={facebook} className="Facebook Logo" />
                </a>
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                >
                    <img src={instagram} alt="Instagram Logo" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
