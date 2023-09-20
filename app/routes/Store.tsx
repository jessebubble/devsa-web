import { PageIntro } from "~/components/PageIntro";
import { StoreSection } from "~/components/StoreSection";
import { ToolSection } from "~/components/ToolSection";
import { SponsorSection } from "~/components/SponsorSection";
import { GridPattern } from "~/components/GridPattern";
import { DiscordSection } from "~/components/DiscordSection";

export const metadata = {
    title: 'devSA Store',
    description: "web design and web development store in San Antonio, Texas. Join our community of creatives and technologists who share a common goal: leverage the power of the web to deliver exceptional user experiences"
};

export default function Sponsor() {
    return (
        <>
            <GridPattern
                className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                yOffset={-96}
                interactive
            />
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
            
            <DiscordSection />
            <StoreSection />
            <ToolSection />
            <SponsorSection />

        </>
    );
}
