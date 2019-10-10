<!-- .slide: data-state="title" -->

# Workflows

> > Author Notes: Actions are built by creating one or more workflow files, so let's explore who they are created.

---

## Creating a Workflow

- `.github/workflows/name.yml`
- Templates
- YAML Format

> > Author Notes: Let's take a look at how you create a workflow. First you need to look for the actions tab on the top of your site.

`.github/workflows/name.yml`

You create actions by creating a workflow file in a .github/workflows.

You can have up to 20 workflows per repository at the time.

However, each workflow can have one or more `jobs`, each job will be tied to the event or timeframe you've specified in the workflow.

## Templates

The first time you create a workflow, you'll see that there are some templates that you can use to create your first workflow.

# Y.A.M.L.

YAML Ain't Markup Language

> > Author Notes: YAML is a recursive acronym, so it stands for YAML Ain't Markup Language. It used to be called Yet Another Markup Language, but since it wasn't meant to create markup like HTML, the name got changed to the Weirder version.

YAML is meant to be converted to data, so they're like JSON files in that it will easily convert to JavaScript objects, but where whitespace is used instead of punctuation. It's also meant to be human readable. I think it's easy to read, but a little bit harder to define.
