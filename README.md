# Git First Timers


## Installation ##

``` bash
npm install git-first-timer
```

This plugin simplifies the Git Search Issues Api, you can provide the below options to search GIT issues. By default this module will fetch all issues with label "Good First Issue" based on the language. It will be helpful for Git First Timers searching issues to contribute.


## Usage ##

```js
const GitFirstTimer = require('git-first-timer');
const git = new GitFirstTimer({
     q: 'react',
     language: 'Javascript',
     sort: 'created',
     order: 'asc',
     label: "good first issue"
 });

 git.getIssues().then((data) => {
     console.log(data);
 })
});
```

## Options ##

<b>q</b> - query a value.<br />
<b>language</b> - any language.<br />
<b>sort</b> - Sort the Github issues.<br />
<b>order</b> - asc / desc.<br />
<b>label</b> - any label ( default label - good first issue)<br />


