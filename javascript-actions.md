# JavaScript actions

JavaScript actions run **directly on the runner machine**.

They separate the action's code from the environment that's used to run the action.

So, the action code is simplified and can execute faster than actions within a Docker container.

## Requirements for building a JavaScript action

- must download and install `Node.js`, which includes `npm`
- optional to use GitHub Actions `Toolkit Node.js`, which has packages that make building JavaScript actions easier and more consistent, think `@actions/core`, `@actions/github`

## Steps to build a JavaScript action

1. Create an `action.yml` for inputs and outputs, and telling the runner how to run the action
2. Create `index.js` — implement your action's logic using `@actions/core`, `@actions/github`, or other toolkit packages as needed.
3. Commit and push the action to GitHub with these files:
   1. `action.yml`
   2. `index.js`
   3. `node_modules`
   4. `package.json`
   5. `package-lock.json`
   6. `README.md`
