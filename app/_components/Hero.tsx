import {Section} from './Section';
import {FlutterIcon} from '../icons/FlutterIcon';
import Link from "next/link";
import { Code } from './Code';

export const Hero = () => {
    return (<Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-bold font-caption text-5xl text-primary">Darryl-win Logossou</h2>
            <h3 className="text-3xl font-caption">Full-Stack Web and Mobile Developer</h3>
            <p className="text-base">I am a young developer in computer schience degree at African Institute of Informatics - Togo, love developing
                with {" "}
                <Link href="https://flutter.dev">
                    <Code className="inline-flex items-center gap-1">
                        <FlutterIcon size={12} className="inline"/> Flutter
                    </Code>
                </Link>
                . Living in {" "}
                <Code className="inline-flex items-center gap-1">
                    <img
                        src="https://imgs.search.brave.com/O_I3FloMjp-HA7uAUe-9gsYTV-t58vFAEHagNDZfCUA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNzQvNTA3NC0w/NTAtNEJFN0I5Q0Iv/RmxhZy1Ub2dvLmpw/Zw"
                        alt="togo flag"
                        style={{width: 16, height: "auto"}}
                        className="inline"
                    /> Togo
                </Code>
                , Lomé.
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img
                src="https://avatars.githubusercontent.com/u/152020049?v=4"
                className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
                height="160"
                alt="Darryl-win's picture"
            />
        </div>
    </Section>);
}