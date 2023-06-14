# use the official PHP image as base image
FROM php:apache



RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd;

RUN pecl install mongodb \
    && docker-php-ext-enable mongodb;

RUN a2enmod rewrite;
