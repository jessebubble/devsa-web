import type { V2_MetaFunction } from '@remix-run/node';
import { PageIntro } from '~/components/PageIntro';
import { Container } from '~/components/Container';
import { StatList, StatListItem } from '~/components/StatList';
import RootPattern from '~/RootPattern';
import { DiscordSection } from '~/components/DiscordSection';

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
      <PageIntro eyebrow="About us" title="We are an essential part of the tech ecosystem in SA">
        <p>
          <span className="text-centroBlue font-bold">devSA</span> is a community of creatives and technologists who share a common goal: 
          leverage the power of the web to deliver exceptional user experiences 
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Our goal is to create a platform that connects designers, marketing agencies, mobile, web, and cloud developers in San Antonio. 
            The devSA platform creates an opportunity to ask for help, share your work, and get inspired by the work of others in the community
          </p>
          <p>
            As our platform grows, our goal is to expand the events space and fully utilize the power of the web. 
            We want to facilitate discussions on the tools, techniques, and technologies that are shaping the future of design and development for users in San Antonio and beyond
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="128" label="Digital Marketers" />
          <StatListItem value="432" label="Software Developers" />
          <StatListItem value="82" label="iOS Engineers" />
        </StatList>
      </Container>

      <DiscordSection />

      </>
  );
}