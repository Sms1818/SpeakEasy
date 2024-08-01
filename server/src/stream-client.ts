import { StreamClient } from "@stream-io/node-sdk";

const apiKey="8fusmp97q63n";
const apiSecret="t78qwahuc3m4kh7hqgm2e42sqs2unv58r458ugkqkegnrw3w2pg9hjtqjq67pj7j";

export const client=new StreamClient(apiKey,apiSecret);