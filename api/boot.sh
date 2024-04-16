#!/bin/bash

# Link sh to bash for better terminal use in container cli
ln -sf /bin/bash /bin/sh

# Install dependencies
composer install --no-interaction --optimize-autoloader

# Run database migrations
php bin/console doctrine:migrations:migrate --no-interaction

# Clear cache
php bin/console cache:clear

echo "Running PHP-FPM..."
# Run php-fpm
php-fpm