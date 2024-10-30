# Inngest Hono Deno example application


### Set env vars in .env, example:

```
INNGEST_EVENT_KEY=inngest-event-key
INNGEST_SIGNING_KEY=inngest-signing-key
INNGEST_API_BASE_URL=http://localhost:8090 
INNGEST_EVENT_API_BASE_URL=http://localhost:9999
```

### Run the app

```
deno run --env --watch --allow-net --allow-env --allow-read  main.ts
```

###Setup ngrok tunnel to ^

```
ngrok http 8000
```

### run dev server via docker

```
docker run -p 8288:8288 \
  inngest/inngest \
  inngest dev -u http://host.docker.internal:3000/api/inngest
```

### sync app from dev server using ngrok url

assuming: `https://9746-71-161-220-25.ngrok-free.app -> http://localhost:8000`

```
https://9746-71-161-220-25.ngrok-free.app/api/inngest
```
