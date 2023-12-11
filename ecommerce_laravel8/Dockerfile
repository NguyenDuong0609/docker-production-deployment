FROM php:8.0.0-fpm

WORKDIR /var/www

COPY ./ecommerce_laravel8/composer.lock ./ecommerce_laravel8/composer.json /var/www/
COPY ./ecommerce_laravel8/package.json /var/www/

# Add npm
COPY --from=node:16.0.0-slim /usr/local/bin /usr/local/bin
COPY --from=node:16.0.0-slim /usr/local/lib/node_modules /usr/local/lib/node_modules

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Install dependencies
RUN apt-get update && apt-get install -y  \
    build-essential \
    libpng-dev \
    libzip-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libonig-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl

RUN apt-get update \
 && apt-get install -y \
 nodejs
RUN npm install

ENV COMPOSER_ALLOW_SUPERUSER=1
RUN set -eux
RUN composer install --no-scripts --no-autoloader

# Add user for laravel
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy application folder
COPY ./ecommerce_laravel8 /var/www

# Copy existing permissions from folder to docker
COPY --chown=www:www . /var/www
RUN chown -R www-data:www-data /var/www
# Not 777 for production
RUN chmod 777 /var/www

# change current user to www
# USER www

# Set the entrypoint to the script with CMD arguments
COPY ./ecommerce_laravel8/entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 9000
CMD ["php-fpm"]