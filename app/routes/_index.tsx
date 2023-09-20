import type { V2_MetaFunction } from '@remix-run/node';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { GridPattern } from '~/components/GridPattern';
import { DiscordSection } from '~/components/DiscordSection';
import { ToolSection } from '~/components/ToolSection';
import { StoreSection } from '~/components/StoreSection';
import { CalendarSection } from '~/components/CalendarSection';
import { SponsorSection } from '~/components/SponsorSection';

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
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                        Because we believe that{' '}
                        <span className="text-centroPink">Tech in SA</span> is
                        more than just gov contracts
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600">
                        Beyond the billion-dollar industry that powers Military
                        City, USA is a community of designers, marketing
                        agencies and web developers in San Antonio creating
                        online experiences on platforms that reach millions of
                        people every day
                    </p>
                </FadeIn>
            </Container>

            <DiscordSection />
            <ToolSection />
            <CalendarSection />
            <StoreSection />
            <SponsorSection />
        </>
    );
}
