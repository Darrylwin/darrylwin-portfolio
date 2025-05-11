import {Section} from "@/app/_components/Section";
import {Card} from "@/components/ui/card";
import {ArrowUpRight, Code, LucideIcon, MessageCircle, Rss, StickyNote} from "lucide-react";
import Link from "next/link";

export const Status = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className="w-full p-4 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Fun, side projects</p>
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
                    image="https://avatars.githubusercontent.com/u/152020049?v=4"
                    mediumImage='https://imgs.search.brave.com/CNRbeBm5CtoHq7I5qa_MxoFeYuisjeVzC7omXyes0Jw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY5MDY0MzU5/MXR3aXR0ZXIteC1s/b2dvLXBuZy5wbmc'
                    name={'@Darrylwin'} description="20"
                />
                <ContactCard
                    image="https://avatars.githubusercontent.com/u/152020049?v=4"
                    mediumImage="https://imgs.search.brave.com/-qbPyJOKJWYj7H1DezyMrgBAdYPgoMHEAOQX0JYBDa0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbWVk/aWExLm5ocy53YWxl/cy9OV0lTV2FsZXNO/SFNVSy9jYWNoZS9m/aWxlLzdEOUE0NTUx/LTdCMkEtNEMyNC04/RUJBQzRBQ0M4NzBB/RkUwX21lZGl1bS5w/bmc"
                    name={'Logossou Darryl-win'} description="50"
                />
            </Card>
        </div>
    </Section>
}

const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
}) => {
    return <Card className="p-3 bg-accent/10 flex items-center gap-4">
        <div className="relative">
            <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain"/>
            <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1"/>
        </div>
        <div className="mr-auto">
            <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">{props.name}</p>
            </div>
            <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight size={16}/>
    </Card>
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "Spot ui",
        description: "A clone of the mobile app of Spotify",
        url: "https://github.com/Darrylwin/spot__ui",
    },
    {
        Logo: StickyNote,
        title: "Minimal chat",
        description: "A minimal chat app",
        url: "https://github.com/Darrylwin/minimal_chat",
    },
    {
        Logo: Rss,
        title: "Food delivery",
        description: "A Food delivry app",
        url: "https://github.com/Darrylwin/food_delivery",
    },
    {
        Logo: MessageCircle,
        title: "Banking app",
        description: "An app for managing paiements",
        url: "https://github.com/Darrylwin/DjangoExposer",
    },
];

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
}

const SideProject = (props: SideProjectProps) => {
    return <Link href={props.url}
                 className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded-sm">
    <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16}/>
    </span>
        <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
    </Link>
}

type WorkProps = {
    image: string;
    title: string;
    role: string;
    url: string;
    date: string;
}

const WORKS: WorkProps[] = [
    {
        image: 'https://imgs.search.brave.com/N9jywr_ShWSoik-WDqt-LBV9MA0JyIYfDqdroKl1eZg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ29vZGZpcm1z/LmNvL3NlcnZpY2Vz/L21lZGl1bS9jb2Rl/bHlueC1zb2Z0d2Fy/ZS5wbmc',
        title: 'Codelynx',
        role: 'Funder',
        date: '2023 - Present',
        url: "https://codelyns.dev"
    }
];

const Work = (props: WorkProps) => {
    return <Link href={props.url}
                 className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded-sm">
        <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md"/>

        <div className="mr-auto">
            <div className="flex-initial items-center gap-2">
                <p className="text-lg font-semibold">{props.title}</p>
            </div>
            <p className="text-xs text-muted-foreground">{props.role}</p>
        </div>
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
}