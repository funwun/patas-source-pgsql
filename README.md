# Patas data source for PostgreSQL

The PostgreSQL data source for the [patas](
    https://github.com/funwun/patas) module.

## Installation
```bash
npm install patas-source-pgsql
```

## Usage Example
```javascript
var Patas = require('patas').Patas,
    pgsqlSource = require('patas-source-pgsql');

// create postgresql source
var source = pgsqlSource({
    host: '192.168.28.155',
    user: 'postgres', //env var: PGUSER
    database: 'test', //env var: PGDATABASE
    password: 'test', //env var: PGPASSWORD
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
});

// create patas with source and stores
var patas = new Patas({
    source: source,
    stores: [...]
});
```
Get detail from [patas](https://github.com/funwun/patas).

## Options
Same as [node-pg-pool](https://github.com/brianc/node-pg-pool) pool config.

## License

The MIT License (MIT) Copyright (c) 2016 Lewis Deng &lt;kekuer@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
