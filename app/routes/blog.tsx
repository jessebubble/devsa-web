import { Outlet } from '@remix-run/react';
import { PostMeta } from '~/.server/posts';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export default function Component(data: PostMeta, content: string) {
    return (
        <>
            <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <Outlet />
                </FadeIn>
            </Container>
        </>
    );
}
