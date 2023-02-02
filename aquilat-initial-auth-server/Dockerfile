FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# ENV PORT 3000
# EXPOSE ${PORT}
EXPOSE 9000
CMD [ "node", "app.js" ]