import * as pulumi from "@pulumi/pulumi";

// Simple configuration value
const config = new pulumi.Config();
const environment = config.get("environment") || "dev";

// Export some simple outputs
export const message = `Example output, stack name: ${environment}!`;
export const timestamp = `Current time: ${new Date().toISOString()}`;
export const iteration1 = "First test output added";
