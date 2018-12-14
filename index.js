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
        console.log(q);
        // axios.get("https://api.github.com/search/issues?q=label:%22good+first+issue%22+language:" + language + "+state:open&page=" + this.state.pageNo + "&sort=created&order=asc")
        //     .then(function (response) {
        //         console.log(response);

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    buildQueryParam() {
        let url = [];
        if (this.isObject(this.options)) {
            Object.keys(this.options).map((key) => {
                let value = `${key}:${this.options[key]}`;
                url.push(value);
            })
        }
        url = url.join('&');
        return url;
    }

    isObject(object) {
        return (Object.prototype.toString.call(object) === "[object Object]");
    }
}

const git = new GitFirstTimers({
    language: 'javascript',
    state: 'open'
});
git.getIssue();

const config = {
    url: url,
    method: 'GET',
    params: {
        language: 'javascript',
        state: 'open'
    },
    data: undefined,
    responseType: raw ? 'text' : 'json',
};

log(`${config.method} to ${config.url}`);
const requestPromise = axios(config).then((data) => {
    console.log("");
});
