import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';
import imageDevSAFanny from '~/components/images/events/devsa-fanny.png';
import imageDevSABeanie from '~/components/images/events/devsa-beanie.png';
import imageDevSAPoster from '~/components/images/events/devsa-poster.png';
import imageDevSATee from '~/components/images/events/devsa-tee.png';
import imageDevSAHat from '~/components/images/events/devsa-hat.png';
import imageDevSADrink from '~/components/images/events/devsa-drink.png';

const storeItems = [
    {
        href: 'https://devsa-shop-06ad2b729b66f83f3d54.o2.myshopify.dev/products/champion-fanny-pack',
        imageURL: imageDevSAFanny,
        title: 'Champion Fanny Pack',
        description:
            'Introducing the devSA fanny pack, a champion fanny pack for the modern designer and web developer in San Antonio',
        price: '$29.99',
    },
    {
        href: 'https://devsa-shop-06ad2b729b66f83f3d54.o2.myshopify.dev/products/pom-pom-beanie',
        imageURL: imageDevSABeanie,
        title: 'Pom-Pom Beanie',
        description:
            'Introducing the devSA beanie, a pom-pom beanie for the modern designer and web developer in San Antonio',
        price: '$22.99',
    },
    {
        href: 'https://devsa-shop-06ad2b729b66f83f3d54.o2.myshopify.dev/products/unisex-garment-dyed-heavyweight-t-shirt?Color=Black&Size=S',
        imageURL: imageDevSATee,
        title: 'Unisex Heavyweight Tee',
        description:
            'Introducing the devSA Tee, a t-shirt for the modern designer and web developer in San Antonio',
        price: '$24.99',
    },
    {
        href: 'https://devsa-shop-06ad2b729b66f83f3d54.o2.myshopify.dev/products/dad-hat?Color=Black',
        imageURL: imageDevSAHat,
        title: 'Classic Dad Hat',
        description:
            'Introducing the devSA hat, a classic dad hat for the modern designer and web developer in San Antonio',
        price: '$24.99',
    },
    {
        href: 'https://devsa-shop-06ad2b729b66f83f3d54.o2.myshopify.dev/products/shaker-pint-glass',
        imageURL: imageDevSADrink,
        title: 'Shaker Pint Glass',
        description:
            'Introducing the devSA pint glass, a shaker pint glass for the modern designer and web developer in San Antonio',
        price: '$18.99',
    },
    {
        href: 'https://devsa-shop-06ad2b729b66f83f3d54.o2.myshopify.dev/products/framed-poster?Color=Black',
        imageURL: imageDevSAPoster,
        title: 'Framed Poster',
        description:
            'Introducing the devSA poster, a framed poster for the modern designer and web developer in San Antonio',
        price: '$32.99',
    },
];

export function ShopCollection() {
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
