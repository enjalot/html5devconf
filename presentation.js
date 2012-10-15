(function() {


  make_trib({code: "code/intro.js", display: "#display1", editor: "#editor1"});

  make_trib_gist({gistid: "3891115", display: "#display2", editor: "#editor2"});

  make_trib_gist({gistid: "3891155", display: "#display3", editor: "#editor3"});



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

  function make_trib_gist(options) {

    var tb = Tributary();
    tb.gist(options.gistid, function(ret) {

      var config = ret.config;
      config.contexts = [];

      var context, editor;
      ret.models.each(function(m) {
        type = m.get("type");

        context = tb.make_context({
          config: config,
          model: m,
          display: d3.select(options.display)
        });
        if(context) {
          config.contexts.push(context);
          context.render();
          if(m.get("filename") !== "inlet.js") {
            context.execute();
          } else {
            editor = new tb.Editor({
              model: m,
              el: d3.select(options.editor).node()
            });
            editor.render();
          }
        }
      });
      config.contexts.forEach(function(c) {
        if(c.model.get("filename") === "inlet.js") {
          //first load should auto init
          tb.autoinit = true;
          c.execute();
          tb.autoinit = config.get("autoinit");
        }
      });
    });
  }





}());

