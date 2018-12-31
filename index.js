'use strict';
const axios = require('axios');
const BASE_URL = 'https://api.github.com/search/issues';
class GitFirstTimers {
    constructor(options = {}) {
        this.options = options;
    }

    getIssues() {
        const queryParams = this.buildQueryParam();
        const path = `${BASE_URL}?${queryParams}`;
        return this._request(path);
    }

    buildQueryParam() {
        let url = [];
        // destructure the object
        const { q, sort, order, label = "good first issue" } = this.options;
        if (!q) url = ['q=""'];
        if (q) url = [`q="${q}"`];
        if (this.isObject(this.options)) {
            Object.keys(this.options).map((key) => {
                if (key != 'sort' && key != 'order' && key != 'q') {
                    let value = `${key}:"${encodeURI(this.options[key])}"`;
                    url.push(value);
                }
            });
            url = url.join('+');
            if (sort) url = `${url}&sort:${sort}`;
            if (order) url = `${url}&order:${order}`;
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
                resolve(obj.data);
            }).catch((error) => {
                reject(error);
            });
        })


    }
};

module.exports = GitFirstTimers;



