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
                title="Let's build together, one event at a time"
            >
                <p>
                    <span className="text-spursPink">devSA</span> is
                    a community of creatives and technologists who share a
                    common goal, leverage the power of the web to deliver
                    exceptional user experiences
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        As our platform expands, our goal is to grow the events space and harness the full power of the web to showcase the wide range and creativity of web design and development within our San Antonio community
                    </p>
                    <p>
                        Join us in person, on Twitch, or on YouTube. We are always looking for new ways to connect and share the work and knowledge of our community in San Antonio
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
