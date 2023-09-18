import type { V2_MetaFunction } from '@remix-run/node';
import { Container } from '~/components/Container'
import { FadeIn } from '~/components/FadeIn'
import { GridPattern } from '~/components/GridPattern'
import { GridList, GridListItem } from '~/components/GridList'
import { SectionIntro } from '~/components/SectionIntro'


export const meta: V2_MetaFunction = () => {
    return [
        { title: 'Dev San Antonio' },
        {
            name: 'Dev San Antonio',
            content: 'We are a group of creatives and technologists in San Antonio, Texas who share a common goal, leverage the power of the web to deliver exceptional user experiences',
        },
    ];
};

function Culture() {
    return (
        <div className="mt-24 rounded-3xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
            <SectionIntro
                eyebrow="Cut through the noise"
                title="Get laser-focused on what really matters"
                invert
            >
                <p>
                    We are a group of creatives and technologists who share a common goal,
                    <span className='text-centroBlue'> leverage the power of the web</span> to deliver exceptional user experiences
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <GridList className="">
                    <GridListItem title="Discord" invert className="">
                        The user doesn't care what tools you use and neither do we. 
                        Connect with us on discord, share your work, ask for help, and get inspired 
                    </GridListItem>
                    <GridListItem title="Events" invert className="">
                        The events space in San Antonio is expanding! 
                        From Adobe to Wordpress, SwiftUI, UX/UI, TailwindCSS, Remix, CI/CD, cloud, and more
                    </GridListItem>
                    <GridListItem title="Store" invert className="">
                        The easiest way to support the community. 
                        Every purchase helps cover the expenses for events, giveaways, and access to creative tools for the group
                    </GridListItem>
                </GridList>
            </Container>
        </div>
    )
}

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
                    Building a community for the modern web, one event at a time
                </h1>
                <p className="mt-6 text-xl text-neutral-600">
                    Beyond the billion-dollar industry that powers Military City, USA
                    is a community powered by web designers and developers in San Antonio who create online experiences on platforms that reach millions of people every day
                </p>
                </FadeIn>
            </Container>

            <Culture />

        </>
    )
} 