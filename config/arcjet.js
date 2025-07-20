import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJECT_KEY } from "../config/env.js";

const aj = arcjet({
  key:ARCJECT_KEY,
  characteristics: ["ip.src"], // Track requests by IP
  rules: [

    shield({ mode: "LIVE" }),
    // Create a bot detection rule
    detectBot({
      mode: "LIVE", 
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        "POSTMAN",               
        "IP:127.0.0.1"        
      ],
    }),

    tokenBucket({
      mode: "LIVE",
      refillRate: 5, // Refill 5 tokens per interval
      interval: 10, // Refill every 10 seconds
      capacity: 10, // Bucket capacity of 10 tokens
    }),
  ],
});

export default aj;
