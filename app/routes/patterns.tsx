import { useState,  } from "react"
import { motion } from "framer-motion"
import { Container } from "~/components/Container";
import { PageIntro } from "~/components/PageIntro";
import { FadeIn } from "~/components/FadeIn";


export default function Patterns() {
    const [state, setState] = useState(false);
    
    return (
        <>
        <PageIntro 
            eyebrow="Patterns"
            title="This page is a collection of patterns I've created using SVGs and Framer Motion"
        >
            <p>
                The goal of devSA is to initiate conversations and foster collaboration within the design, web development, and engineering community in San Antonio, Texas                    
            </p>
        </PageIntro>

        <Container className="mt-24 sm:mt-32 md:mt-40">
            <FadeIn className="">
            <div
            style={{
                display: "flex",
                width: "100%",
                justifyContent: state ? "flex-end" : "flex-start",
            }}
            onClick={() => setState(!state)}
        >
            <motion.svg
                layout
                viewBox="0 0 100 100"
                style={{ flex: "0 0 100px" }}
            >
                <circle cx={50} cy={50} r={50} fill="black" />
            </motion.svg>
        </div>




            </FadeIn>
        </Container>
        </>
    )
}