(function() {

  function make_trib(options) {

    d3.text(options.code, function(code) {

      var tb = Tributary();

      var config = new tb.Config();

      var model = new tb.CodeModel({code: code});

      var context = new tb.TributaryContext({
        config: config,
        model: model,
        el: d3.select(options.display).node()
      });
      context.render();
      context.execute();

      var editor = new tb.Editor({
        model: model,
        el: d3.select(options.editor).node()
      });
      editor.render();
    });
  }

  make_trib({code: "code/intro.js", display: "#display1", editor: "#editor1"});



}());

