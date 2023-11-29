import { Container } from '~/components/Container';
import { BlockQuote } from '~/components/BlockQuote';
import { FadeIn } from '~/components/FadeIn';
import { GridList, GridListItem } from '~/components/GridList';
import { GridPattern } from '~/components/GridPattern';
import { List, ListItem } from '~/components/List';
import { PageIntro } from '~/components/PageIntro';
import { SectionIntro } from '~/components/SectionIntro';
import { StylizedImage } from '~/components/StylizedImage';
import { TagList, TagListItem } from '~/components/TagList';
import youtube from '~/components/images/events/youtube.png';
import github from '~/components/images/events/github.png';
import twitch from '~/components/images/events/twitch.png';
import reddit from '~/components/images/events/reddit.png';

function Section({ title, image, children }) {
    return (
        <Container className="group/section [counter-increment:section]">
            <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center">
                    <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                        <StylizedImage
                            {...image}
                            sizes="(min-width: 1024px) 41rem, 31rem"
                            className="justify-center lg:justify-end lg:group-even/section:justify-start"
                        />
                    </FadeIn>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                    <FadeIn>
                        <div
                            className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                            aria-hidden="true"
                        />
                        <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                            {title}
                        </h2>
                        <div className="mt-6">{children}</div>
                    </FadeIn>
                </div>
            </div>
        </Container>
    );
}

function Github() {
    return (
        <Section title="Github" image={{ src: github }}>
            <div className="space-y-6 text-base text-neutral-600">
                <p>
                    Join us on the world's largest developer platform to build for the community. 
                    GitHub helps developers and engineers collaborate more{' '}
                    <strong className="font-semibold text-neutral-950">
                        efficiently
                    </strong>{' '}
                    together 
                </p>
                <p>
                    GitHub Discussions creates space to ask questions and have open-ended conversations with the devSA community 
                </p>
                <p>
                    Pull requests are fundamental to how teams review and improve code on GitHub. Evolve projects, propose new features, and discuss implementation details before changing your source code 
                </p>
            </div>

            <h3 className="font-display mt-12 text-base font-semibold text-neutral-950">
                Let's get started
            </h3>
            <TagList className="mt-4">
                <TagListItem>Generative AI</TagListItem>
                <TagListItem>Explore Frameworks</TagListItem>
                <TagListItem>Learn a new language</TagListItem>
                <TagListItem>Machine Learning</TagListItem>
                <TagListItem>Open Source Fridays</TagListItem>
            </TagList>
        </Section>
    );
}

function Twitch() {
    return (
        <Section title="Build" image={{ src: twitch, shape: 1 }}>
            <div className="space-y-6 text-base text-neutral-600">
                <p>
                    Based on the discovery phase, we create a comprehensive
                    roadmap for each product and begin working towards its
                    delivery. The roadmap may appear complex and technical, but
                    its purpose is to ensure a thorough project execution
                </p>
                <p>
                    To facilitate effective communication, each client is
                    assigned a key account manager who acts as a liaison between
                    the client and the development team. This helps manage
                    client expectations and allows the development team to focus
                    on their work, which includes exploring open source projects
                    for reusable code
                </p>
                <p>
                    Our account managers are trained to respond to client emails
                    several days after the initial email, typically after 9pm.
                    This deliberate delay creates the perception of a busy
                    schedule and discourages clients from making frequent change
                    requests
                </p>
            </div>

            <BlockQuote
                author={{ name: 'Elton John', role: 'CEO of Rocketman' }}
                className="mt-12"
            >
                Viva Web Design were so regular with their progress updates we
                almost began to think they were automated!
            </BlockQuote>
        </Section>
    );
}

function Reddit() {
    return (
        <Section title="Deliver" image={{ src: reddit, shape: 2 }}>
            <div className="space-y-6 text-base text-neutral-600">
                <p>
                    About halfway through the Build phase, we extend the
                    timeline for each project by 6 weeks due to a change in{' '}
                    <strong className="font-semibold text-neutral-950">
                        requirements
                    </strong>
                    . This allows us to make a final budget increase before
                    launch
                </p>
                <p>
                    Despite heavily relying on pre-built components, the
                    majority of{' '}
                    <strong className="font-semibold text-neutral-950">
                        progress
                    </strong>{' '}
                    on each project occurs in the final 24 hours. The
                    development time allocated to each client is actually spent
                    creating augmented reality demos that become viral on
                    Twitter
                </p>
                <p>
                    We ensure that the main pages of the site are{' '}
                    <strong className="font-semibold text-neutral-950">
                        fully functional
                    </strong>{' '}
                    upon launch. However, the auxiliary pages will initially
                    consist of placeholder text (lorem ipusm), which will be
                    updated as part of our thorough{' '}
                    <strong className="font-semibold text-neutral-950">
                        maintenance
                    </strong>{' '}
                    retainer
                </p>
            </div>

            <h3 className="font-display mt-12 text-base font-semibold text-neutral-950">
                Included in this phase
            </h3>
            <List className="mt-8">
                <ListItem title="Testing">
                    Our projects always have 100% test coverage, which would be
                    impressive if our tests weren't so full of holes
                </ListItem>
                <ListItem title="Infrastructure">
                    To ensure reliability, we only use the best Digital Ocean
                    droplets that $4 a month can buy
                </ListItem>
                <ListItem title="Support">
                    Since we possess the API keys for all the essential services
                    your business utilizes, you can rely on us for ongoing
                    support and invoicing throughout your entire business
                    journey
                </ListItem>
            </List>
        </Section>
    );
}

export function BuildSection() {
    return (
        <>
            <PageIntro
                eyebrow="More than just a discord server"
                title="Supercharge collaboration"
            >
                <p>
                    We have various social channels, such as GitHub, Twitch, and in-person meetups, in place to showcase the diversity of the creative and development community in San Antonio
                </p>
            </PageIntro>

            <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
                <Github />
                <Twitch />
                <Reddit />
            </div>
        </>
    );
}