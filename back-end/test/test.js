var expect = require('chai').expect;
var request = require('request');
var {PORT} = require('../config/globalVariables');

describe("Status and Content",function(){

    describe("Listing API", function(){
        it('status',function(done){
            request(`http://localhost:${PORT}/list-products`,function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })

        it("Check Response Type",function(done){
            request(`http://localhost:${PORT}/list-products`,function(error, response, body){
                expect(JSON.parse(response.body).data).to.be.an("array");
                done();
            })
        })

        it("Content Length",function(done){
            request(`http://localhost:${PORT}/list-products`,function(error, response, body){
                expect(JSON.parse(response.body).data.length).greaterThan(0);
                done();
            })
        })
        
        it('status should equal 200',function(done){
            request(`http://localhost:${PORT}/foodtype/milk`,function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        
        it("should return list of candies",function(done){
            request(`http://localhost:${PORT}/foodtype/candy`,function(error, response, body){
                expect(JSON.parse(response.body).data).to.be.an("array");
                done();
            })
        })
        
    })
})
