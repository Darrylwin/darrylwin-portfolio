import {Header} from "@/app/_components/Header";
import {Hero} from "@/app/_components/Hero";
import {Spacing} from "@/app/_components/Spacing";
import {Status} from "@/app/_components/Status";
import { Skills } from "./_components/Skills";

export default function Home() {
    return <main>
        <Header/>
        <Spacing size="md"/>
        <Hero></Hero>
        <Spacing size="md"/>
        <Status></Status>
        <Spacing size="md"/>
        <Skills></Skills>
        <Spacing size="md"/>
    </main>
}
