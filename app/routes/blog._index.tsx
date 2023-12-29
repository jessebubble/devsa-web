import { json } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';

import { getPosts } from '~/.server/posts';
import { Border } from '~/components/Border';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { PageIntro } from '~/components/PageIntro';

export const loader = () => {
    const posts = getPosts();
    return json(posts);
};

export default function BlogIndex() {
    const posts = useLoaderData<typeof loader>();

    return (
        <>
            <PageIntro
                eyebrow="devSA Blog"
                title="Leveraging the power of our tech community in SA"
            >
                <p>
                    The goal of devSA is to initiate conversations and foster
                    collaboration within the design, web development, and
                    engineering community in San Antonio, Texas
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="space-y-24 lg:space-y-32">
                    {posts.map((post) => (
                        <FadeIn key={post.frontmatter.title}>
                            <article>
                                <Border className="pt-16">
                                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                                        <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                                            <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                                <Link to={post.slug}>
                                                    {post.frontmatter.title}
                                                </Link>
                                            </h2>
                                            <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                                                <dt className="sr-only">
                                                    Published
                                                </dt>
                                                <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                                                    <time
                                                        dateTime={
                                                            post.frontmatter
                                                                .published
                                                        }
                                                    >
                                                        {new Date(
                                                            post.frontmatter.published
                                                        ).toLocaleDateString(
                                                            'en-US',
                                                            {
                                                                month: 'short',
                                                                year: 'numeric',
                                                            }
                                                        )}
                                                    </time>
                                                </dd>
                                                <dt className="sr-only">
                                                    Author
                                                </dt>
                                                <dd className="mt-6 flex gap-x-4">
                                                    <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                                                        <img
                                                            alt="profile picture"
                                                            src={
                                                                post.frontmatter
                                                                    .authorImage
                                                            }
                                                            className="h-12 w-12 object-cover grayscale"
                                                        />
                                                    </div>
                                                    <div className="text-sm text-neutral-950">
                                                        <div className="font-semibold">
                                                            {
                                                                post.frontmatter
                                                                    .author
                                                            }
                                                        </div>
                                                        <div>
                                                            {
                                                                post.frontmatter
                                                                    .authorRole
                                                            }
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <p className="mt-6 max-w-2xl text-base text-neutral-600">
                                                {post.frontmatter.description}
                                            </p>
                                            <Button
                                                href={`${post.slug}/`}
                                                aria-label={`Read more: ${post.frontmatter.title}`}
                                                className="mt-8"
                                                invert={false}
                                            >
                                                Read more
                                            </Button>
                                        </div>
                                    </div>
                                </Border>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </>
    );
}
