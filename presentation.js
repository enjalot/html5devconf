        (function() {
            var tb = Tributary();

            var config = new tb.Config();

            var model = new tb.CodeModel();

            var context = new tb.TributaryContext({
              config: config,
              model: model,
              el: d3.select("#display1").node()
            });
            context.render();

            var editor = new tb.Editor({
              model: model,
              el: d3.select("#editor1").node()
            });
            editor.render();


            var tb2 = Tributary();

            var config2 = new tb2.Config();

            var model2 = new tb2.CodeModel();

            var context2 = new tb2.TributaryContext({
              config: config2,
              model: model2,
              el: d3.select("#display2").node()
            });
            context2.render();

            var editor2 = new tb2.Editor({
              model: model2,
              el: d3.select("#editor2").node()
            });
            editor2.render();


        }());

