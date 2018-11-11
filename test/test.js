'use strict';

var expect = require('chai').expect;
var DebugConsole = require('../index');

describe('#DebugConsole',function() {
    it('Simple Test',function() {
        var cons = new DebugConsole({
            patch:['log']
        });
        expect(cons.patch[0]).to.equal('log');
    });
});