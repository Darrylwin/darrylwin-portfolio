import {Section} from './Section';

export const Hero = () => {
    return (<Section className="flex max-md:flex-col items-start">
        <div className="flex-[2]">
            <h2 className="font-caption">Logossou Darryl-win</h2>
            <h3>Software Engineer</h3>
            <p>Je suis un jeûne développeur en formation d&#39;ingénierie à l&#39;IAI-Togo</p>
        </div>
        <div className="flex-1">
            <img
                src="https://imgs.search.brave.com/8BvIGnB9dkMwmNj4oMFZqFv93xAtbymrF4rc4BMC2f0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyMjYy/Njk4LmpwZw"
                className="w-40 h-40 rounded-full object-cover"
                alt="Darryl-win's picture"
            />
        </div>
    </Section>);
}