/**
 * Created by FeikoLai on 27/8/14.
 */

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest;

function CloudPrint(options) {

    var self = this;
    this._options = options || {};
    this.printers = {
        search: function (params, callback) {
            var parameters = {
                options: {
                    url: 'https://www.google.com/cloudprint/search',
                    method: 'POST'
                },
                requiredParams: [],
                pathParams: [],
                params: params,
                context: self
            };
            return createAPIRequest(parameters, callback);
        },
        get: function (params, callback) {
            var parameters = {
                options: {
                    url: 'https://www.google.com/cloudprint/printer',
                    method: 'POST'
                },
                params: params,
                requiredParams: ['printerid'],
                pathParams: [],
                context: self
            };
            return createAPIRequest(parameters, callback);
        }
    };
    this.jobs =
    {
        submit: function (params, callback) {
            var parameters = {
                options: {
                    url: 'https://www.google.com/cloudprint/submit',
                    method: 'POST'
                },
                params: params,
                requiredParams: ['printerid','title','ticket','content'],
                pathParams: [],
                context: self
            };
            return createAPIRequest(parameters, callback);
        },
        get: function (params, callback) {
            var parameters = {
                options: {
                    url: 'https://www.google.com/cloudprint/jobs',
                    method: 'POST'
                },
                requiredParams: [],
                pathParams: [],
                params: params,
                context: self
            };
            return createAPIRequest(parameters, callback);
        },
        delete: function (params, callback) {
            var parameters = {
                options: {
                    url: 'https://www.google.com/cloudprint/deletejob',
                    method: 'POST'
                },
                params: params,
                requiredParams: ['jobid'],
                pathParams: [],
                context: self
            };
            return createAPIRequest(parameters, callback);
        }
    }
}

module.exports = CloudPrint;