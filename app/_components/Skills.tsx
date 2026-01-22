import { FlutterIcon } from "../icons/FlutterIcon";
import { Code } from "./Code";
import { NextJsIcon } from "../icons/NextJsIcon";
import { ClaudeIcon } from "../icons/ClaudeIcon";
import { Section } from "./Section";
import { NestJsIcon } from "../icons/NestJsIcon";
import { LaravelIcon } from "../icons/LaravelIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <FlutterIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Flutter</h3>
          <p className="text-muted-foreground text-sm">
            My <u>main</u> framework is <Code>Flutter</Code> for <u>mobile</u> development.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <NextJsIcon size={42} style={{ animationDuration: "10s" }} />
          <h3 className="text-2xl font-semibold tracking-tight">Next.Js</h3>
          <p className="text-muted-foreground text-sm">
            I can create <u>beautiful</u> and <u>performant</u> web interfaces
            using <Code>Next.Js</Code>.
          </p>
        </div>
        
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-3">
            <NestJsIcon size={42} style={{ animationDuration: "10s" }} />
            <LaravelIcon size={42} style={{ animationDuration: "10s" }} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Nest.Js and Laravel</h3>
          <p className="text-muted-foreground text-sm">
            I can create <u>efficient</u> and <u>scalable</u> backend applications
            using <Code>Nest.Js</Code> and <Code>Laravel</Code>.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <ClaudeIcon size={42} style={{ animationDuration: "10s" }} />
          <h3 className="text-2xl font-semibold tracking-tight">Claude</h3>
          <p className="text-muted-foreground text-sm">
            I&apos;m good at integrating <u>AI</u> features in your applications to
            create a perfect <u>user experience</u>.
          </p>
        </div>
      </div>
    </Section>
  );
};
