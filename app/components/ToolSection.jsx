import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { Border } from '~/components/Border';
import logoAWS from '~/components/images/logos/aws.svg';
import logoOpenAI from '~/components/images/logos/openai.svg';
import logoDocker from '~/components/images/logos/docker.svg';
import logoIllustrator from '~/components/images/logos/illustrator.svg';
import logoPhotoshop from '~/components/images/logos/photoshop.svg';
import logoSwiftUI from '~/components/images/logos/swiftui.svg';
import logoReact from '~/components/images/logos/react.svg';
import logoTailwind from '~/components/images/logos/tailwind.svg';
import logoTypescript from '~/components/images/logos/typescript.svg';
import logoWordpress from '~/components/images/logos/wordpress.svg';
import logoPostgres from '~/components/images/logos/postgres.svg';
import logoPHP from '~/components/images/logos/php.svg';

const tools = [
    ['AWS', logoAWS],
    ['OpenAI', logoOpenAI],
    ['SwiftUI', logoSwiftUI],
    ['React', logoReact],
    ['Tailwind', logoTailwind],
    ['Photoshop', logoPhotoshop],
    ['Illustrator', logoIllustrator],
    ['Wordpress', logoWordpress],
    ['Docker', logoDocker],
    ['Postgres', logoPostgres],
    ['PHP', logoPHP],
    ['Typescript', logoTypescript],
];

export function ToolSection() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    Leveraging the power of our{' '}
                    <span className="text-spursPink">
                        tech community
                    </span>
                </h2>
            </FadeIn>
            <FadeInStagger className="mt-10" faster>
                <Border as={FadeIn} />
                <ul className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
                    {tools.map(([client, logo]) => (
                        <li key={client} className="group">
                            <FadeIn className="overflow-hidden">
                                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                                    <img
                                        src={logo}
                                        alt={client}
                                        className="w-16 md:w-20"
                                    />
                                </Border>
                            </FadeIn>
                        </li>
                    ))}
                </ul>
            </FadeInStagger>
        </Container>
    );
}
