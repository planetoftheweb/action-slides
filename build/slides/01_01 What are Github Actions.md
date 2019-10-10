<!-- .slide: data-state="title" -->

# Github Actions

> > Author Notes: Programmers use a number of tools that help them take care of common tasks. But over time this has caused something called Developer fatigue, because the number and variety of tools change all the time. Hey there, I'm Ray Villalobos and in this course I want to show you a solution that could help offload some of the tooling to Github. It's called Github Actions. Let's take a look at how they work.

---

## What are Actions?

- Workflows
- CI/CD
- Control Github

> > Author Notes: You create [Actions](https://github.com/features/actions) in your repositories by creating one or more text files in your repository, these are called workflows.

- Workflows can handle common build tasks like Continuous Delivery and Continuous Integration. So, you can use an action that compresses images, tests your developers code, then pushes your site to your hosting platform when the master branch changes.

- You can also have tasks that run on a specific timeframe, or that control what happens when someone interacts with the Github repository...like when someone makes a comment on a pull request, or stars your project.

---

# Building, Testing, Publishing

- Multi-platform
- Matrix builds
- Any language

> > Author Notes: Actions can also run actions on Linux, MacOS or Windows and these will run on Virtual machines or containers so you can test your code in different environments.

- You can even run matrix workflows on multiple platforms simultaneously.

- Actions can run on any language including: Node.js, Rust, Python, PHP and lots more.

---

# Utility Features

- Logs
- Secret stores
- Great community

> > Author Notes:

- Every action creates detailed logs that can be used to trouble shoot deploys in real-time...while your actions run.

- Github will also store secrets within the repository for additional safety and ease of use accross team members.

- Actions already has a strong community of developers with hundreds of pre-built actions, examples and workflows, so you don't have to start from scratch.
