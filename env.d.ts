/// <reference types="vite/client" />
/// <reference types="@remix-run/node" />
/// <reference types="@vercel/remix" />

declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;
    export const frontMatter: any;
    export default MDXComponent;
}
