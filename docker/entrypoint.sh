#!/bin/sh

if [ ! -f /var/www/vendor/autoload.php ]; then
    composer install --no-interaction --optimize-autoloader
fi

php-fpm
