<!-- .slide: data-state="title" -->

# Github Actions

- Workflow groups
- Custom CI/CD
- Event/Time driven

> > Author Notes:

Actions let you build one or more workflows for your repository. Workflows are groups of Actions that can help you manage your project.

That means that you can build your own Continuous Integration or Continuous Delivery workflows that will help you test, package, deploy and publish your repositories so they can become part of how you published projects.

Actions are triggered by specific [events that trigger the workflows](https://help.github.com/en/articles/events-that-trigger-workflows). You can run an Action whenever someone pushed a commit or when someone files a pull request. You can also automatically execute an action based on a timecode using Cron jobs.

- You can also use the POSIX cron syntax in your workflow file. For example, this workflow is triggered every hour.

```
on:
  schedule:
    - cron:  '0 * * * *'
```

[Wikipedia](https://en.wikipedia.org/wiki/Cron), [Crontab Guru](https://crontab.guru)

---

## Creating an Action

- `.github/workflows/name.yml`
- Pre-built Templates
- Workflows vs jobs

> > Author Notes: Let's take a look at how you create an action. First you need to look for the actions tab on the top of your site.

`.github/workflows/name.yml`

You create actions by creating a workflow file. This will go in a special .github folder that will normally be invisible by your local operating system's repo, but be visible in your editor and on Github.

## Templates

The first time you create a workflow, you'll see that there are some templates that you can use to create your first workflow.

IMAGE

You can have up to 20 workflows per repository at the time.

```
name: Awesome Workflow
on: push
  branches:
  - master
jobs:
  gogo:
```

However, each workflow can have one or more `jobs`, these are a series of tasks that the workflow performs. Each job will be tied to the event or timeframe you've specified in the workflow.

---

<!-- .slide: data-state="title" -->

# Y.A.M.L.

YAML Ain't Markup Language

> > Author Notes: Lets' talk a bit about what Actions are and what they're for.

# Customizing

If you're not familiar with YML files. YAML is a recursive acronym, so it stands for YAML Ain't Markup Language. It used to be called Yet Another Markup Language, but since it wasn't meant to create markup like HTML, the name got changed to the Weirder version.

YAML is meant to be converted to data, so they're like JSON files in that it will easily convert to JavaScript objects, but where whitespace is used instead of punctuation. It's also meant to be human readable. I think it's easy to read, but a little bit harder to define.

---

## Jobs

- labels/`name`
- `needs`
- `runs-on`
- `steps`

> > Author Notes:

Each jobs starts out with a label that separates it from other jobs. The rest of the information goes inside this label. It often begins witha name identifier for the job.

Jobs run in parallel, unless you ask one job to require another job to be finished, so you can use a needs attribute here to specify that dependency.

Next, you specify a runs-on parameter. Here you can select from different versions of Linux, Windows and mac Operating systems. You can even specify a matrix so the job runs on multiple platforms.

What follows is a series of steps. Each step is another series of tasks that let you use actions to do things.

---

## Steps Array

- `uses`/`run`
- `with`

> > Author Notes:

Steps are the sequence of tasks you want your jobs to perform. You can specify that the step uses a pre-written action or a Docker Container action.

There is a list of official pre-written [Github Actions](https://github.com/actions).

- You can specify some options that add information to the steps using the `with` attribute. and then passing along some data.
