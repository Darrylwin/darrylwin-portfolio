import {Section} from "./Section";
import {buttonVariants} from "@/components/ui/button";
import {GithubIcon} from "@/app/icons/GithubIcon";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {LinkedInIcon} from "@/app/icons/LinkedInIcon";

export const Header = () => {
    return (<header className="sticky top-0 py-4">
        <Section className="flex items-baseline">
            <h1 className="font-bold text-lg text-primary">darryl-win.com</h1>
            <div className="flex-1">
                <ul className="flex justify-end flex-items-center gap-2">
                    <Link href="https://github.com/Darrylwin"
                          className={cn(buttonVariants({variant: 'outline'}), "size-6 p-0")}>
                        <GithubIcon size={12} className="text-foreground"></GithubIcon>
                    </Link>
                    <Link href="https://www.linkedin.com/in/darryl-win-logossou-04b5502a6/"
                          className={cn(buttonVariants({variant: 'outline'}), "size-6 p-0")}>
                        <LinkedInIcon size={12} className="text-foreground"></LinkedInIcon>
                    </Link>
                </ul>
            </div>
        </Section>
    </header>)
}