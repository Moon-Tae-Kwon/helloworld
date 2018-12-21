var Browser = require('zombie')
var assert = require('assert')
var app = require('../helloworld')

/*
  * localhost:3000 으로 접속하기전에 before 가로채기 함수를 사용하여 
  it 호출하는 코드앞에 헤드리스 부라우저가 적절한 서버를 가리키도록 설정
*/
describe('main page', function() { 
  before(function() {
    this.browser = new Browser({ site: 'http://localhost:3000' })
  })
  before(function(done) {
    this.browser.visit('/', done)
  })
  it('should say hello world', function() { 
    assert.ok(this.browser.success)
    assert.equal(this.browser.text(), "Hello World")
  })
})
