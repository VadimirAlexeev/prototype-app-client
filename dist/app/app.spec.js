System.register(["src/app/app"], function (_export) {
  "use strict";

  var Welcome, _prototypeProperties, _classCallCheck, RouterStub;
  return {
    setters: [function (_srcAppApp) {
      Welcome = _srcAppApp.Welcome;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      RouterStub = (function () {
        function RouterStub() {
          _classCallCheck(this, RouterStub);
        }

        _prototypeProperties(RouterStub, null, {
          configure: {
            value: function configure(handler) {
              handler(this);
            },
            writable: true,
            configurable: true
          },
          map: {
            value: function map(routes) {
              this.routes = routes;
            },
            writable: true,
            configurable: true
          }
        });

        return RouterStub;
      })();


      describe("the App module", function () {
        var sut;
        beforeEach(function () {
          sut = new Welcome();
        });

        it("check heading title", function () {
          expect(sut.heading).toEqual("Test");
        });
      });
    }
  };
});