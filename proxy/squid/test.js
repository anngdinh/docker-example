import fetch from 'node-fetch';
import * as https from 'https';
import { HttpsProxyAgent } from 'https-proxy-agent';

const proxy = "http://127.0.0.1:6565";

// (async () => {
//     const proxyAgent = new HttpsProxyAgent(proxy);
//     const response = await fetch('https://medium.com', { agent: proxyAgent});
//     const body = await response.text();
//     console.log(body);
// })();

const agent = new HttpsProxyAgent(proxy);

https.get('https://medium.com', { agent }, (res) => {
  console.log('"response" event!', res.headers);
  res.pipe(process.stdout);
});