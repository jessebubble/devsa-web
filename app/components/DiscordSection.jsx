import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';
import { GridList, GridListItem } from '~/components/GridList';
import { Link } from '@remix-run/react';

export function DiscordSection() {
    return (
        <div className="mt-24 rounded-3xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
            <SectionIntro
                eyebrow="Let's Build Together"
                title="Where designers and developers connect in San Antonio"
                invert
            >
                <p className="text-balance">
                    We are a group of creatives and technologists who share a
                    common goal,
                    <span className="text-centroBlue">
                        {' '}
                        leverage the power of the web
                    </span>{' '}
                    to deliver exceptional user experiences. Come say hello and
                    join our official{' '}
                    <Link
                        to="https://discord.gg/f3gnmjScW3"
                        className="text-centroPink"
                    >
                        discord server
                    </Link>
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <GridList className="">
                    <GridListItem
                        title="Share your work"
                        invert
                        className="text-balance"
                    >
                        The user doesn't care what tools you use, and neither do
                        we. We want to celebrate your work, learn from it and
                        grow as designers or developers
                    </GridListItem>
                    <GridListItem
                        title="Ask for help"
                        invert
                        className="text-balance"
                    >
                        Our help forum aims to provide support by connecting the
                        worlds of design, marketing, web development, and
                        backend infrastructure
                    </GridListItem>
                    <GridListItem
                        title="Get inspired"
                        invert
                        className="text-balance"
                    >
                        We are a city rich in culture and creativity, and our
                        goal is to create a space that fosters unprecedented
                        connections among members of the tech community
                    </GridListItem>
                </GridList>
            </Container>
        </div>
    );
}
