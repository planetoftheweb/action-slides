<!-- .slide: data-state="title" -->

# Secrets

> > Author Notes: Github allows you to store secrets inside a repository.

---

# Secrets

- `settings > secrets`
- Write once
- Not printable

> > Author Notes:

To create a secret, you'll need to go to your project settings and then choose secrets from the navigation.

You can store up to 100 secrets in your repositories and they must each have a unique name. Keep in mind that once you add a secret you won't be able to see it again.

Also, although you can use the variable in your actions, for security reasons you won't be able to easily output the value of the secrets in your actions, so be careful if you need to remember this secret.

https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables

https://darksky.net/dev

---

```
  weather:
    runs-on: ubuntu-latest
    env:
      location: '28.550,-81.40'
      lang: en
      units: us
      exclude:  'minutely,hourly,daily,alerts,flags'
      dark_sky_secret:  ${{secrets.dark_sky}}
    steps:
    - name: Current Weather
      run: curl -s --url https://api.darksky.net/forecast/$dark_sky_secret/$location?lang=$lang&units=$units&exclude=$exclude

```
