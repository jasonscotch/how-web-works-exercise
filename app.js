// What is HTTP?
    // HTTP (Hypertext Transfer Protocol) is a protocol used for transferring data over the internet, typically between web browsers and servers.

// What is a URL?
    // A URL (Uniform Resource Locator) is a string of text that identifies a specific webpage or resource on the internet. It usually includes the protocol, the domain name, and the path to a specific page or resource.

// What is DNS?
    //DNS (Domain Name System) is a system used to translate domain names into IP addresses that computers can use to connect to each other.

// What is a query string?
    // A query string is a part of a URL that includes information that is sent to the server as part of a request. It usually starts with a "?" character and is followed by one or more key-value pairs.

// What are two HTTP verbs and how are they different?
    //GET and POST. GET requests retrieve information from the server, while POST requests submit information to the server.

// What is an HTTP request?
    //An HTTP request is a message sent from a client (such as a web browser) to a server, asking it to perform a specific action or retrieve specific information.

// What is an HTTP response?
    //An HTTP response is a message sent from a server to a client in response to an HTTP request. 

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
    //HTTP headers are fields that are included in an HTTP request or response, used to provide additional information about the request or the resource being requested. 

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
    //When you type "http://somesite.com/some/page.html" into a browser, the browser first sends a DNS request to translate the domain name "somesite.com" into an IP address. Once it has the IP address, it sends an HTTP request to the server at that address, asking for the specific page "/some/page.html". The server then sends an HTTP response back to the browser, containing the requested page or an error message if the page could not be found.

//PART 2
    //~ curl -v 'https://icanhazdadjoke.com/search?term=pirate'

    //dig icanhazdadjoke.com

    //How Web Works Exercise python3 -m http.server
    // Serving HTTP on :: port 8000 (http://[::]:8000/) ...
    // ::1 - - [17/Jan/2023 17:40:49] "GET / HTTP/1.1" 200 -
    // ::1 - - [17/Jan/2023 17:40:49] "GET /app.js HTTP/1.1" 200 -
    // ::1 - - [17/Jan/2023 17:40:49] code 404, message File not found
    // ::1 - - [17/Jan/2023 17:40:49] "GET /favicon.ico HTTP/1.1" 404 -
