---
title: Adding images to a post
date: 2026-09-08
summary: Where image files go, and the one path convention that keeps them working after deploy.
---

Put the file in `public/posts/` and reference it from the site root:

```md
![A short description of the picture](/posts/my-photo.jpg)
```

Everything under `public/` is copied to the root of the deployed site, so
`public/posts/my-photo.jpg` is served at `/posts/my-photo.jpg`. The leading slash
matters — a relative path like `posts/my-photo.jpg` resolves against the post's own
URL and breaks.

The alt text is not optional. It is what a screen reader announces and what shows if
the image fails to load, so describe the picture rather than naming the file.

Large photographs are worth shrinking before committing them. A 4000px phone photo is
several megabytes, and nothing on the page displays it above about 1400px wide:

```sh
sips -Z 1400 original.jpg --out public/posts/my-photo.jpg
```

This is a sample post — delete `src/content/posts/adding-images.md` when you no
longer need it.
