<?php

return [
    # use mongodb as main data storage
    'database' => [
        'server' => 'mongodb://localhost:27017',
        'options' => [
            'db' => $_ENV['MONGODB_DATABASE'] ?? 'cockpitdb',
            'username' => $_ENV['MONGO_USERNAME'] ?? 'admin',
            'password' => $_ENV['MONGO_PASSWORD'] ?? 'admin1234'
        ]
    ],

    # use redis for memory storage
    'memory' => [
        'server' => 'redis://localhost:55001',
        'options' => [
            'password' => $_ENV['REDIS_PASSWORD'] ?? 'root'
        ]
    ],
];
