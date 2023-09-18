import type { V2_MetaFunction } from '@remix-run/node';
import { PageIntro } from '~/components/PageIntro';
import { Container } from '~/components/Container';
import { StatList, StatListItem } from '~/components/StatList';
import RootPattern from '~/RootPattern';

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
      <PageIntro eyebrow="About us" title="Beyond Military City, USA">
        <p>
          San Antonio has been leveraging the power of the web to grow it's footprint and establish the city as a destintion for the growing tech industry 
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Although Adobe and Wordpress power the branding and online experience for the city, 
            tech in San Antonio continues to be defined by Military City, USA
          </p>
          <p>
            We want to help reshape the future of design and technology by providing a platform that makes it easier for designers and developers 
            to connect, collaborate, and inspire each other to build a better web for everyone 
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Marketing Agencies" />
          <StatListItem value="52" label="React Developers" />
          <StatListItem value="25" label="AWS Developers" />
        </StatList>
      </Container>

      </>
  );
}