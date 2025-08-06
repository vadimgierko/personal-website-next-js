# TODO: Future improvements & additions

- check & update metadata
  - see [TODO](/TODO.md#seo)
  - canonical where needed
  
## SEO:

- [ ] expand metadata & open graph
- [ ] add og metadata also to /\[items\] page
- [ ] check how many chars title & descritpion should have & fix it
- [ ] add conditional dynamic og:type property (article, book, website, etc. => find more)
- [ ] add keywords prop
- [ ] add [robots.txt](https://nextjs.org/learn/seo/crawling-and-indexing/robots-txt)
- [ ] add [sitemap](https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps)
- [ ] add html lang
- [ ] do [further reading how to improve SEO](https://nextjs.org/learn/seo/improve)

## GitHub API

- [ ] use special repo vadimgierko for content in /web-development
- [ ] fix all mentioned in portfolio dev projects' repos readme files

## Fields of interests/ Sections/ Pages

- [ ] add _Services_ (What can I do for you) section to each field of interest page
- [ ] complete _Music_ section with content
- [ ] add /[items] page for all articles, projects, videos, audios etc.
  - [ ] organize by fields?
  - [ ] enable search/ filter features for each particular /[items] page

## Articles/ Projects

- [ ] add created/updatedAt for
  - [ ] articles
  - [ ] projects

## Print layout

- [ ] improve print layout
  - [ ] hide bootstrap layouts (cols, cards) or manage that with css
  - [ ] manage big images

## Search/ Filter features

- [ ] add search box in
  - [ ] navbar
  - [ ] /[items] page
- [ ] add search page for search results
  - [ ] /search?field= itemType= ?? keywords= ??

## Tags

- [ ] enable adding tags to content
- [ ] enable filtering content by tags

## Git-based CMS

1. The ultimate goal is to shift managing content (and website data overall)
   - from dev-oriented (by hardcoding & literally typing content in the code)
   - to user-oriented (even if the user is the dev) (managing content via forms in dev mode (for now!) or in production, if the CMS will be deployed as Node.js app on hosting server or VPS).
2. The content still will be stored locally, but
   - instead of `.ts` files containing js objects managed by hand
   - => `.json` (for metadata, db-like structures etc.) & `.md` (for rich-text & large content) files managed automatically in response to user actions performed via form.
   - \+ ❗❗❗ REMEMBER TO ALSO ENABLE MANAGING IMAGES, OTHER FILES & EMBEDED MEDIA (OR EVEN LOCALLY SAVED FILES)❗❗❗
3. After building
   - `inside-app` CMS
   - build a `standalone` CMS
     - `for myself` at the beginning (as a central hub for all of my static websites, which will be switched to consume content via `API`,
     - then build a standarized/abstract version of the app, which could be forked on gh `for other users`
