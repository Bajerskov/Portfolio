My [portfolio](https://andersfejerskov.dk) is created with [Next.js](https://nextjs.org/) a React framework for static, SEO friendly websites, utilizing the react library.

The project has a fully automatic ci/cd workflow by using github actions to build and compile Docker images and pushing them to the docker-hub registry. The image is then picked up by a [Watchtower](https://github.com/containrrr/watchtower) container running on a DigitalOcean droplet and replaces the old container with one from the new image. 

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
* Automatic testing (unit, integration and e2e)
* Metric tracking
* SEO optimization
* Higher quality images.

