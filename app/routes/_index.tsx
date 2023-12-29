import type { MetaFunction } from '@remix-run/node';
import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { GridPattern } from '~/components/GridPattern';
import { DiscordSection } from '~/components/DiscordSection';
import { ToolSection } from '~/components/ToolSection';
import { CalendarSection } from '~/components/CalendarSection';
import { SponsorSection } from '~/components/SponsorSection';
import { BuildSection } from '~/components/BuildSection';
import { SectionIntro } from '~/components/SectionIntro';
import { CollectionSection } from '~/components/CollectionSection';

import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getPosts } from "~/.server/posts";

export const loader = () => {
  const posts = getPosts();
  return json(posts.filter((post) => post.frontmatter.featured));
};
  
const BlogSection = () => {
    const featuredPosts = useLoaderData<typeof loader>();

    return (
      <>
        <SectionIntro
        eyebrow="Building in public"
          title="Let's build together San Antonio"
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            The user doesn't care which tools you use, and neither do we. 
            We want to celebrate your work, learn from it, and grow as a community. 
            If you have a project you'd like to share or a topic you'd like to discuss, we'd love to hear from you!
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <FadeIn className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                    <Link key={post.slug} to={post.slug}>
                      <span className="absolute inset-0 rounded-3xl" />
                      <img
                        src={post.frontmatter.heroImage}
                        alt={post.frontmatter.title}
                        className="h-16 w-16"
                      />
                    </Link>
                  </h3>
                  <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                    <time dateTime={post.frontmatter.published} className="font-semibold">
                      {new Date(post.frontmatter.published).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </time>
                    <span className="text-neutral-300" aria-hidden="true">
                      /
                    </span>
                    <span>Blog Post</span>
                  </p>
                  <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                    {post.frontmatter.title}
                  </p>
                  <p className="mt-4 text-base text-neutral-600">
                    {post.frontmatter.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </>
    )
}

  export const meta: MetaFunction = () => {
    return [
        { title: 'Dev San Antonio' },
        {
            name: 'Dev San Antonio',
            content:
                'We are a group of creatives and technologists in San Antonio, Texas who share a common goal, leverage the power of the web to deliver exceptional user experiences',
        },
    ];
};

export default function Index() {
    return (
        <>
            <GridPattern
                className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                yOffset={-96}
                interactive
            />
            <Container className="mt-24 sm:mt-32 md:mt-40">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 text-balance sm:text-7xl">
                        San Antonio is rich in culture and creativity <strong className="text-spursTurq">so is our tech stack</strong>
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600 text-balance">
                        The goal of devSA is to initiate conversations and foster collaboration within the design, web development, and engineering community in San Antonio, Texas
                    </p>
                </FadeIn>
            </Container>

            <DiscordSection />
            <ToolSection />
            <BlogSection />
            <CollectionSection />
            <CalendarSection />
            <SponsorSection />
        </>
    );
}
