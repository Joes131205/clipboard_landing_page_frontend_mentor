import imageComputer from "/images/image-computer.png";
import imageDevices from "/images/image-devices.png";

import blacklist from "/images/icon-blacklist.svg";
import text from "/images/icon-text.svg";
import preview from "/images/icon-preview.svg";

import google from "/images/logo-google.png";
import ibm from "/images/logo-ibm.png";
import microsoft from "/images/logo-microsoft.png";
import hp from "/images/logo-hp.png";
import vectorGraphics from "/images/logo-vector-graphics.png";

function Info() {
    return (
        <div className="flex flex-col items-center text-center gap-20 md:gap-30 my-20">
            <div className="flex flex-col gap-10 px-10 md:px-0">
                <h2 className="font-bold text-3xl">
                    Keep track of your snippets
                </h2>
                <p className="text-grayish_blue">
                    Clipboard instantly stores any item you copy in the cloud,
                    meaning you can access your snippets immediately on all your
                    devices. Our Mac and iOS apps will help you organize
                    everything.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-32 md:-translate-x-64 px-10 md:px-0">
                <div className="flex flex-col items-center justify-center">
                    <img src={imageComputer} className="w-[30rem] md:w-auto" />
                </div>
                <div className="flex flex-col gap-10 md:gap-20 justify-center text-center md:text-left">
                    <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-2xl">Quick Search</h3>
                        <p className="text-grayish_blue">
                            Easily search your snippets by content, category,
                            web address, application, and more.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-2xl">iCloud Sync</h3>
                        <p className="text-grayish_blue">
                            Instantly saves and syncs snippets across all your
                            devices.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-2xl">Complete History</h3>
                        <p className="text-grayish_blue">
                            Retrieve any snippets from the first moment you
                            started using the app.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 px-10 md:px-0">
                <h2 className="font-bold text-3xl">
                    Access Clipboard anywhere
                </h2>
                <p className="text-grayish_blue">
                    Whether you’re on the go, or at your computer, you can
                    access all your Clipboard snippets in a few simple clicks.
                </p>
                <img src={imageDevices} />
            </div>

            <div className="flex flex-col items-center text-center gap-20 px-10 md:px-0">
                <div className="flex flex-col gap-10">
                    <h3 className="font-bold text-3xl">
                        Supercharge your workflow
                    </h3>
                    <p className="text-grayish_blue">
                        We’ve got the tools to boost your productivity.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                    <div className="flex flex-col gap-10 items-center justify-center text-center">
                        <img src={blacklist} className="w-14" />
                        <h4 className="font-bold text-2xl">
                            Create blacklists
                        </h4>
                        <p className="text-grayish_blue">
                            Ensure sensitive information never makes its way to
                            <br />
                            your clipboard by excluding certain sources.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 items-center justify-center text-center">
                        <img src={text} className="w-14" />
                        <h4 className="font-bold text-2xl">
                            Plain text snippets
                        </h4>
                        <p className="text-grayish_blue">
                            Remove unwanted formatting from copied text for a
                            <br />
                            consistent look.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 items-center justify-center text-center">
                        <img src={preview} className="w-14" />
                        <h4 className="font-bold text-2xl">Sneak preview</h4>
                        <p className="text-grayish_blue">
                            Quick preview of all snippets on your Clipboard for
                            <br />
                            easy access.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-40">
                <img src={google} className="w-40" />
                <img src={ibm} className="w-40" />
                <img src={microsoft} className="w-40" />
                <img src={hp} className="w-40" />
                <img src={vectorGraphics} className="w-40" />
            </div>

            <div className="flex flex-col items-center text-center gap-10 px-10">
                <h2 className="font-bold text-3xl">
                    Clipboard for iOS and Mac OS
                </h2>
                <p className="text-grayish_blue">
                    Available for free on the App Store. Download for Mac or
                    iOS, sync with iCloud and you’re ready to start adding to
                    your clipboard.
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
        </div>
    );
}

export default Info;
