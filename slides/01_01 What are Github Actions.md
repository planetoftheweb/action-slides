<!-- .slide: data-state="title" -->

# Github Actions

> > Author Notes: Lets' talk a bit about what [Actions](https://github.com/features/actions) are and what they're for.

---

## Github Actions

- Automating workflows
- CI/CD
- Whole process

> > Author Notes: Github [Actions](https://github.com/features/actions) are a way for developers to organize and automate how they do their job.

- It makes it easier to handle common tasks like Continuous Delivery and Continuous Delivery right from Github. So, for example, you can use an action that sends pushes your site to your hosting platform when you push a change to the master branch.

- But it's more powerful than that, you can control how your code is built, tested and deployed by adding a series of jobs and workfows to your projects. A good example here, is that you can configure an action so that it automaticaly compresses images when you issue a pull request, getting your site ready to deploy, but still allowing you to preview what you've done before merging to master.

---

# Building, Testing, Publishing

- Multi-platform
- Matrix builds
- Any language

> > Author Notes: Another nice feature of actions is that they can run using many platforms...including Linux, MacOS or Windows and you can run these on Virtual machines or containers. That means you can really test your code in different environments.

- You can even run matrix workflows that run on multiple platforms at the same time, saving your a lot of time in the automation process.

- You can use Actions on just about any language, so it's not limited to just websites but can also run applications using: Node.js, Python, Ruby, PHP and lots more.

---

# Utility Features

- Logs
- Secret stores
- Great community

> > Author Notes:

- Every action creates a series of detailed logs that can be used to trouble shoot deploys in real-time, while your actions run.

- Actions also provide a way to store secrets within the repository for additional safety and ease of use accross team members

- Actions already has a strong community of developers with tons of pre-built actions and workflows that allow you to connect and work with popular tools like Heroku, AWS, Azure, Now and many others
