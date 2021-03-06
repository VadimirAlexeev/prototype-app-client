describe('aurelia skeleton app', function() {
  beforeEach( () => {
    browser.get('http://localhost:9000');

    browser.executeAsyncScript(
      'var cb = arguments[arguments.length - 1];' +
      'document.addEventListener("aurelia-composed", function (e) {' +
      '  cb("Prototype App composed")' +
      '}, false);'
    ).then(function(result){
        console.log(result);
    });
  });

  it('should load the page', function() {
    expect(browser.getTitle()).toBe('Test');
  });
});
