import type { V2_MetaFunction } from '@remix-run/node';
import { PageIntro } from '~/components/PageIntro';
import { Container } from '~/components/Container';
import { StatList, StatListItem } from '~/components/StatList';
import RootPattern from '~/RootPattern';
import { DiscordSection } from '~/components/DiscordSection';
import { ToolSection } from '~/components/ToolSection';
import { BuildSection } from '~/components/BuildSection';

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
                title="Where the tech community goes to share their work, ask for help and get inspired"
            >
                <p>
                    The goal of devSA is to initiate conversations and foster collaboration within the design, web development, and engineering community in San Antonio, Texas                    
                </p>
            </PageIntro>
            <ToolSection />
            <BuildSection />
        </>
    );
}
