karma-rollup-preprocessor-issue
---

Repo to demonstrate a mapping issue in karma-rollup-preprocessor-issue.

Run `npm test` and observe that the line reported for the failing test does not match the file.

---

For the record, in my local testing, the failing line is line 7, while it is `line 14` that is reported.

I have seen this get as bad as reporting `line 2998` in a < 100 line file (work project with babel and istanbul)
