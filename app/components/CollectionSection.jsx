import { Container } from '~/components/Container'
import { FadeIn, FadeInStagger } from '~/components/FadeIn'
import { Border } from '~/components/Border'
import hemisfair from "~/components/images/collections/hemisfair.png"
import winter from "~/components/images/collections/winter.png"
import tee from "~/components/images/collections/tee.png"
import sweatshirt from "~/components/images/collections/sweatshirt.png"
import hat from "~/components/images/collections/hat.png"
import devsa from "~/components/images/collections/devsa.png"
import pins from "~/components/images/collections/pins.png"
import deno from "~/components/images/collections/deno.png"

const collections = [
    {
      title: 'Shop by Collection',
      people: [
        {
          name: "HemisFair'68",
          role: 'Collection',
          image: { src: hemisfair },
          href: '/collections/hemisfair-68',
        },
        {
          name: 'devSA',
          role: 'Collection',
          image: { src: devsa },
          href: '/collections/devsa-collection',
        },
        {
          name: 'Winter Wear',
          role: 'Collection',
          image: { src: winter },
          href: '/collections/winter-collection',
        },
      ],
    },
    {
      title: 'Shop by Category',
      people: [
        {
          name: 'Headwear',
          role: 'Category',
          image: { src: hat },
        },
        {
          name: 'T-Shirts',
          role: 'Category',
          image: { src: tee },
        },
        {
          name: 'Accessories',
          role: 'Category',
          image: { src: pins },
        },
        {
          name: 'Unisex Sweatshirts',
          role: 'Category',
          image: { src: sweatshirt },
        },
        {
          name: 'Premium Hoodies',
          role: 'Category',
          image: { src: deno },
        },
      ],
    },
  ]
  
 export function CollectionSection() {
    return (
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24">
          {collections.map((group) => (
            <FadeInStagger key={group.title}>
              <Border as={FadeIn} />
              <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                <FadeIn>
                  <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    {group.title}
                  </h2>
                </FadeIn>
                <div className="lg:col-span-3">
                  <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                  >
                    {group.people.map((person) => (
                      <li key={person.name}>
                        <FadeIn>
                          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                              <img
                                alt=""
                                {...person.image}
                                className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                              />
                              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                  {person.name}
                                </p>
                                <p className="mt-2 text-sm text-white">
                                  {person.role}
                                </p>
                              </div>
                          </div>
                        </FadeIn>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInStagger>
          ))}
        </div>
      </Container>
    )
  }
  