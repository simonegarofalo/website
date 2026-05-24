# ─── Stage 1: builder ────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (separate layer → cached unless lockfile changes)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ─── Stage 2: runner ─────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone output (includes all server-side code and node_modules subset)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy static assets served by Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy public directory
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
