FROM mhart/alpine-node:8

ENV APPDIR=/app
RUN mkdir $APPDIR
RUN npm install --global tsc typescript
ENV HOME=$APPDIR
COPY package.json $APPDIR
COPY jest.config.js $APPDIR
COPY license.txt $APPDIR
COPY .gitignore $APPDIR
COPY tsconfig.json $APPDIR
WORKDIR $APPDIR
RUN npm install
CMD ["cat"]

