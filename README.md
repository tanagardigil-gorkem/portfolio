# Portfolio

Next.js portfolio for [gorkemtanagardigil.com](https://gorkemtanagardigil.com), deployed with Coolify on a VPS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Coolify (production)

This repo is set up for a **Dockerfile** build with Next.js `standalone` output.

| Setting | Value |
|--------|--------|
| Build pack | Dockerfile |
| Branch | `master` |
| Port | `3000` |
| Domain | `gorkemtanagardigil.com` |
| Auto-deploy | On push to `master` |

**DNS:** Point `gorkemtanagardigil.com` (and `www` if you use it) at the VPS IP, then enable HTTPS in Coolify.

**Local image check (optional):**

```bash
docker build -t portfolio .
docker run --rm -p 3000:3000 portfolio
```
