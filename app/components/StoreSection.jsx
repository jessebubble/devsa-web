import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';
import imageDevSA from '~/components/images/events/devsa.png';

const storeItems = [
    {
        href: '/store',
        imageURL: imageDevSA,
        title: 'devSA Tee',
        description:
            'Introducing the devSA Tee, a shirt for the modern designer and web developer in San Antonio',
        price: 'Coming Soon',
    },
    {
        href: '/store',
        imageURL: imageDevSA,
        title: 'devSA Sticker Pack',
        description:
            'Introducing the devSA Sticker Pack, a sticker pack for the modern designer and web developer in San Antonio',
        price: 'Coming Soon',
    },
    {
        href: '/store',
        imageURL: imageDevSA,
        title: 'devSA Coffee Mug',
        description:
            'Introducting the devSA Coffee Mug, a coffee mug for the modern designer and web developer in San Antonio',
        price: 'Coming Soon',
    },
];

export function StoreSection() {
    return (
        <>
            <SectionIntro
                title="Wear the web with our growing collection"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    Elevate your wardrobe and show the world that you're a force
                    in the digital realm. Wear the latest design and web
                    development trends before they become deprecated and
                    forgotten forever
                </p>
            </SectionIntro>

            <Container className="mt-16">
                <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {storeItems.map((item) => (
                        <FadeIn key={item.href} className="flex">
                            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                                <h3>
                                    <Link to={item.href}>
                                        <span className="absolute inset-0 rounded-3xl" />
                                        <img
                                            src={item.imageURL}
                                            alt=""
                                            className="h-auto w-full rounded-3xl"
                                        />
                                    </Link>
                                </h3>
                                <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
                                    {item.title}
                                </p>
                                <p className="mt-4 text-base text-neutral-600">
                                    {item.description}
                                </p>
                                <p className="mt-4 text-base text-centroPink">
                                    {item.price}
                                </p>
                            </article>
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </Container>
        </>
    );
}
