"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Java,go,js,ts,python</li>
                <li>Spring Boot,Jsp</li>
                <li>Gin,Fiber</li>
                <li>Websocket</li>
                <li>Kafka</li>
                <li>PostgreSQL,MySQL,Oracle,Redis</li>
                <li>Docker,Jenkins</li>
                <li>AwsService</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Silpakorn University in computer science GPA:3.52</li>
                <li>Fundamental level of courses for Vault Core v5.</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li
                    className="underline"
                ><Link
                    href="https://certificates.thoughtmachine.net/b946eead-14c7-4abc-a3f8-80ae4a78250f#acc.rqiUd1WM">Vault
                    Fundamentals
                </Link></li>
                <li
                    className="underline"
                ><Link href="https://www.credly.com/badges/621b7eac-0ff1-4048-baa2-7def1db35a6b/linked_in_profile">Docker
                    Essentials: A Developer Introduction</Link></li>
                <li
                    className=" underline"
                ><Link href="https://www.credly.com/badges/5007ee79-efe4-490c-995e-ef091ef5aea6/linked_in_profile">IBM Blockchain Essentials V2</Link></li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" width={500} height={500}/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Backend Developer with 2 year of experience in developing various types of applications. Skilled
                        in
                        a wide range of technologies and eager to contribute to challenging projects. Enjoys learning
                        new
                        things and works well with team members.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
