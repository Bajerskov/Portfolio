This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## This is my portfolio repository 
My [portfolio](https://andersfejerskov.dk) is created with [Next.js](https://nextjs.org/) a React framework for static, SEO friendly websites.

The project is dockerized and implements a ci/cd workflow by building the project to an image and pushing to a docker-hub registry. Which a DigitalOcean droplet picks-up and replaces the running containers with one from the new image.

## Dependencies
The project utilises [TailwindCSS](https://tailwindcss.com/) for basic styling in combination with PreProcessor [PostCSS](https://postcss.org/) and [Sass](https://sass-lang.com/)

Other styling dependencies are 
* [Typography](https://github.com/tailwindlabs/tailwindcss-typography), a TailwindCSS typography plugin.
* [HeadlessUI](https://headlessui.dev/), a TailwindCSS ui component and animation library for React.
* [FramerMotion](https://www.framer.com/motion/), a animation library for React.hero
* [FontAwesome](https://fontawesome.com/), a huge icon library.

## Backend
This portfolio relies on an API built with laravel and a dashboard for creating content for the site. 

## ToDO
* Automatic testing
* Metric tracking
* SEO optimization
* Higher quality images.

