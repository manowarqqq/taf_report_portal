import * as log4js from 'log4js';

log4js.configure({
    appenders: {
        console: {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '%[[%d{dd/MM/yyyy-hh.mm.ss}] - [%p] - %m%]',
            },
        } ,
    },
    categories: { default: { appenders: ['console'], level: 'debug' }},
});

export const logger = log4js.getLogger();

