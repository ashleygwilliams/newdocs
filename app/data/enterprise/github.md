<!--
order: 6
title: GitHub integration
keywords: github, git, enterprise
featured: true
-->

## Integrates with GitHub and GitHub Enterprise

If your organization uses GitHub or GitHub Enterprise, npm On-Site can be configured
to automatically use them for login and access control. Simply add a
repository field to your package.json that points to your repo:

```js
{
  ..
  "repository": {
    "url": "git://github.mycompany.com/myco/mypackage.git"
  }
}
```

npm On-Site restricts installation of your
package to users who have access to the repo for that package, and restricts
publishing of that package to users who have commit access to the repo.

## Pointing at your GitHub Enterprise appliance

To point npm On-Site at your GitHub Enterprise appliance:

1. visit the admin console at _http://myreg.mycompany.com:8800_
2. choose `GitHub` as the authentication strategy.
3. choose `GitHub Enterprise`.
4. enter your GitHub Enterprise appliance's host and scheme.

## Logging in with two-factor authentication

If you use two-factor authentication for your GitHub account, you will need to
manually generate a token and add it to your `~/.npmrc` file.

1. Visit github.com/settings/tokens/new to create a new "Personal access token".
1. Use a descriptive name for your token, like "myco npmE"
1. Leave the default scopes as they are.
1. Click "Generate Token" and you'll be redirected to a new page that displays your token. Copy the token right away, as it will only be displayed on screen once.
1. Copy the token and paste it into the bottom of your `~/.npmrc` file:

```
@myco:registry=https://npme-private.npmjs.com/
//npme-private.npmjs.com/:_authToken=3aa689a8a6772ab997bb333d096b8c1f48a9ccc
```

Note: you do not need to run `npm login` if you set up two-factor authentication this way.
