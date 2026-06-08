const core = require("@actions/core");
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

async function run() {
    try {
        // Change required to false so 'latest' fallback actually works
        const inputVersion = core.getInput("version", { required: false }) || "";
        let command = "curl -sSfL https://golangci-lint.run/install.sh | sh -s";

        // If a version is provided, append it with a 'v' prefix
        if (inputVersion.trim().length === 0) {
            console.log("Installing latest golangci-lint version...");
        } else {
            console.log(`Installing golangci-lint v${inputVersion}...`);
            // Ensure we don't accidentally double-prefix if user typed 'v2.12.2'
            const cleanVersion = inputVersion.startsWith("v") ? inputVersion : `v${inputVersion}`;
            command += ` -- ${cleanVersion}`;
        }

        // Run the installation
        execSync(command, { stdio: "inherit" });

        // Add the installation directory to PATH
        const golangciBinPath = path.join(process.env.HOME, ".local", "bin");
        core.addPath(golangciBinPath);

        console.log("golangci-lint installed successfully.");
    } catch (error) {
        core.setFailed(`Installation failed: ${error.message}`);
    }
}

run();