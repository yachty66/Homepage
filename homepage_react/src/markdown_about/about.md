I followed the site of [Matt Rickard](https://matt-rickard.com/about) and liked it a lot. He is writing daily short articles about startups & engineering. I've built basically a clone of it, but with some modifications and everything from scratch. The idea is that people get at the [About](https://maxhager.xyz/) section a small introduction and following my contact data and social networks.

On the [Posts](https://maxhager.xyz/archive) page, the posts which I write getting published. For now, I will start with writing about the things I create, but probably also extend to more abstract posts like thought experiments. I store this posts in a Google Cloud Storage Bucket. New posts are getting added through a git push of the folder which contains all of my articles. Each post gets rendered with the help of a React library, which is pretty good at converting markdown to something visible in the browser. 

The [Projects](https://maxhager.xyz/projects) page is something innovative. In summer 2022 I started actively keeping track of the projects I am doing. I started a Markdown file with different sections which cover the states in which a project can land in. 

- Currently doing 
- Finished
- Discontinued
- Want to do

I like order. With the knowledge about having my projects all at one place, this gives me good feelings (romantic). It makes someone just more conscious about its own projects, which helps to not to over commit to things. It also makes you really aware of failing. It's definitely not nice to add a project to the discontinue section. Just more awareness.

I would be interested in building an application for other people to use. For now, I am just using a markdown file which gets rendered, but this is error-prone. What I am thinking about as an MVP is a simple web app with login. On the top you have a form where you can use one of the four options. Depending on your input option, the form will change. Then your form configurations are getting added, and they will appear in the markdown, which is rendered via a React library. If you are interested in something like that, tell me - I will create it. 

Then there is the Subscribe page. The email which is entered via the user is added to a JSON file which is stored inside a GCP bucket. After an email was added, a confirmation email is sent via Python. If a new post does appear, a link to this post is sent to all the emails from this list. 

I am excited about future posts!