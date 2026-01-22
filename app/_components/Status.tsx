import {Section} from "@/app/_components/Section";
import {Card} from "@/components/ui/card";
import {ArrowUpRight, LucideIcon, CloudSun, Music2, MessagesSquare, UtensilsCrossed, Wallet} from "lucide-react";
import Link from "next/link";

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
                    image="https://avatars.githubusercontent.com/u/152020049?v=4"
                    mediumImage='https://www.vecteezy.com/free-vector/github-logo'
                    name={'@Darrylwin'} description="20 followers"
                />
                <ContactCard
                    image="https://avatars.githubusercontent.com/u/152020049?v=4"
                    mediumImage="https://imgs.search.brave.com/-qbPyJOKJWYj7H1DezyMrgBAdYPgoMHEAOQX0JYBDa0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbWVk/aWExLm5ocy53YWxl/cy9OV0lTV2FsZXNO/SFNVSy9jYWNoZS9m/aWxlLzdEOUE0NTUx/LTdCMkEtNEMyNC04/RUJBQzRBQ0M4NzBB/RkUwX21lZGl1bS5w/bmc"
                    name={'Logossou Darryl-win'} description="500 connections"
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
    return (
        <Card className="w-full hover:bg-accent/50 transition-colors duration-200 p-1 rounded-sm group">
            <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <img src={props.image} alt="" className="w-10 h-10 rounded-md object-contain"/>
                        <div className="absolute bottom-0 right-0 p-0.5 bg-transparent rounded-full">
                            <img src={props.mediumImage} alt="" className="w-4 h-4 object-contain"/>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{props.name}</p>
                        <p className="text-xs text-muted-foreground">{props.description}</p>
                    </div>
                </div>
                <ArrowUpRight size={16} />
            </div>
        </Card>
    );
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Music2, // Pour Spotify UI
        title: "Spot ui",
        description: "A clone of the mobile app of Spotify",
        url: "https://github.com/Darrylwin/spot__ui",
    },
    {
        Logo: MessagesSquare, // Pour l'app de chat
        title: "Minimal chat",
        description: "A minimal realtime chat application",
        url: "https://github.com/Darrylwin/minimal_chat",
    },
    {
        Logo: UtensilsCrossed, // Pour l'app de livraison de nourriture
        title: "Food delivery",
        description: "A Food delivery application",
        url: "https://github.com/Darrylwin/food_delivery",
    },
    {
        Logo: Wallet, // Pour l'app bancaire
        title: "Ega bank",
        description: "An application for managing payments",
        url: "https://github.com/Darrylwin/DjangoExposer",
    },
    {
        Logo: CloudSun, // Pour l'app de meteo
        title: "Weather app",
        description: "A weather tracking application",
        url: "https://github.com/Darrylwin/weather_app",
    },
    {
        Logo: CloudSun, // Pour l'app de meteo
        title: "Weather app",
        description: "A weather tracking application",
        url: "https://github.com/Darrylwin/weather_app",
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
                 className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors duration-200 p-1 rounded-sm">
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
        image: 'https://www.linkedin.com/in/darryl-win-logossou/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2FINz23lOQN26PPSoP1BMUg%3D%3D',
        title: 'Cyber AxD',
        role: 'Mobile Developer Intern',
        date: 'March 2025 - May 2025',
        url: ""
    },
    {
        image: 'acan.png',
        title: 'Digital Academy',
        role: 'Web Developer',
        date: 'June 2025 - January 2026',
        url: "https://acancampus.com"
    },
];

const Work = (props: WorkProps) => {
    return <Link href={props.url}
                 className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors duration-200 p-1 rounded-sm">
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
