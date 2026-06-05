# Docker container actions

Docker containers package the environment with the GitHub Actions code.

THis means that the actions runs in a **consistent** and **reliable** environment because all of its **dependencies** are within that container.

👍 Use Docker container actions if:

- the action needs to run in a specific environment configuration - because you can customise the OS and tooling

👎 Downside is:

- the job has to build and retrieve the container, making workflow start up slower
- Docker container actions are slower because of this start up

## Steps to build a Docker container action

1. Create a `Dockerfile` to define the commands to assemble the Docker image
2. Create an `action.yml` metadata file to define inputs and outputs of the action
3. Set the `runs: using:` value in `action.yml` to `docker` and the `runs: image:` value to `Dockerfile`
4. Create an `entrypoint.sh` file to describe the docker image
5. Commit and push the action to GitHub with the following files:
   1. `action.yml`
   2. `entrypoint.sh`
   3. `Dockerfile`
   4. `README.md`

And that's it! 🐳

