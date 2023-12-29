/// <reference types="vite/client" />
/// <reference types="@remix-run/node" />

declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;
    export const frontMatter: any;
    export default MDXComponent;
}
