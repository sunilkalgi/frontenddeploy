FROM node:alpine
WORKDIR /frontend
COPY . .
RUN npm install -g npm@10.2.0
CMD ["npm","start"]

# FROM nginx
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]