import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate, d as addAttribute, F as Fragment } from './astro/server_Cf1NcZS6.mjs';
import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';
/* empty css                         */

// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$Astro = createAstro();
const prerender = true;
const $$ServerIslandButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServerIslandButton;
  const text = `This is a server island of Astro`;
  const { length } = text;
  const apiRequest = await fetch(SCORE_API_ENDPOINT);
  const responseNumber = await apiRequest.text();
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-dzusov3x> ${text.split("").map((char, i) => {
    const delay = i % length * 0.05;
    const spanClassname = `animation-delay: ${delay}s; transition-delay: ${delay}s;`;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-dzusov3x": true }, { "default": async ($$result2) => renderTemplate` <span${addAttribute(spanClassname, "style")} data-astro-cid-dzusov3x>${char === " " ? "\xA0" : char}</span> ${i === length - 1 && renderTemplate`<span${addAttribute(spanClassname, "style")} data-astro-cid-dzusov3x>&nbsp;${responseNumber}</span>`}` })}`;
  })} </section> `;
}, "C:/Users/amoil/Desktop/929/src/components/ServerIslandButton.astro", void 0);

const $$file = "C:/Users/amoil/Desktop/929/src/components/ServerIslandButton.astro";
const $$url = undefined;

export { $$ServerIslandButton as default, $$file as file, prerender, $$url as url };
