import React from 'react';
import logo from '../logo.svg';
import '../App';
import ResponsiveAppBar from "../components/navigation-bar";
import MotionText from "../components/motion-text";
import ContaceMeForm from "../components/contactMeForm";

function ContactPage() {
    return (
        // <section
        //     id="about"
        //     className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
        // >

        <section className="flex flex-col items-center bg-[#0b0d26]">
            <ResponsiveAppBar pages={["About me", "Contact me"]}></ResponsiveAppBar>
            <h1 className="mb-4 text-[2rem] md:text-[4rem] text-white">
                <MotionText delayOffset={0}>Contact me</MotionText>
            </h1>
            <div className="mb-200">
                <ContaceMeForm/>
            </div>
            {/*<ContaceMeForm/>*/}
        </section>

    );
}

export default ContactPage;