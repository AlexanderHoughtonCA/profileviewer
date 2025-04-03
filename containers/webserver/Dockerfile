# This docker file is for pv-webserver

FROM ubuntu:22.04
ENV TZ=America/Vancouver
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 8931

# Ubuntu updates
RUN apt-get -y update
ENV DEBIAN_FRONTEND=noninteractive

# Create app folder
RUN mkdir -p /app
WORKDIR /app

# NVM, Node, npm
ENV NODE_VERSION=18.20.7
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

RUN apt-get -y update

COPY ./package.json ./
RUN npm install
COPY . .

CMD ["node", "./index.js"]
