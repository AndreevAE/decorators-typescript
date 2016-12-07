var assert = require("assert");
var lib = require("../decorators");
var sinon = require("sinon");

describe("debounce leading", function() {
  before(function() {
    this.clock = sinon.useFakeTimers();
  });

  after(function() {
    this.clock.restore();
  });

  it("вызывает функцию не чаще чем раз в ms миллисекунд", function() {
    var log = "";

    function f(a) {
      log += a;
    }

    f = lib.debounce(f, 1000);

    f(1); // выполнится сразу же
    f(2); // игнор

    setTimeout(function() {
      f(3);
    }, 100); // игнор (рановато)
    setTimeout(function() {
      f(4);
    }, 1200); // выполнится (таймаут прошёл)
    setTimeout(function() {
      f(5);
    }, 1500); // игнор

    this.clock.tick(5000);
    assert.equal(log, "14");
  });

  it("сохраняет контекст вызова", function() {
    var obj = {
      f: function() {
        assert.equal(this, obj);
      }
    };

    obj.f = lib.debounce(obj.f, 1000);
    obj.f("test");
  });

});

describe("debounce trailing", function() {
  before(function() {
    this.clock = sinon.useFakeTimers();
  });

  after(function() {
    this.clock.restore();
  });

  it("вызывает функцию не чаще чем раз в ms миллисекунд", function() {
    var log = "";

    function f(a) {
      log += a;
    }

    f = lib.debounce(f, 1000, true);

    f(1); // выполнится сразу же
    f(2); // игнор

    setTimeout(function() {
      f(3);
    }, 100); // игнор (рановато)
    setTimeout(function() {
      f(4);
    }, 1200); // выполнится (таймаут прошёл)
    setTimeout(function() {
      f(5);
    }, 1500); // игнор

    this.clock.tick(5000);
    assert.equal(log, "35");
  });

  it("сохраняет контекст вызова", function() {
    var obj = {
      f: function() {
        assert.equal(this, obj);
      }
    };

    obj.f = lib.debounce(obj.f, 1000, true);
    obj.f("test");
  });

});

describe("throttle(f, 1000)", function() {
  var f1000;
  var log = "";

  function f(a) {
    log += a;
  }

  before(function() {
    f1000 = lib.throttle(f, 1000);
    this.clock = sinon.useFakeTimers();
  });

  it("первый вызов срабатывает тут же", function() {
    f1000(1); // такой вызов должен сработать тут же
    assert.equal(log, "1");
  });

  it("тормозит второе срабатывание до 1000мс", function() {
    f1000(2); // (тормозим, не прошло 1000мс)
    f1000(3); // (тормозим, не прошло 1000мс)
    // через 1000 мс запланирован вызов с последним аргументом

    assert.equal(log, "1"); // пока что сработал только первый вызов

    this.clock.tick(1000); // прошло 1000мс времени
    assert.equal(log, "13"); // log==13, т.к. сработал вызов f1000(3)
  });

  it("тормозит третье срабатывание до 1000мс после второго", function() {
    this.clock.tick(100);
    f1000(4); // (тормозим, с последнего вызова прошло 100мс - менее 1000мс)
    this.clock.tick(100);
    f1000(5); // (тормозим, с последнего вызова прошло 200мс - менее 1000мс)
    this.clock.tick(700);
    f1000(6); // (тормозим, с последнего вызова прошло 900мс - менее 1000мс)

    this.clock.tick(100); // сработал вызов с 6

    assert.equal(log, "136");
  });

  after(function() {
    this.clock.restore();
  });

});
