import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Resource } from "sst";
const client = new SQSClient();

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  // send a message
  await client.send(
    new SendMessageCommand({
      QueueUrl: Resource.MyQueue.url,
      MessageBody: "Hello from the other side",
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "sent" }, null, 2),
  };
};
