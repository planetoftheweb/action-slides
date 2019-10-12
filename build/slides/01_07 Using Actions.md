<!-- .slide: data-state="title" -->

# Referencing Actions

> > Author Notes: We're not limited with what we can do with our context, we can easily use other actions inside our own.

---

# Referencing Actions

- `uses:`
- More than one
- Local, Public, Docker
- `with:`

> > Author Notes:

We can use another action with the uses clause

And we can use more than one uses clause in a job

We can reference different types of external actions including other local actions, public actions on github.com and docker containers.

The with clause allows you to pass along information from the current action

---

```
{owner}/{repo}@{ref}
{owner}/{repo}/{path}@{ref}
./path/to/dir
docker://URL
```

---

- https://github.com/actions/checkout
- https://github.com/actions/setup-node
- https://github.com/demurgos/ga-deploy-git

Need to create a PAT

- Icon
- Settings
- Personal Access Token
- Secret: access_token

exports.build = parallel(html, css, js);

package.json
"build": "gulp build"

```
  build:
    runs-on: ubuntu-latest
    name: Build Project
    env:
      ACTION_MAIL: ${{github.event.commits[0].author.email}}
      ACTION_NAME: ${{github.event.commits[0].author.name}}
    steps:
    - uses: actions/checkout@v1
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
    - name: install
      run: npm install

    - name: build
      run: npm run build

    - name: delploy
      uses: demurgos/ga-deploy-git@v1
      with:
          accessToken: ${{ secrets.access_token }}
          srcDir: build
          destBranch: gh-pages
```
