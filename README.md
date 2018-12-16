# Git First Timers


## Installation ##

``` bash
npm install git-first-timer
```
## Usage as plugin ##

```js
const GitFirstTimer = require('git-first-timer');
const git = new GitFirstTimer({
     q: 'react',
     language: 'Javascript',
     sort: 'created',
     order: 'asc',
     label: "good first issue"
 });

 git.getIssue().then((data) => {
     console.log(data);
 })
});
```