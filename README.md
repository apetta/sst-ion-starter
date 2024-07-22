# SST-Ion Starter

This project is a starter template for building serverless applications using SST and AWS.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (version 18 or later)
- AWS CLI

## Setting Up AWS CLI

1. Install AWS CLI following the instructions on the [official AWS documentation](https://aws.amazon.com/cli/).
2. Configure AWS CLI with your AWS account credentials by running:
   aws configure

Follow the prompts to input your AWS Access Key ID, Secret Access Key, region, and output format.

## Installation

To set up the project dependencies, run:

pnpm install

## Available Scripts

In the project directory, you can run:

```sh
pnpm run dev
```

Runs the app in development mode using SST. The app will reload if you make edits.

```sh
pnpm run deploy:dev
```

Deploys the app to a development stage on AWS using SST.

```sh
pnpm run deploy:production
```

Deploys the app to production on AWS using SST. This script ensures resources are retained even after the stack is removed.

## Learn More

To learn more about SST, check out the [SST documentation](https://ion.sst.dev/).

For more information on AWS CLI, visit the [AWS CLI User Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).
