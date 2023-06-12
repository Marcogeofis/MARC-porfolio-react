import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { MySkills } from "../components/mySkills";
import { Lenguages } from "../components/lenguages";

function Skills(){
    return(
        <div className="flex justify-center items-center flex-col font-dosis">
            <Header />
            <section className="w-full flex justify-center items-center flex-col mt-12">
                <MySkills />
            </section>
            <section className="w-full flex justify-center items-center flex-col mt-12 md:mt-10">
                <Lenguages />
            </section>
            <Footer />
        </div>
    )
}

export {Skills};
