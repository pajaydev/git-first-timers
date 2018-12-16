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
                language: 'Java'
            });
            const actualPath = github.buildQueryParam(github.options);
            const expectedPath = 'q=""+language:"Java"';
            expect(expectedPath == actualPath).to.be.true;
        });

        it("test with q param", () => {
            const github = new GitFirstTimers({
                q: 'react',
                language: 'Java'
            });
            const actualPath = github.buildQueryParam(github.options);
            const expectedPath = 'q="react"+language:"Java"';
            expect(expectedPath == actualPath).to.be.true;
        });

        it("test with sort and order param", () => {
            const github = new GitFirstTimers({
                q: 'react',
                language: 'Java',
                sort: 'created',
                order: 'asc'
            });
            const actualPath = github.buildQueryParam(github.options);
            const expectedPath = 'q="react"+language:"Java"&sort:created&order:asc';
            expect(expectedPath == actualPath).to.be.true;
        });

        it("test with sort and order param", () => {
            const github = new GitFirstTimers({
                q: 'react',
                language: 'Java',
                label: "Good first issue",
                sort: 'created',
                order: 'asc'
            });
            const actualPath = github.buildQueryParam(github.options);
            const expectedPath = 'q="react"+language:"Java"+label:"Good%20first%20issue"&sort:created&order:asc';
            expect(expectedPath == actualPath).to.be.true;
        });

    });

    describe("test git api", () => {
        it("test git api with all parameters", () => {
            const github = new GitFirstTimers({
                q: 'react',
                language: 'Java',
                label: "Good first issue",
                sort: 'created',
                order: 'asc'
            });
            const path = github.buildQueryParam(github.options);
            return github._request(path, "GET").then((data) => {
                expect(data != null).to.be.true;
                expect(data.total_count > 0).to.be.true;
            });
        });
    });

});