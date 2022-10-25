import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-200  p-5 mt-0">
      {/* <h1>Hello Blog</h1> */}
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : What is
          <span className="text-red-500"> Cors</span>?
        </h3>
        <p>
          <span className="underline">Ans</span> : Cross-Origin Resource Sharing
          (CORS) is an HTTP-header based mechanism that allows a server to
          indicate any origins (domain, scheme, or port) other than its own from
          which a browser should permit loading resources. CORS also relies on a
          mechanism by which browsers make a "preflight" request to the server
          hosting the cross-origin resource, in order to check that the server
          will permit the actual request. In that preflight, the browser sends
          headers that indicate the HTTP method and headers that will be used in
          the actual request. An example of a cross-origin request: the
          front-end JavaScript code served from https://domain-a.com uses
          XMLHttpRequest to make a request for https://domain-b.com/data.json.
          For security reasons, browsers restrict cross-origin HTTP requests
          initiated from scripts. For example, XMLHttpRequest and the Fetch API
          follow the same-origin policy. This means that a web application using
          those APIs can only request resources from the same origin the
          application was loaded from unless the response from other origins
          includes the right CORS headers.
        </p>
      </div>
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : Why are you using
          <span className="text-red-500"> Firebase</span> ? What other options
          do you have to implement
          <span className="text-red-500"> Authentication</span> ?
        </h3>
        <p>
          <span className="underline">Ans</span> : Google Firebase offers many
          features that pitch it as the go-to backend development tool for web
          and mobile apps. It reduces development workload and time. And it's a
          perfect prototyping tool. Firebase is simple, lightweight, friendly,
          and industrially recognized. Indeed, Firebase is a less technical and
          time-saving alternative to writing full-fledged backend code for
          dynamic apps. You might also want to consider leveraging this tool if
          you eventually wish to host and manage your app in the cloud. Being
          serverless, Firebase removes the need to worry about the
          technicalities of cloud server configuration. As a Google Cloud
          service, it also gives you access to other Google products and
          features, like Google Drive and Sheets. For instance, you can import
          dummy data from Google Sheets and use it temporarily to serve your
          app.
        </p>
      </div>
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : How does
          <span className="text-red-500"> Private route </span> work ?
        </h3>
        <p>
          <span className="underline">Ans</span> : Private Routes in React
          Router (also called Protected Routes) require a user being authorized
          to visit a route . So if a user is not authorized for a specific page,
          they cannot access it. The most common example is authentication in a
          React application where a user can only access the protected pages
          when they are authorized (which means in this case being
          authenticated). Authorization goes beyond authentication though. For
          example, a user can also have roles and permissions which give a user
          access to specific areas of the application. If user is not authorized
          he or she cannot browse a private route in her browser.
        </p>
      </div>
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : What is
          <span className="text-red-500"> Node </span> and how does it works ?
        </h3>
        <p>
          <span className="underline">Ans</span> : Node.js is an open-source
          backend javascript runtime environment. It is a used as backend
          service where javascript works on the server-side of the application.
          This way javascript is used on both frontend and backend. Node.js runs
          on chrome v8 engine which converts javascript code into machine code,
          it is highly scalable, lightweight, fast, and data-intensive. Working
          of Node.js: Node.js accepts the request from the clients and sends the
          response, while working with the request node.js handles them with a
          single thread. To operate I/O operations or requests node.js use the
          concept of threads. Thread is a sequence of instructions that the
          server needs to perform. It runs parallel on the server to provide the
          information to multiple clients. Node.js is an event loop
          single-threaded language. It can handle concurrent requests with a
          single thread without blocking it for one request. Node.js basically
          works on two concept 1. Asynchronous 2.Non-blocking I/O
        </p>
      </div>
    </div>
  );
};

export default Blog;
