var pg = require('pg');
module.exports = function(options) {
    var pool = new pg.Pool(options);

    return {
        name: 'postgresql',
        query: function(sql, params, callback) {
            pool.connect(function(err, client, done) {
                if (err) {
                    return callback(err);
                }
                client.query(sql, params, function(err, result) {
                    done();

                    callback(err, result);
                });
            });
        }
    };
};
