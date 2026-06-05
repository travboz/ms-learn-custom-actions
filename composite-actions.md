# Composite actions

A composite action allows you to combine multiple workflow steps within one action. 

It bundles together multiple commands into a single reusable action.

## What are `runs.steps` in Composite Actions?

In a composite action's `action.yml` file, the `runs.steps` property defines the individual steps that comprise the action.

These steps can be:

- `run` steps: Shell commands you want to execute
- `uses` steps: References to other actions you want to use

Example:

```yaml
runs:
  using: "composite"
  steps:
    - run: echo "Hello"          # This is a run step
      shell: bash
    - uses: actions/checkout@v6  # This is a uses step
```

## We can package them: Packaged composite actions

These bundle all thsoe steps into a **reusable unit**.

These actions are defined in one repository and can be used in the workflows of others.

When creating a packaged composite action, the steps are defined in a single `action.yml` file.
This file specifies the **inputs**, **outputs**, and the **sequence of commands or actions to execute**.
