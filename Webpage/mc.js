// Generated by CoffeeScript 1.6.3
(function() {
  var $, url;

  $ = jQuery;

  url = "http://localhost:8071/motion-control/update";

  $('.command').click(function() {
    var input, remote;
    input = $(this).val();
    remote = function(input) {
      var move, value;
      if (input === "W(Forward)") {
        move = "forward";
        value = 1;
      } else if (input === "A(Left)") {
        move = "turn";
        value = -1;
      } else if (input === "S(Right)") {
        move = "turn";
        value = -1;
      } else if (input === "D(Reverse)") {
        move = "forward";
        value = -1;
      } else if (input === "Q(Strafe Left)") {
        move = "strafe";
        value = -1;
      } else if (input === "E(Strafe Right)") {
        move = "strafe";
        value = 1;
      } else if (input === "X(Hand-Brake)") {
        move = "forward";
        value = 0;
      }
      return $.ajax({
        type: "POST",
        url: "127.0.0.1:8071/motion-control/update",
        data: {
          move: value
        },
        dataType: "jsonp"
      });
    };
    return remote(input);
  });

}).call(this);
