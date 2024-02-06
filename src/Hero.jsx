import logo from "../public/images/logo.svg";

function Hero() {
    return (
        <div className="hero bg-[url('/images/bg-header-mobile.png')] md:bg-[url('/images/bg-header-desktop.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center w-screen h-[40rem] gap-9 text-center px-10 md:px-0">
            <img src={logo} className="w-20 h-20" alt="Clipboard logo" />
            <h1 className="font-bold text-4xl">
                A history of everything you copy
            </h1>
            <p className="text-grayish_blue">
                Clipboard allows you to track and organize everything you copy.
                <br />
                Instantly access your clipboard on all your devices.
            </p>
            <div className="flex flex-col md:flex-row gap-10">
                <button className="bg-strong_cyan px-20 md:px-10 py-3 rounded-full text-white font-bold shadow-lg shadow-strong_cyan hover:bg-[#5cccba] transition">
                    Download for iOS
                </button>
                <button className="bg-light_blue px-20 md:px-10 py-3 rounded-full text-white font-bold shadow-lg shadow-light_blue hover:bg-[#8797ff] transition">
                    Download for Mac
                </button>
            </div>
        </div>
    );
}

export default Hero;
