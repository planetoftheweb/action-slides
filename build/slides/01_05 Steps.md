<!-- .slide: data-state="title" -->

# Jobs

> > Author Notes: Although you can only run about 20 workflows per repository, you can run one or more jobs on each workflow, so let's take a look at some of the options for running jobs.

---

# Job IDs

- Id Label
- Unique
- Format

> > Author Notes:

A workflow can have one or more jobs, each job is identified by an ID label, which has to have a unique name that starts with a letter or underscore and contain only alphanumeric characters, plus a hyphen or an underscore.

---

# Running Jobs

- Parallel by default
- `needs:` id or array
- `runs-on:`

> > Author Notes:

Each jobs starts out with a label that separates it from other jobs. The rest of the information goes inside this label. It often begins witha name identifier for the job.

Jobs run in parallel, unless you ask one job to require another job to be finished, so you can use a needs attribute here to specify that dependency.

Each job can run on different machines or on an array of machines.

---

```
ubuntu-latest, ubuntu-18.04, ubuntu-16.04
windows-latest, windows-2019, or windows-2016
macOS-latest or macOS-10.14
```

---

# Job Options

- `env:`
- `if:`
- `steps:`

> > Author Notes:

You can pass along a number of environment variables that will be available to every job. If you want to use environment variables in more than one job, you can place them at the same level as the jobs object.

You can also run a job only if it meets certain conditions.

Steps are the sequence of tasks you want your jobs to perform.
