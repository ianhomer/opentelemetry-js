# Overview

OpenTelemetry HTTPS Instrumentation allows the user to automatically collect trace data and export them to the backend
of choice. This example exports directly to Zipkin or Jaeger.

This is a simple example that demonstrates tracing HTTPS request from client to server. The example
shows key aspects of tracing such as

- Root Span (on Client)
- Child Span (on Client)
- Child Span from a Remote Parent (on Server)
- SpanContext Propagation (from Client to Server)
- Span Events
- Span Attributes

## Installation

```sh
# from this directory
npm install
```

Setup [Zipkin Tracing](https://zipkin.io/pages/quickstart.html)
or
Setup [Jaeger Tracing](https://www.jaegertracing.io/docs/latest/getting-started/#all-in-one)
or

```sh
# from this directory, requires docker and docker-compose
npm run docker:start
# Zipkin UI will be available at http://localhost:9411/zipkin/
# Jaeger UI will be available at http://localhost:16686/
```

## Run the Application

### Zipkin

- Run the server

   ```sh
   # from this directory
   npm run zipkin:server
   ```

- Run the client

   ```sh
   # from this directory
   npm run zipkin:client
   ```

#### Zipkin UI

`zipkin:server` script should output the `traceid` in the terminal (e.g `traceid: 4815c3d576d930189725f1f1d1bdfcc6`).
Go to Zipkin with your browser <http://localhost:9411/zipkin/traces/(your-trace-id)> (
e.g <http://localhost:9411/zipkin/traces/4815c3d576d930189725f1f1d1bdfcc6)>

<p align="center"><img alt="Zipkin UI showing a trace" src="./images/zipkin-ui.png?raw=true"/></p>

### Jaeger

- Run the server

   ```sh
   # from this directory
   npm run jaeger:server
   ```

- Run the client

   ```sh
   # from this directory
   npm run jaeger:client
   ```

#### Jaeger UI

`jaeger:server` script should output the `traceid` in the terminal (e.g `traceid: 4815c3d576d930189725f1f1d1bdfcc6`).
Go to Jaeger with your browser <http://localhost:16686/trace/(your-trace-id)> (
e.g <http://localhost:16686/trace/4815c3d576d930189725f1f1d1bdfcc6)>

<p align="center"><img alt="Jaeger UI showing a trace" src="images/jaeger-ui.png?raw=true"/></p>

## Useful links

- For more information on OpenTelemetry, visit: <https://opentelemetry.io/>
- For more information on OpenTelemetry for Node.js,
  visit: <https://github.com/open-telemetry/opentelemetry-js/tree/main/packages/opentelemetry-sdk-trace-node>

## LICENSE

Apache License 2.0
