import { PageIntro } from "~/components/PageIntro";
import { StoreSection } from "~/components/StoreSection";
import { ToolSection } from "~/components/ToolSection";
import { SponsorSection } from "~/components/SponsorSection";

export const metadata = {
    title: 'devSA Store',
    description: "web design and web development store in San Antonio, Texas. Join our community of creatives and technologists who share a common goal: leverage the power of the web to deliver exceptional user experiences"
};

export default function Sponsor() {
    return (
        <>
            <PageIntro
                eyebrow="Store"
                title="Coming Soon"
            >
                <p>
                    <span className="text-centroPink">Our goal is simple</span>,
                    create a platform that connects designers, marketing
                    agencies, and developers in San Antonio
                </p>
            </PageIntro>

            <StoreSection />
            <ToolSection />
            <SponsorSection />

        </>
    );
}
