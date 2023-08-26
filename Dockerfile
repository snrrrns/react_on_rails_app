FROM ruby:3.2.2

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile.lock yarn.lock ./

RUN curl -sL https://deb.nodesource.com/setup_19.x | bash - && \
    wget --quiet -O - /tmp/pubkey.gpg https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs yarn && \
    rm -rf /var/lib/apt/lists/* && \
    gem install bundler && \
    bundle install -j4 && \
    yarn install

COPY . .
