import { RenderMode, ServerRoute } from '@angular/ssr';

import { posts } from '../generated/posts';

export const serverRoutes: ServerRoute[] = [
  {
    // One static HTML file per post, so Cloudflare can serve them without a runtime.
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => posts.map((post) => ({ slug: post.slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
