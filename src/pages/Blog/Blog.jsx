import React from "react";

const Blog = () => {
  return (
    <div className="my-10 px-4 md:px-10">
      <h2 className="text-4xl text-center text-white border-b-2">All Blog</h2>
      <div className="text-white">
        <div className="mb-8">
          <h2 className="text-xl md:text-3xl text-white">
            1.Difference between SQL and NoSQL
          </h2>
          <em className="text-info font-semibold">Ans:</em>
          <div>
            <p className="text-xl">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
            <h3 className="text-info my-4 text-[1.45rem]">
              There are five practical differences between SQL and NoSQL:
            </h3>
            <ol className="text-xl">
              <li>1. Language</li>
              <li>2. Scalability</li>
              <li>3. Structure</li>
              <li>4. Properties</li>
              <li>5. Support and communities</li>
            </ol>
          </div>
        </div>
        <div className="my-16">
          <h2 className="text-xl md:text-3xl text-white">
            2.What is JWT, and how does it work?
          </h2>
          <em className="text-info font-semibold">Ans:</em>
          <div>
            <p className="text-xl">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object.
            </p>
            <h3 className="my-4 text-[1.45rem]">
              It is compact, readable and digitally signed using a private key/
              or a public key pair by the Identity Provider(IdP). So the
              integrity and authenticity of the token can be verified by other
              parties involved.
            </h3>
            <h2 className="text-4xl">Structure of JWT</h2>
            <h3 className="text-2xl my-2">
              A JSON Web Token consists of 3 parts separated by a period.
            </h3>
            <p className="bg-[#08090A] px-6 py-4 text-xl">
              header.payload.signature
            </p>
          </div>
        </div>
        <div className="my-16">
          <h2 className="text-xl md:text-3xl text-white">
            3.What is the difference between javascript and NodeJS?
          </h2>
          <em className="text-info font-semibold">Ans:</em>
          <div>
            <p className="text-xl">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node.js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.
            </p>
            <h3 className="text-info my-4 text-[1.45rem]">
              Major Comparison Between Node.js and JavaScript
            </h3>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>JavaScript</th>
                    <th>Node.js</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      It is an accessible, bridge, parsed, lightweight,
                      reactive, and web <br /> apps programming language.{" "}
                    </td>
                    <td>
                      It's a bridge, open-source Js runtime environment for{" "}
                      <br /> executing Js on the server.
                    </td>
                  </tr>
                  <tr className="">
                    <td>
                      It's a programming language, after all. Any browser with a
                      competent <br /> browser engine will operate.
                    </td>
                    <td>
                      It's a JavaScript translator and environment that includes
                      some valuable <br /> libraries for JavaScript programming.
                    </td>
                  </tr>
                  <tr>
                    <td>It's most commonly used on client-side servers.</td>
                    <td>It's mainly popular on the server-side.</td>
                  </tr>
                  <tr>
                    <td>The node community does not care about JavaScript.</td>
                    <td>
                      All node projects represent the JavaScript community.
                    </td>
                  </tr>
                  <tr>
                    <td>It's made for creating network-centric apps.</td>
                    <td>
                      It's made for real-time data-intensive apps that run on{" "}
                      <br /> multiple platforms.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      It's a new release of the ECMA script that works on <br />{" "}
                      the C++-based V8 engine.
                    </td>
                    <td>C++, C, and JavaScript are used.</td>
                  </tr>
                  <tr>
                    <td>
                      TypedJS, RamdaJS, and other JavaScript frameworks are
                      examples.
                    </td>
                    <td>
                      Nodejs modules include Lodash and Express. All of these{" "}
                      <br /> modules must be imported from npm.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="my-16">
          <h2 className="text-xl md:text-3xl text-white">
            4.How does NodeJS handle multiple requests at the same time?
          </h2>
          <em className="text-info font-semibold">Ans:</em>
          <div>
            <p className="text-xl">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
