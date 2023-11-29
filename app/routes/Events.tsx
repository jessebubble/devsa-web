import RootPattern from '~/RootPattern';
import { BuildSection } from '~/components/BuildSection';
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
                title="Building a community, one event at a time"
            >
                <p>
                    The in-person meetup space in San Antonio continues to grow and we want you to be a part of it.
                    Let's show the city that <span className="text-spursTurq font-semibold">tech in SA</span> is more than just Military City, USA 
                </p>
            </PageIntro>

            <BuildSection />
            <ToolSection />
            <CalendarSection />
            <SponsorSection />
        </>
    );
}
