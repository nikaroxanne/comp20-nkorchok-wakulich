Nika Korchok Wakulich
lab 9
Comp 20
August 3, 2016

Answers to questions for lab:


Response to question from "Instructions, Part 2": No, it does not work. The following messages is displayed in the Javscript console when I try to open the index.html file on my web browser: "lab.js:6 XMLHttpRequest cannot load file:///home/tuftscs/comp20/comp20-nkorchok-wakulich/messages/data.json. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource."


Response to question from "Instructions, Part 3"
No, when loading data from the URI https://messagehub.herokuapp.com/messages.json., the program does not work.


Response to Important Question:
No, it is no possible to request data from a different origin or from your local machine because it violates the same origin policy. The same origin policy is put in place to protect users from malicious content. Without the same origin policy, websites are vulnerable to cross-site scripting, where hackers can implement client-side scripts which were not originally intended for that website's audience (and which can cause serious damage to users). For this reason, the only Javascript that can access resources on a website, etc. is one that comes from the same origin. The same origin refers to having the same protocol, port, and host. If they do not, then information from one website could be subject to hacks from another site. There are ways to circumnavigate the same origin policy (i.e. Cross-Origin Resource Sharing, or CORS, helps to determine whether a cross-origin request can be safely executed) but the same origin policy is generally the rule for XMLHTTPRequests. 

Citation note: I am citing the three articles listed on the lab as references as well as two others, which all gave me the information to respond to these questions in an informed manner:
https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
https://security.stackexchange.com/questions/8264/why-is-the-same-origin-policy-so-important
https://en.wikipedia.org/wiki/XMLHttpRequest
https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
https://en.wikipedia.org/wiki/Cross-site_scripting


Responses to questions for README

1. Elements correctly implemented: Correctly executed an XMLHttpRequest to get data from data.json file and then correctly parsed that data and outputted it to the "messages" div class in the html file. When opened on Python's simple HTTP Server, the "messages" correctly load and are displayed in an aquamarine div, which I modified in the CSS file.
Elements not correctly implemented: I believe I correctly implemented everything for this lab since the data shows up as expected on the web page when using the Python Simple HTTP Server.

2. I didn't work/collaborate with anyone on this assignment. I referenced the redline.html file on the WebProgramming repo on the class Github in formatting and checking syntax. I also utilized the tutorials on W3Schools.com to check finer points of parsing a JSON file from an XMLHTTPRequest.

3. I spent approximately 2 hours on this assignment.
