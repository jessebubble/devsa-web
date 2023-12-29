import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypePrettyCode from 'rehype-pretty-code';

installGlobals();

export default defineConfig({
    plugins: [
        remix(),
        tsconfigPaths(),
        mdx({
            remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
            rehypePlugins: [rehypePrettyCode],
            /* jsxImportSource: …, otherOptions… */
        }),
    ],
});
