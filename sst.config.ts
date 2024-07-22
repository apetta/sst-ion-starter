/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-ion",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const queue = new sst.aws.Queue("MyQueue");
    queue.subscribe("src/subscriber.handler");

    const app = new sst.aws.Function("MyApp", {
      handler: "src/publisher.handler",
      link: [queue],
      url: true,
    });

    return {
      app: app.url,
      queue: queue.url,
    };
  },
});
