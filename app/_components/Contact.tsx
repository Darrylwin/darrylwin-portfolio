import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          image="https://avatars.githubusercontent.com/u/152020049?v=4"
          mediumImage="https://imgs.search.brave.com/KmRpD321TmE0JQpHaWXLrhFylED1swYNhGJSxKGnuJE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/MS8yOS8yMi81My95/YWhvby03NjY4NF82/NDAucG5n"
          name={"logossoudarryl@yahoo.com"}
          description="Email me for any inquiries"
          url="mailto:logossoudarryl@yahoo.com"
        />
        <ContactCard
          image="https://avatars.githubusercontent.com/u/152020049?v=4"
          mediumImage="https://imgs.search.brave.com/bncIify__JQ7O0jcPgJdClApUSAs7hc9SHKjjD6T5FY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2xv/YmVodWIvbG9iZS1p/Y29ucy9yZWZzL2hl/YWRzL21hc3Rlci9w/YWNrYWdlcy9zdGF0/aWMtcG5nL2Rhcmsv/Z2l0aHViLnBuZw"
          name={"@Darrylwin"}
          description="20 followers"
          url="https://github.com/Darrylwin"
        />
        
        <ContactCard
          image="https://avatars.githubusercontent.com/u/152020049?v=4"
          mediumImage="https://imgs.search.brave.com/-qbPyJOKJWYj7H1DezyMrgBAdYPgoMHEAOQX0JYBDa0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbWVk/aWExLm5ocy53YWxl/cy9OV0lTV2FsZXNO/SFNVSy9jYWNoZS9m/aWxlLzdEOUE0NTUx/LTdCMkEtNEMyNC04/RUJBQzRBQ0M4NzBB/RkUwX21lZGl1bS5w/bmc"
          name={"Darryl-win L."}
          description="500 connections"
          url="https://www.linkedin.com/in/darryl-win-logossou"
        />
      </div>
    </Section>
  );
};
