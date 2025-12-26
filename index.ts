import * as pulumi from "@pulumi/pulumi";
import * as command from "@pulumi/command";

// Simple configuration value
const config = new pulumi.Config();
const environment = config.get("environment");

// Resource that takes 10 seconds to create using a sleep command
const slowResource = new command.local.Command("slowResource", {
    create: "sleep 30 && echo 'Created 2'",
});

// New example resource for testing task restart capabilities
const exampleResource = new command.local.Command("exampleResource", {
    create: "echo 'New example resource created for testing'",
});

// Export some simple outputs
export const message = `Example output, stack name: ${environment}!`;
export const timestamp = `Current time: ${new Date().toISOString()}`;
export const abc = "124";
export const newExampleLine = "This is a new example line added for testing";
export const slowResourceOutput = slowResource.stdout;
export const exampleResourceOutput = exampleResource.stdout;
