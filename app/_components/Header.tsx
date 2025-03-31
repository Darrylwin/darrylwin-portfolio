import {Section} from "./Section";
import {Button} from "@/components/ui/button";

export const Header = () => {
    return (<header className="sticky top-10/12">
        <Section className="flex items-baseline">
            <h1 className="font-bold text-4xl">darryl-win.com</h1>
            <div className="flex-1/2">
                <Button className="size-6/12"></Button>
            </div>
        </Section>
    </header>)
}