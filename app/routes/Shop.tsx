import { PageIntro } from "~/components/PageIntro";
import { ToolSection } from "~/components/ToolSection";
import { GridPattern } from "~/components/GridPattern";
import { DiscordSection } from "~/components/DiscordSection";
import { Button } from "~/components/Button";
import {CollectionSection} from "~/components/CollectionSection";

export default function Sponsor() {
    return (
        <>
            <GridPattern
                className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                yOffset={-96}
                interactive
            />
            <PageIntro
                eyebrow="Shop devSA"
                title="Wear the web and embrace the spirit of San Antonio"
            >
                <p>
                    Every purchase you make goes right back into our growing community! 
                    Your support helps cover our monthly costs and fuels the tools and services used to build for the tech community in SA
                </p>
                <Button
                    className="mt-8"
                    href="https://devsanantonio.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    invert={false}
                >
                    Visit the official shop &rarr;
                </Button>
            </PageIntro>
            <ToolSection />
            <CollectionSection />
            <DiscordSection />
        </>
    );
}
