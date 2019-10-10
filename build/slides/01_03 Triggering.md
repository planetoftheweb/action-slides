<!-- .slide: data-state="title" -->

# Workflow Events

> > Author Notes: Now that you've used a sample workflow, let's dive a little bit deeper into some of the options for triggering them.

---

## Event Types

- Workflows
- Webhooks
- Scheduled
- External

> > Author Notes: Events can be targeted by a specific [activity](https://help.github.com/en/articles/events-that-trigger-workflows).

- The most common of these is workflow events, so something like a push, pull_request or fork that refers to changes in the repository

- You can also specify that an event get triggered by a webhook type event, which means some action that Github performs, like when someone stars your repo, or when a wiki page gets created or edited.

- There is a special event called schedule that lets you define when and how often an event takes place using [cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html).

- Finally, although less common, you can have an event triggered by an external process outside of Github. That's called a [repository_dispatch event](https://developer.github.com/v3/activity/events/types/#repositorydispatchevent).

---

## Specifiers

- Single or multiple
- Types
- Editor helper

> > Author Notes:

- You can execute a workflow based on a single event or have a list of events trigger the workflow, so you can run a workflow when a push or a pull_request happens.

- Some events can be passed along specific types to qualify when the event should take place, so for example you can run an event when a pull_request happens, but if it's being closed.

- The editor can help you when writing these commands. It not only automatically indents, but also offers some helpful tips, which you can pull up manually by hitting control space.

---

```

name: Do Something

on:
  push:
    branches:
      - master
  pull_request:
    types: [closed]
jobs:
  build:

    runs-on: ubuntu-latest
    name: My Job

    steps:
    - uses: actions/checkout@v1
    - name: Run a one-line script
      run: echo Hello, world!
    - name: Run a multi-line script
      run: |
        echo Add other actions to build,
        echo test, and deploy your project.
```
