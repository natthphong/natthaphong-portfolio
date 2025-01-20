import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    const [isImageVisible, setIsImageVisible] = useState(false);

    const toggleImageVisibility = () => {
        setIsImageVisible(!isImageVisible);
    };

    const closeImage = (e) => {
        if (e.target.id === "image-overlay") {
            setIsImageVisible(false);
        }
    };

    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
                <div
                    className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
                >
                    {gitUrl !== "/" && (
                        <Link
                            href={gitUrl}
                            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        >
                            <CodeBracketIcon
                                className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"
                            />
                        </Link>
                    )}
                    <button
                        onClick={toggleImageVisibility}
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </button>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
            {isImageVisible && (
                <div
                    id="image-overlay"
                    onClick={closeImage}
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                >
                    <img
                        src={previewUrl}
                        alt={title}
                        className="max-w-full max-h-full rounded-lg"
                    />
                    <button
                        onClick={toggleImageVisibility}
                        className="absolute top-4 right-4 text-white text-2xl font-bold"
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
