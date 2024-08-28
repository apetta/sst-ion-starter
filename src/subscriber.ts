import { SQSBatchItemFailure, SQSBatchResponse, SQSHandler } from "aws-lambda";

export const handler: SQSHandler = async (
  event,
  context
): Promise<SQSBatchResponse> => {
  console.dir(event, { depth: null });
  console.dir(context, { depth: null });

  const batchItemFailures: SQSBatchItemFailure[] = [];

  for (const record of event.Records) {
    try {
      console.log(record.body);
    } catch (error) {
      console.error(error);
      batchItemFailures.push({
        itemIdentifier: record.messageId,
      });
    }
  }

  return {
    batchItemFailures,
  };
};
