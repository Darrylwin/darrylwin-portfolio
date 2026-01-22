import { Badge, Section } from "lucide-react";
import { FlutterIcon } from "../icons/FlutterIcon";
import { Code } from "./Code";
import { NextJsIcon } from "../icons/NextJsIcon";
import { ClaudeIcon } from "../icons/ClaudeIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2">
          <FlutterIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">Flutter</h3>
          <p className="text-muted-foreground text-sm">
            My main framework is <Code>Flutter</Code>. I also use{" "}
            <Code>Next.Js</Code> as a frontend framework for web applications,
            <Code>Laravel</Code>, <Code>Nest.Js</Code> and <Code>Spring</Code>{" "}
            as backend frameworks depending on project context.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <NextJsIcon size={42} style={{ animationDuration: "10s" }} />
          <h3 className="text-2xl font-semibold tracking-tight">Next.Js</h3>
          <p className="text-muted-foreground text-sm">
            I can create <u>beautiful</u> and <u>performant</u> web applications
            using <Code>Next.Js</Code>
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <ClaudeIcon size={42} style={{ animationDuration: "10s" }} />
          <h3 className="text-2xl font-semibold tracking-tight">Claude</h3>
          <p className="text-muted-foreground text-sm">
            I&apos;m good at integrating AI features in your applications to
            create a perfect <u>user experience</u>.
          </p>
        </div>
      </div>
    </Section>
  );
};
