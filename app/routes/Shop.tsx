import { PageIntro } from "~/components/PageIntro";
import { ToolSection } from "~/components/ToolSection";
import { SponsorSection } from "~/components/SponsorSection";
import { GridPattern } from "~/components/GridPattern";
import { DiscordSection } from "~/components/DiscordSection";
import { Button } from "~/components/Button";
import { ShopCollection } from "~/components/ShopCollection";


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
                eyebrow="The devSA SHOP"
                title="Where tradition meets innovation"
            >
                <p>
                    <span className="text-centroPink">The devSA shop</span> celebrates the rich, Mexican-inspired culture and storied history of San Antonio by incorporating vibrant colors, captivating motifs, and authentic elements into every theme and design
                </p>
                <Button
                    className="mt-8"
                    href="https://devsanantonio.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    invert={false}
                >
                    Shop our latest collections &rarr;
                </Button>
            </PageIntro>
            
            <ShopCollection />
            <DiscordSection />
            <ToolSection />
            <SponsorSection />
        </>
    );
}
