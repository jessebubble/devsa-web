import type { V2_MetaFunction } from '@remix-run/node';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { GridPattern } from '~/components/GridPattern';
import { DiscordSection } from '~/components/DiscordSection';
import { ToolSection } from '~/components/ToolSection';
import { CalendarSection } from '~/components/CalendarSection';
import { SponsorSection } from '~/components/SponsorSection';
import { BuildSection } from '~/components/BuildSection';

export const meta: V2_MetaFunction = () => {
    return [
        { title: 'Dev San Antonio' },
        {
            name: 'Dev San Antonio',
            content:
                'We are a group of creatives and technologists in San Antonio, Texas who share a common goal, leverage the power of the web to deliver exceptional user experiences',
        },
    ];
};

export default function Index() {
    return (
        <>
            <GridPattern
                className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                yOffset={-96}
                interactive
            />
            <Container className="mt-24 sm:mt-32 md:mt-40">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                        The city of SA is rich in culture and creativity <strong className="text-spursTurq">so is our tech stack</strong>
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600">
                        The goal of devSA is to initiate conversations and foster collaboration within the design, web development, and engineering community in San Antonio, Texas

                    </p>
                </FadeIn>
            </Container>

            <DiscordSection />
            <ToolSection />
            <BuildSection />
            <CalendarSection />
            <SponsorSection />
        </>
    );
}
