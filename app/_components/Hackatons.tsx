import { MBHIcon } from "../icons/MBHIcon";
import { MLHIcon } from "../icons/MLHIcon";
import { Code } from "./Code";
import { Section } from "./Section";

export const Hackatons = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I have participated to
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <MLHIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">
            MLH Hackaton
          </h3>
          <p className="text-muted-foreground text-sm">
            We developed an application for{" "}
            <u>submitting social abuse complaints</u>. We won <Code>3rd</Code>{" "}
            place.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <MBHIcon size={42} style={{ animationDuration: "10s" }} />
          <h3 className="text-2xl font-semibold tracking-tight">
            MIABE Hackaton
          </h3>
          <p className="text-muted-foreground text-sm">
            We designed a solution that{" "}
            <u>facilitates educational and professional guidance </u> while
            making <u>learning more accessible and interactive</u>.
          </p>
        </div>
      </div>
    </Section>
  );
};
