FROM nginx:1.25-alpine
WORKDIR /etc/nginx
COPY nginx.conf  .
COPY templates ./templates/

RUN echo "upstream api-upstream { server api:9000; }" > ./conf.d/upstream.conf

EXPOSE 80
EXPOSE 443

# CMD tail -f /dev/null