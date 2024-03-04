import ReactJSCL from "../SkillsSection/CodingLanguagesComponents/ReactJSCL";
import AxiosCL from "../SkillsSection/CodingLanguagesComponents/AxiosCL";
import TypescriptCL from "../SkillsSection/CodingLanguagesComponents/TypescriptCL";
import ExpressCL from "../SkillsSection/CodingLanguagesComponents/ExpressCL";
import NodeJSCL from "../SkillsSection/CodingLanguagesComponents/NodeJSCL";

export default function ProjectOne(){
    return (
        <div className="drop-shadow-xl bg-white p-5 rounded-3xl justify-center m-auto flex max-w-[55rem] hover:scale-105 transition-all mb-5 projectContainer">
            <div className="">
                <iframe
                    src="https://www.youtube.com/embed/eopEfoL5e4c"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={"rounded-2xl w-[22.5rem] h-[16.25rem] projectVideo drop-shadow-lg"}
                />
            </div>
            <div className="flex flex-col ml-8 projectDescription" >
                <h1 className="text-black font-bold">Mass General Brigham Map Kiosk</h1>
                <p className="text-black">With a team of 11, we applied the agile scrum methodology to create a
                    kiosk app to handle pathfinding and service requests. I led the frontend team as assistant lead
                    software developer spearheading version control and designing UI mockups through Figma.</p>

                <div className="flex mt-3 scale-90 flex-wrap">
                    <ReactJSCL/>
                    <div
                        className="bg-[#8477ff] text-white drop-shadow-md scale-95 mb-1 inline-block p-2 mr-1 pl-5 pr-5 rounded-full hover:bg-[#8459FF] hover:scale-100 transition-all ">
                        <p className="text-white font-semibold">PostgreSQL</p>
                    </div>
                    <div
                        className="bg-[#8477ff] text-white drop-shadow-md scale-95 mb-1 inline-block p-2 mr-1 pl-5 pr-5 rounded-full hover:bg-[#8459FF] hover:scale-100 transition-all ">
                        <p className="text-white font-semibold">AWS</p>
                    </div>
                    <AxiosCL/>
                    <TypescriptCL/>
                    <ExpressCL/>
                    <NodeJSCL/>
                </div>
            </div>
        </div>
    );
}