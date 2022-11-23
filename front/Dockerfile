FROM node:16

COPY ./ frontend
WORKDIR frontend

RUN npm install -f
RUN npm install -g serve

USER root

CMD ["bash", "./run_frontend.sh"]
