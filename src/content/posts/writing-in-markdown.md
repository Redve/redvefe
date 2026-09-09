---
title: Writing in markdown
date: 2026-09-09
summary: Everything the post renderer supports, in one page you can delete once you have read it.
---

This is a sample post. It exists so you can see what the renderer does with each
piece of markdown, and so the landing page has something on it. Delete it whenever
you like — remove the file from `src/content/posts/` and it disappears from the site
on the next build.

## Headings and text

Every heading gets an id, so you can link straight to a section. **Bold**, *italic*,
`inline code`, and [links](https://redve.se) all work as you would expect.

> Block quotes sit slightly inset with a coloured rule, so a pulled sentence reads as
> lifted from somewhere rather than as your own aside.

## Lists

- Unordered lists
- Take a tighter line height than body text
- So a long list stays compact

1. Ordered lists are numbered by the browser
2. Which means you can reorder them freely
3. Without renumbering anything by hand

## Code

Fenced blocks scroll sideways on their own rather than stretching the page:

```ts
export function readingMinutes(words: number): number {
  return Math.max(1, Math.round(words / 200));
}
```

## Images

Images live in `public/posts/` and are referenced from the site root. They lazy-load
and never exceed the column width.

![Lake Bled from the eastern shore](/posts/lake-bled.jpg)

A caption is just the paragraph underneath, kept short.

## Tables

| Field | Required | What it does |
| --- | --- | --- |
| `title` | yes | Heading, and the link text on the landing page |
| `date` | yes | Sorts the feed, newest first |
| `summary` | yes | The line under the title on the landing page |
| `cover` | no | Not used by this layout yet |
