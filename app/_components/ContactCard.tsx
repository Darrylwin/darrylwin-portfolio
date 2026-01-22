import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
}) => {
    return (
        <Link href={props.url} target="_blank" rel="noopener noreferrer" className="w-full">
            <Card className="w-full hover:bg-accent/50 transition-colors duration-200 p-1 rounded-sm group">
                <div className="flex items-center justify-between gap-4 w-full">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                            <img src={props.image} alt="" className="w-10 h-10 rounded-md object-cover"/>
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
        </Link>
    );
}