import {Section} from "@/app/_components/Section";
import {Card} from "@/components/ui/card";
import {CloudSun, Music2, MessagesSquare, Brain, Globe, Lock, UtensilsCrossed} from "lucide-react";
import { SideProject, SideProjectProps } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { Work, WorkProps } from "./Work";

export const Status = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className="w-full p-4 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Fun projects</p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.map((project, index) => (
                        <SideProject
                            key={index}
                            Logo={project.Logo}
                            title={project.title}
                            description={project.description}
                            url={project.url}
                        />
                    ))}
                </div>
            </Card>
        </div>
        <div className="flex-[2] w-full flex flex-col gap-4">
            <Card className="p-4 flex-1"><p className="text-lg text-muted-foreground">Work</p>
                <div className="flex flex-col gap-4">
                    {WORKS.map((work, index) => (
                        <Work
                            key={index}
                            {...work}
                        />
                    ))}
                </div>
            </Card>
            <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Contact me</p>
                <ContactCard
                    image="profile.jpeg"
                    mediumImage="https://imgs.search.brave.com/-qbPyJOKJWYj7H1DezyMrgBAdYPgoMHEAOQX0JYBDa0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbWVk/aWExLm5ocy53YWxl/cy9OV0lTV2FsZXNO/SFNVSy9jYWNoZS9m/aWxlLzdEOUE0NTUx/LTdCMkEtNEMyNC04/RUJBQzRBQ0M4NzBB/RkUwX21lZGl1bS5w/bmc"
                    name={'Darryl-win Logossou'} description="500 connections"
                    url="https://www.linkedin.com/in/darryl-win-logossou"
                />
                <ContactCard
                    image="https://avatars.githubusercontent.com/u/152020049?v=4"
                    mediumImage='https://imgs.search.brave.com/bncIify__JQ7O0jcPgJdClApUSAs7hc9SHKjjD6T5FY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2xv/YmVodWIvbG9iZS1p/Y29ucy9yZWZzL2hl/YWRzL21hc3Rlci9w/YWNrYWdlcy9zdGF0/aWMtcG5nL2Rhcmsv/Z2l0aHViLnBuZw'
                    name={'@Darrylwin'} description="30 followers"
                    url="https://github.com/Darrylwin"
                />
            </Card>
        </div>
    </Section>
}

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Lock,
    title: "SecVault",
    description: "A secure mobile vault for sharing private files with controlled access.",
    url: "https://github.com/Darrylwin/Secvault",
  },
  {
    Logo: Brain,
    title: "Orientys",
    description: "An AI-driven orientation platform for students in the digital field.",
    url: "https://orientys.acancampus.com",
  },
  {
    Logo: Globe,
    title: "Wuas net",
    description: "A classified ads platform built for a real client with validation workflows.",
    url: "https://wuas.net",
  },
  {
    Logo: UtensilsCrossed,
    title: "Foodie",
    description: "A food delivery application.",
    url: "https://www.linkedin.com/posts/darryl-win-logossou_flutter-supabase-mvp-activity-7304823172762071040-Oomb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnDcTsBtq1rpHagrdvd1uPwY4-7Pc3j2R0",
  },
  {
    Logo: MessagesSquare,
    title: "Minimal Chat",
    description: "A minimal real-time messaging application.",
    url: "https://github.com/Darrylwin/minimal_chat",
  },
  {
    Logo: Music2,
    title: "Spot UI",
    description: "A mobile UI clone inspired by Spotify.",
    url: "https://www.linkedin.com/posts/darryl-win-logossou_apprentissage-daezveloppementpersonnel-technologie-activity-7231609204556406784-fmN2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnDcTsBtq1rpHagrdvd1uPwY4-7Pc3j2R0",
  },
  {
    Logo: CloudSun,
    title: "Weatherly",
    description: "A clean and simple weather tracking application.",
    url: "https://github.com/Darrylwin/weather_app",
  },
];


const WORKS: WorkProps[] = [
    {
        image: 'acan.png',
        title: 'ACAN',
        role: 'Web Developer',
        date: 'June 2025 - January 2026',
        url: "https://acancampus.com"
    },
    {
        image: 'https://www.linkedin.com/in/darryl-win-logossou/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2FINz23lOQN26PPSoP1BMUg%3D%3D',
        title: 'Cyber AxD',
        role: 'Mobile Developer Intern',
        date: 'March 2025 - May 2025',
        url: ""
    },
];