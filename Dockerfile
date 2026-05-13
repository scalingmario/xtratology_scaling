# Stage 1: Build
FROM node:22-alpine AS builder
RUN npm install -g pnpm@10.33.4
WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build --configuration production

# Stage 2: Serve
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/xtratology-web/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# OWASP: Least Privilege Principle
RUN chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html /etc/nginx/conf.d
USER nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
