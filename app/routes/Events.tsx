import RootPattern from '~/RootPattern';
import { CalendarSection } from '~/components/CalendarSection';
import { PageIntro } from '~/components/PageIntro';
import { SponsorSection } from '~/components/SponsorSection';
import { ToolSection } from '~/components/ToolSection';

export const metadata = {
    title: 'Design and Web Developer Events in San Antonio',
    description:
        'Stay up-to-date with the latest design and web development events in San Antonio, Texas. Join our community of creatives and technologists who share a common goal: leverage the power of the web to deliver exceptional user experiences',
};

export default function Events() {
    return (
        <>
            <RootPattern />
            <PageIntro
                eyebrow="Events"
                title="Building a community for creatives and technologists"
            >
                <p>
                    <span className="font-bold text-centroPink">devSA</span> is
                    a community of creatives and technologists who share a
                    common goal: leverage the power of the web to deliver
                    exceptional user experiences
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        Our goal is to create a platform that connects
                        designers, marketing agencies, mobile, web, and cloud
                        developers in San Antonio. The devSA platform creates an
                        opportunity to ask for help, share your work, and get
                        inspired by the work of others in the community
                    </p>
                    <p>
                        As our platform grows, our goal is to expand the events
                        space and fully utilize the power of the web. We want to
                        facilitate discussions on the tools, techniques, and
                        technologies that are shaping the future of design and
                        development for users in San Antonio and beyond
                    </p>
                </div>
            </PageIntro>
            <div className="mt-24 sm:mt-32 lg:mt-40">
                <div className="mt-16">
                    <CalendarSection />
                </div>
            </div>
            <ToolSection />
            <SponsorSection />
        </>
    );
}
