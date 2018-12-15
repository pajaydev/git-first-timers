'use strict';

const mocha = require('mocha');
const expect = require('chai').expect;
const GitFirstTimers = require('./index');

describe("test git search issues api", () => {

    describe("test buildParams", () => {
        it("test without param", () => {
            const github = new GitFirstTimers({});
            const actualPath = github.buildQueryParam(github.options);
            const expectedPath = 'q=""';
            expect(expectedPath == actualPath).to.be.true;
        });

        it("test without q param", () => {
            const github = new GitFirstTimers({
                lang: 'Java'
            });
            const actualPath = github.buildQueryParam(github.options);
            const expectedPath = 'q=""+lang:Java';
            expect(expectedPath == actualPath).to.be.true;
        });

        it("test with q param", () => {
            const github = new GitFirstTimers({
                q: 'react',
                lang: 'Java'
            });
            const actualPath = github.buildQueryParam(github.options);
            const expectedPath = 'q=react+lang:Java';
            console.log(actualPath);
            expect(expectedPath == actualPath).to.be.true;
        });

        it("test with sort and order param", () => {
            const github = new GitFirstTimers({
                q: 'react',
                lang: 'Java',
                sort: 'created',
                order: 'asc'
            });
            const actualPath = github.buildQueryParam(github.options);
            const expectedPath = 'q=react+lang:Java&sort:created&order:asc';
            console.log(actualPath);
            expect(expectedPath == actualPath).to.be.true;
        });

    });

});