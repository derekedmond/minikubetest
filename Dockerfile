FROM node:6.14.2
EXPOSE 8080
COPY planet.js .
CMD node planet.js