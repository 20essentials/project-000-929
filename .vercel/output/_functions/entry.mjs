import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_f0EIGPtj.mjs';
import { manifest } from './manifest_hNjR4P05.mjs';

const serverIslandMap = new Map([
	['ServerIslandButton', () => import('./chunks/ServerIslandButton_c4h-DMR1.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.4_rollup@4.40.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8b329597-4475-4f2b-9e4a-036ad3ee1acf",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
