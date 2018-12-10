'use strict';
const axios = require('axios');
const BASE_URL = 'https://api.github.com/search/issues';
class GitFirstTimers {
    constructor(options) {
        if (!options) options = {};
        this.options = options;
    }

    getIssue() {
        console.log(BASE_URL);
        let q = this.buildQueryParam();
        // axios.get("https://api.github.com/search/issues?q=label:%22good+first+issue%22+language:" + language + "+state:open&page=" + this.state.pageNo + "&sort=created&order=asc")
        //     .then(function (response) {
        //         console.log(response);

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    buildQueryParam() {
        if (this.isObject(this.options)) {
            console.log("object");
        }
        return null;
    }

    isObject(object) {
        return (Object.prototype.toString.call(object) === "[object Object]");
    }
}

const git = new GitFirstTimers();
git.getIssue();