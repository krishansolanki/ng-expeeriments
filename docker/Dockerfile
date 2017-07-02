FROM node:7.4.0

RUN apt-get update\
 && apt-get install apt-transport-https\
 && apt-get install curl\
 && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -\
 && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list\
 && apt-get install -y sudo\
 && apt-get update\
 && apt-get install yarn

ADD package.json yarn.lock /cache/

RUN cd /cache; yarn install

WORKDIR /build
ENTRYPOINT ["/entrypoint.sh"]

ADD docker/entrypoint.sh /
