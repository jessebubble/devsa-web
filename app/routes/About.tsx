import type { V2_MetaFunction } from '@remix-run/node';
import { PageIntro } from '~/components/PageIntro';
import { Container } from '~/components/Container';
import { StatList, StatListItem } from '~/components/StatList';
import RootPattern from '~/RootPattern';
import { DiscordSection } from '~/components/DiscordSection';
import { ToolSection } from '~/components/ToolSection';

export const meta: V2_MetaFunction = () => {
    return [
        { title: 'About Dev San Antonio' },
        {
            name: 'About Dev San Antonio',
            content:
                'Dev San Antonio aims to be a hub for envisioning the future of design and technology. We showcase the breadth and artistry of web design and development from our San Antonio community.',
        },
    ];
};

export default function About() {
    return (
        <>
            <RootPattern />
            <PageIntro
                eyebrow="About us"
                title="We are a community of creatives and technologists"
            >
                <p>
                    Leverage the power of the web to solve problems and deliver exceptional user experiences, it's what we do
                    
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        We aim to connect designers, marketing agencies, web developers, mobile, data and cloud
                        engineers in San Antonio through the various tools, resources and events we host and sponsor throughout the year 

                    </p>
                    <p>
                        Once connected, our platform creates an opportunity to leverage the power of our community to ask for help, share your work, and get inspired by the work of others in the community
                    </p>
                </div>
            </PageIntro>

            <DiscordSection />
            <ToolSection />
        </>
    );
}
