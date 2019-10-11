<!-- .slide: data-state="title" -->

# Context & Expressions

> > Author Notes: In the previous video, I showed you that you can use environment variables as well as the github object to pass information to your jobs. Let's take a look at what else we can do with this context.

---

# Contexts

- github
- job, steps
- secrets
- strategy, matrix, runner

> > Author Notes:

The most important information about your repository is store inside a github object

But, you can also access information about the current jobs and the steps that you can using within each job.

Another pretty useful context is secrets, so you can access information stored by Github that can't be seen to others.

There's a few less useful contexts, which include the strategy, matris and runner, you can read more about these and all of the options for context at [this URL](https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions)

---

# Expressions

- `${{ expression }}`
- Literals, Operators, Functions

> > Author Notes:

Actions also have a special expression syntax, which uses a dollar sign with double curly braces and an expression inside it.

This expression can contain all types of items, including literals, operators and functions. Let's take a look at how that works.

---

```
name: Hello Actions

on:
  push:
    branches:
      - master
  pull_request:
    types: [closed]

env:
  name: Raybo

jobs:
  build:

    runs-on: ubuntu-latest
    env:
      name: Ray V.

    steps:
    - name: Say Hi
      run: |
        echo Hi, $name!
        echo Actor: ${{github.actor}}
        echo Commited By: ${{github.event.commits[0].author.name}}
  dump:
    runs-on: ubuntu-16.04
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJson(github) }}
        run: |
          echo "$GITHUB_CONTEXT"

  pull_requests_only:
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    needs: build

    steps:
    - name: Run a multi-line script
      run: |
        echo Add other actions to build,
        echo Hi, $name!
```
