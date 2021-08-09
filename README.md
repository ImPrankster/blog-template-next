## blog-template-next

A Blog template designed and made By ImPrankster

Made with [Next.js](https://nextjs.org/) and [Material-UI](https://material-ui.com/)

## Deployment

1. Clone this repository to your machine.
2. Use NPM or yarn to install all dependencies.
   `npm install` or `yarn install`
3. Start the development server
   `npm run dev` or `yarn run dev`
4. Modify the code the way you like it, espacially in Header.js, Footer.js and theme/index.js following the guide on [Next.js](https://nextjs.org/) and [Material-UI](https://material-ui.com/)
5. Replace the logo.svg logo-dark.svg and favicon.ico with your own logo and favicon
6. Now you can deploy this website on your own server or any hosting platform like [Vercel](https://vercel.com/)

## Writing

1. Start writing by creating a new markdown file in /articles
2. All .md file in /articles will be convert into a page using Static Site Generation
3. By default, all markdown files should have frontmatters like this
   ```
   ---
   title: "About Me"
   date: "August 6, 2021"
   type: "About"
   excerpt: "About the creator of this Website."
   ---
   ```
4. Articles will be diaplayed in the order of date in the front page and filtered by the type selector in AppTab.js , articles with type that do not exist will not be displayed in the home page.

## Thanks to

[react-icons](https://react-icons.github.io/react-icons) for providing the cool icons.
[generate-github-markdown-css](https://github.com/sindresorhus/generate-github-markdown-css)

## License

Repository is released under MIT License

By default, All Content is released under CC BY-SA 4.0
