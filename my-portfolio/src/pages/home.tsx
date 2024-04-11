import React from 'react';
import logo from '../logo.svg';
import '../App';
import MotionText from ".././components/motion-text";
import MotionDiv from ".././components/motion-div";
import ResponsiveAppBar from "../components/navigation-bar";

function HomePage() {
    return (
        <section className="my-8 flex flex-col items-center justify-center">
            <ResponsiveAppBar pages={["About me","Contact me"]}></ResponsiveAppBar>
            <h1 className="mb-4 text-[2rem] md:text-[4rem]">
                <MotionText delayOffset={0}>Hello Penguin👋</MotionText>
            </h1>
            <div className="overflow-hidden rounded-full p-3 md:p-4">
                <MotionDiv>
                    <video
                        className="h-[170px] w-[170px] md:h-[190px] md:w-[190px]"
                        muted
                        autoPlay
                        loop
                        playsInline
                    >
                        <source src={"/video.mp4"} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </MotionDiv>
            </div>
            <h1>
                <MotionDiv delayOffset={0.8}>Developer 🧑🏻‍💻</MotionDiv>
            </h1>
            <h1>
                <MotionDiv delayOffset={1}>I love animals 🐼🐨🐰🐧 </MotionDiv>
            </h1>
            <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
                <MotionDiv delayOffset={1.2}>
                    <p>Welcome to my personal page!</p>
                </MotionDiv>
                <MotionDiv delayOffset={1.4}>
                    <p>
                        Just an indie<b> ✨ TypeScript Full-Stack </b>developer who loves to
                        build something cool.
                    </p>
                </MotionDiv>
            </div>
            <div className="my-8">
                {/*<ContactList delayOffset={1.45} showWhenInView={false}/>*/}
            </div>
        </section>

    );
}

export default HomePage;