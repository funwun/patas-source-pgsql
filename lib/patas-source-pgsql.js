module.exports = function(options) {
    var pg = require('pg');
    if (options.native) {
        pg = pg.native;
    }
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
        },
        cacheRule: function(sql, values, result, process) {
            if (sql.toLowerCase().lastIndexOf('select') === 0) {
                process(function(key, value) {
                    // not cached object properties
                    if (key.lastIndexOf('_', 0) === 0) {
                        value = undefined;
                    }
                    return value;
                });
            }
        }
    };
};
