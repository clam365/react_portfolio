import PythonCL from "../SkillsSection/CodingLanguagesComponents/PythonCL";
import Yolo from "../../assets/yolov5.png";

export default function ProjectTwo() {
    function handleGithubProjectLink() {
        window.location.href = 'https://github.com/clam365/AI-Shoulder-Press-Rep-Counter';
    }
    return (
        <div
            className="drop-shadow-xl bg-white p-5 rounded-3xl justify-center m-auto flex max-w-[55rem] hover:scale-105 transition-all mb-5 projectContainer">
            <div className="">
                <img
                    src={Yolo}
                    alt={"Yolov5"}
                    className={"rounded-2xl w-[67.5rem] h-[16.25rem] projectVideo drop-shadow-lg cursor-pointer"}
                    onClick={handleGithubProjectLink}
                />
            </div>
            <div className="flex flex-col ml-8 projectDescription">
                <h1 className="text-black font-bold">YoloV5 AI Object Detection & Recognition</h1>
                <p className="text-black">Using Ultralytic's YoloV5 algorithm, I trained and analyzed 20 different possible
                objects for recognition, where model evaluations contain an average of 79% confidence rate.</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <p className={"text-gray-400 cursor-pointer hover:text-[#8477ff] transition-all underline demoLinks"} onClick={handleGithubProjectLink}>Github Link</p>

                <div className="flex mt-3 scale-90 flex-wrap projectFrameworks">
                    <PythonCL/>
                    <div
                        className="bg-[#8477ff] text-white drop-shadow-md scale-95 mb-1 inline-block p-2 mr-1 pl-5 pr-5 rounded-full hover:bg-[#8459FF] hover:scale-100 transition-all ">
                        <p className="text-white font-semibold">OpenCV</p>
                    </div>
                    <div
                        className="bg-[#8477ff] text-white drop-shadow-md scale-95 mb-1 inline-block p-2 mr-1 pl-5 pr-5 rounded-full hover:bg-[#8459FF] hover:scale-100 transition-all ">
                        <p className="text-white font-semibold">Panda</p>
                    </div>
                    <div
                        className="bg-[#8477ff] text-white drop-shadow-md scale-95 mb-1 inline-block p-2 mr-1 pl-5 pr-5 rounded-full hover:bg-[#8459FF] hover:scale-100 transition-all ">
                        <p className="text-white font-semibold">Jupyter Notebook</p>
                    </div>
                    <div
                        className="bg-[#8477ff] text-white drop-shadow-md scale-95 mb-1 inline-block p-2 mr-1 pl-5 pr-5 rounded-full hover:bg-[#8459FF] hover:scale-100 transition-all ">
                        <p className="text-white font-semibold">Google Colab</p>
                    </div>

                </div>
            </div>
        </div>
    );
}