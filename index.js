'use strict';
const axios = require('axios');
const BASE_URL = 'https://api.github.com/search/issues';
class GitFirstTimers {
    constructor(options = {}) {
        this.options = options;
    }

    getIssue() {
        console.log(BASE_URL);
        const queryParams = this.buildQueryParam();
        const path = `${BASE_URL}?${queryParams}`;


        return this._request(path);
    }

    buildQueryParam() {
        let url = '';
        // destructure the object
        const { q, sort, order } = this.options;
        if (!q) this.options.q = '';
        console.log(q, sort, order);
        if (this.isObject(this.options)) {
            Object.keys(this.options).map((key) => {
                if (key != 'sort' && key != 'order') {
                    let value = `${key}:${this.options[key]}`;
                    url.push(value);
                }
            });
            url = url.join('+');
            if (!sort) url = `&sort:${sort}`;
            if (!order) url = `&order:${order}`;
        }
        return url;
    }

    isObject(object) {
        return (Object.prototype.toString.call(object) === "[object Object]");
    }

    _request(url, method = 'GET', reqParam = {}) {
        const config = {
            url,
            method,
            params: reqParam,
            data: undefined,
            responseType: 'json',
        };

        return new Promise((resolve, reject) => {
            axios(config).then((obj) => {
                console.log("susccesss");
                resolve(obj.data);
            }).catch((error) => {
                reject(error);
            });
        })


    }
}

const git = new GitFirstTimers({
    q: 'react+language:javascript+state:open'
});

git.getIssue().then((data) => {
    console.log(data.total_count);
})


