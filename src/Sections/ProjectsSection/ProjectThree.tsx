import PythonCL from "../SkillsSection/CodingLanguagesComponents/PythonCL";
import MediaPipe from "../../assets/mediapipe.png";

export default function ProjectThree() {
    function handleGithubProject3Link() {
        window.location.href = 'https://github.com/clam365/AI-Shoulder-Press-Rep-Counter';
    }
    return (
        <div
            className="drop-shadow-xl bg-white p-5 rounded-3xl justify-center m-auto flex max-w-[55rem] hover:scale-105 transition-all mb-5 projectContainer">
            <div className="">
                <img
                    src={MediaPipe}
                    alt={"Yolov5"}
                    className={"rounded-2xl w-[94rem] h-[16.25rem] projectVideo drop-shadow-lg cursor-pointer"}
                    onClick={handleGithubProject3Link}
                />
            </div>
            <div className="flex flex-col ml-8 projectDescription">
                <h1 className="text-black font-bold">Shoulder Press Repetition Counting System</h1>
                <p className="text-gray-500">Used deep learning frameworks MediaPipe and OpenCV to accurately detect and track shoulder press exercises.
                Using post estimation on 6 keypoint detections, this program accurately identifies the start and end of each shoulder press rep.</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <p className={"text-[#8477ff] cursor-pointer hover:text-[#8459FF] transition-all underline demoLinks"} onClick={handleGithubProject3Link}>Github Link</p>

                <div className="flex mt-3 scale-90 flex-wrap projectFrameworks">
                    <PythonCL/>
                    <div
                        className="bg-[#8477ff] text-white drop-shadow-md scale-95 mb-1 inline-block p-2 mr-1 pl-5 pr-5 rounded-full hover:bg-[#8459FF]">
                        <p className="text-white font-semibold">OpenCV</p>
                    </div>
                    <div
                        className="bg-[#8477ff] text-white drop-shadow-md scale-95 mb-1 inline-block p-2 mr-1 pl-5 pr-5 rounded-full hover:bg-[#8459FF]">
                        <p className="text-white font-semibold">Panda</p>
                    </div>
                    <div
                        className="bg-[#8477ff] text-white drop-shadow-md scale-95 mb-1 inline-block p-2 mr-1 pl-5 pr-5 rounded-full hover:bg-[#8459FF]">
                        <p className="text-white font-semibold">MediaPipe</p>
                    </div>
                </div>
            </div>
        </div>
    );
}