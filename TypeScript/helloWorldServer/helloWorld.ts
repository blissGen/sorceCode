import {serve} from "https://deno.land/std/http/server.ts";

const server = serve({port: 8080});

console.log("Server running at: http://localhost:8080");

for await (const req of server) {

	const body = "Hello World!"; 
	req.respond({body});

}	
