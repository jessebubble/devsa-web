import type { MetaFunction } from '@remix-run/node';
import { PageIntro } from '~/components/PageIntro';
import RootPattern from '~/RootPattern';
import { ToolSection } from '~/components/ToolSection';

export const meta: MetaFunction = () => {
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
        </>
    );
}
