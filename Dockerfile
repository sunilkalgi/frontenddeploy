FROM node:alpine
WORKDIR /frontend
COPY . .
RUN npm install
CMD ["npm","start"]

# FROM nginx
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]