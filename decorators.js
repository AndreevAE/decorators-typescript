var timerFunctions = (function() {

  function debounce(func, timeDelay, isTrailing) {

    var timerId;

    function trailing() {

      var savedThis = this;
      var savedArgs = arguments;

      clearTimeout(timerId);

      timerId = setTimeout(function() {
        func.apply(savedThis, savedArgs);
      }, timeDelay);
    }

    var state = 1;

    function leading() {

      if (state) {
        state = 0;
        func.apply(this, arguments);
      } else {
        clearTimeout(timerId);
      }
      timerId = setTimeout(function() {
        state = 1;
      }, timeDelay);
    }

    if (isTrailing) {
      return trailing;
    }

    return leading;
  }

  function throttle(func, timeDelay) {

    var isThrottled = false;
    var savedThis, savedArgs;

    function wrapper() {

      savedThis = this;
      savedArgs = arguments;

      if (!isThrottled) {

        func.apply(savedThis, savedArgs);
        isThrottled = true;

        setTimeout(function() {
          isThrottled = false;
        }, timeDelay);
      } else {

        setTimeout(function() {
          wrapper.apply(savedThis, savedArgs);
        }, timeDelay);

      }
    }

    return wrapper;
  }

  return {
    debounce: debounce,
    throttle: throttle
  };

})();

module.exports = timerFunctions;
