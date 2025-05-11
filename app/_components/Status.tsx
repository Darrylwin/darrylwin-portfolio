import {Section} from "@/app/_components/Section";
import {Card} from "@/components/ui/card";
import {Code, LucideIcon, MessageCircle, Rss, StickyNote} from "lucide-react";
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
            <Card className="p-4 flex-1">Work</Card>
            <Card className="p-4 flex-1">Contact me</Card>
        </div>
    </Section>
}

const SIDE_PROJECTS = [
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
    return <Link
        href={props.url}
        className="inline-flex items-center gap-4 hover:bg-accent p-1 rounded-sm transition-all duration-200"
    >
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
            <props.Logo size={16}/>
        </span>
        <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
    </Link>
}