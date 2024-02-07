import imageComputer from "/images/image-computer.png";
import imageDevices from "/images/image-devices.png";

function Info() {
    return (
        <div className="flex flex-col items-center text-center gap-10">
            <div className="flex flex-col gap-10">
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

            <div className="flex gap-32 -translate-x-64">
                <div>
                    <img src={imageComputer} />
                </div>
                <div className="flex flex-col gap-20 justify-center text-left">
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
            <div className="flex flex-col gap-10">
                <h2 className="font-bold text-3xl">
                    Access Clipboard anywhere
                </h2>
                <p className="text-grayish_blue">
                    Whether you’re on the go, or at your computer, you can
                    access all your Clipboard snippets in a few simple clicks.
                </p>
                <img src={imageDevices} />
            </div>
        </div>
    );
}

export default Info;
