<!-- .slide: data-state="title" -->

# Workflows

> > Author Notes: Actions are built by creating one or more workflow files, so let's explore how they are created and we'll use one of the existing templates to build one.

---

# Creating a Workflow

- `.github/workflows/name.yml`
- Templates
- Y.A.M.L. Format

> > Author Notes: Let's take a look at how you create a workflow. First you need to look for the actions tab on the top of your site.

You create actions by creating a workflow file in a .github/workflows.

You can have up to 20 workflows per repository at the time.

However, each workflow can have one or more `jobs`, each job will be tied to the event or timeframe you've specified in the workflow.

# Templates

The first time you create a workflow, you'll see that there are some templates that you can use to create your first workflow.

YAML is a recursive acronym, so it stands for YAML Ain't Markup Language. It's like a JSON where whitespace is used instead of punctuation. It's meant to be more human readable.
