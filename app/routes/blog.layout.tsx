import { PostMeta } from "~/.server/posts";

export function Layout({ data, content }: { data: PostMeta; content: string }) {
    return (
        <>
        <main className="mt-24 sm:mt-32 lg:mt-40 mx-auto max-w-7xl px-6 lg:px-8">
            <header className="mx-auto flex max-w-5xl flex-col text-center">
                <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                    {data.frontmatter.title}
                </h1>
                <time className="order-first text-sm text-neutral-950">
                    {new Date(data.frontmatter.published).toLocaleDateString(
                    "en-US",
                        {
                            month: "short",
                            year: "numeric",
                        }
                    )}
                </time>
                <p className="mt-6 text-sm font-semibold text-neutral-950">
                    by {data.frontmatter.author}, {data.frontmatter.authorRole}
                </p>
            </header>

            <article className="mt-24 sm:mt-32 lg:mt-40">
                <div className="mx-auto max-w-5xl">
                <figure className=''>
                    <div className="overflow-hidden rounded-xl bg-neutral-50 sm:rounded-3xl">
                        <img 
                            className="aspect-[16/10] object-cover grayscale w-full" sizes="(min-width: 768px) 42rem, 100vw"
                            src={data.frontmatter.heroImage}
                            alt="black and white house" 
                        />        
                    </div>
                    <blockquote className="text-xl/7 text-neutral-600 mt-8 mx-auto">
                        {content}
                    </blockquote>
                </figure>
                </div>
            </article>
        </main>

        </>
    );
}