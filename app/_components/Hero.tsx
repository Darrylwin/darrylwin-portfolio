import {Section} from './Section';
import {FlutterIcon} from '../icons/FlutterIcon';
import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
    return <span
        className={cn("font-mono border bg-accent hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 rounded-sm text-primary", className)} {...props}/>
}

export const Hero = () => {
    return (<Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[2] flex flex-col gap-2">
            <h2 className="font-bold font-caption text-5xl text-primary">Logossou Darryl-win</h2>
            <h3 className="text-3xl font-caption">Software Engineer</h3>
            <p className="text-base">I am a young developer in engineering training at IAI-Togo, love developing
                with {" "}
                <Link href="https://flutter.dev">
                    <Code className="inline-flex items-center gap-1">
                        <FlutterIcon size={12} className="inline"/> Flutter
                    </Code>
                </Link>, living in {" "}
                <Code className="inline-flex items-center gap-1">
                    <img
                        src="https://imgs.search.brave.com/O_I3FloMjp-HA7uAUe-9gsYTV-t58vFAEHagNDZfCUA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNzQvNTA3NC0w/NTAtNEJFN0I5Q0Iv/RmxhZy1Ub2dvLmpw/Zw"
                        alt="togo flag"
                        style={{width: 16, height: "auto"}}
                    /> Togo
                </Code>
                , Lomé.
            </p>
        </div>
        <div className="flex-1 max-md:m-auto ml-auto">
            <img
                src="https://imgs.search.brave.com/8BvIGnB9dkMwmNj4oMFZqFv93xAtbymrF4rc4BMC2f0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyMjYy/Njk4LmpwZw"
                className="w-40 h-40 rounded-full object-cover max-w-xs max-md:"
                height="160"
                alt="Darryl-win's picture"
            />
        </div>
    </Section>);
}