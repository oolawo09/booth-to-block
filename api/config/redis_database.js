var redis = require('redis');
var redisClient = redis.createClient(19549, 'redis://h:pb592e3874f118ad83248a4f48ae7db0fa007cf56c25e32f1ecb9325a3b21583c@ec2-34-233-181-119.compute-1.amazonaws.com');

redisClient.on('error', function (err) {
    console.log('Error ' + err);
});

redisClient.on('connect', function () {
    console.log('Redis is ready');
});

exports.redis = redis;
exports.redisClient = redisClient;