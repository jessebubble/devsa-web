import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Border } from '~/components/Border';
import { SocialMedia } from '~/components/SocialMedia';

export function SponsorSection() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn className="-mx-6 rounded-3xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
                <div className="mx-auto max-w-4xl">
                    <div className="max-w-xl">
                        <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                            Let's show the community that{' '}
                            <span className="text-centroBlue">tech in SA</span>{' '}
                            is more than just Military City
                        </h2>
                        <div className="mt-6 flex">
                            <Button href="/sponsor" invert>
                                Sponsor a future event
                            </Button>
                        </div>
                        <div className="mt-10 border-t border-white/10 pt-10">
                            <Border className="">
                                <h2 className="font-display text-base font-semibold text-white">
                                    Follow us
                                </h2>
                                <SocialMedia className="mt-6 text-white" />
                            </Border>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Container>
    );
}
