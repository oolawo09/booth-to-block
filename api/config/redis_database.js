var redis = require('redis');
var redisConfig = process.env.REDIS_URL; 
var redisClient = redis.createClient(process.env.REDIS_URL.split(":")[0], process.env.REDIS_URL.split(":")[1]);

redisClient.on('error', function (err) {
    console.log('Error ' + err);
});

redisClient.on('connect', function () {
    console.log('Redis is ready');
});

exports.redis = redis;
exports.redisClient = redisClient;