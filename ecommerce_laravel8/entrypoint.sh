#!/bin/sh
composer update
php artisan migrate
php artisan key:generate
php artisan passport:keys
npm run dev
exec "$@"