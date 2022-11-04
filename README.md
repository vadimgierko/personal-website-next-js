# My Static Personal Website https://vadimgierko.com written from scratch in Next.js & deployed to Vercel

## Description

This repository contains the source code of my personal website https://vadimgierko.com developed by myself from scratch at first in React & then adapted/ rewritten in Next.js.

## Motivation. From *Website System* through *React* to *Next.js*

Previously (from September 2020 to October 2022) my personal website was built with [Website System](https://github.com/PiotrWnuczek/WebsiteSystem) developed by [Piotr Wnuczek](https://github.com/piotrwnuczek). I was using *Website System*, because I didn't code at that time & my friend Piotr designed, developed & helped me to start my blog & website with his excellent solution.

It worked fine, but I've started to learn web-development since then (from December 2020) & decided to rebuild the site & develop it from scratch by myself. So I've developed the website in React at first (see [website](https://vadimgierko.github.io/personal-website-react) or [see the code](https://github.com/vadimgierko/personal-website-react)).

Then I've learned basics of Next.js & rewrote the React website version using Next.js to serve the site statically & provide best SEO. The Next.js version of the site will be hosted via new hosting provider soonly at my custom domain https://vadimgierko.com.

## What I learned

- building static sites in Next.js from scratch
- deploying a project to Vercel with a custom domain

## Technologies used in the project

- Next.js 12.3.1
- React 18.2.0
- React Markdown 8.0.3
- React Bootstrap 2.5.0
- React Icons 4.4.0
- Bootstrap 5
- remark-gfm 3.0.1
- Vercel

## What I plan to add/do to the project in the future (the TO DO LIST for myself)

### SEO:

- [ ] add dynamic rich cards ([Open Graph metadata](https://nextjs.org/learn/seo/rendering-and-ranking/metadata)) for every page (title, description, image)
- [ ] index my website in Google
- [ ] add [robots.txt](https://nextjs.org/learn/seo/crawling-and-indexing/robots-txt)
- [ ] add [sitemap](https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps)
- [ ] add [canonical tag](https://nextjs.org/learn/seo/crawling-and-indexing/canonical) for / (index page) or /o-mnie page
- [ ] add html lang
- [ ] do [further reading how to improve SEO](https://nextjs.org/learn/seo/improve)

### GitHub API

- [ ] use special repo vadimgierko for content in /web-development

## Fields of interests/ Sections/ Pages

- [ ] add *Services* (What can I do for you) section to each field of interest page
- [ ] complete *Music* section with content
- [ ] add /[items] page for all articles, projects, videos, audios etc.
  - [ ] organize by fields?
  - [ ] enable search/ filter features for each particular /[items] page

## Different minor changes

- [ ] add created/updatedAt for
  - [ ] articles
  - [ ] projects

- [ ] improve print layout
  - [ ] hide bootstrap layouts (cols, cards) or manage that with css
  - [ ] manage big images

### Search/ Filter features

- [ ] add search box in
  - [ ] navbar
  - [ ] /[items] page

- [ ] add search page for search results
  - [ ] /search?field= itemType= title= ??
  - [ ] /search?value= keywords= ??

### Tags

- [ ] enable adding tags to content
- [ ] enable filtering content by tags

### CMS

- [ ] consider building custom CMS using Firebase as BaaS

