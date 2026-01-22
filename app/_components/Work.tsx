import Link from "next/link";

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  url: string;
  date: string;
};

export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url || "#"}
      target={props.url ? "_blank" : undefined}
      rel={props.url ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors duration-200 p-1 rounded-sm"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div className="mr-auto">
        <div className="flex-initial items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
