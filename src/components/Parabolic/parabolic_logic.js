export default () => `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Parabolic Curves</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.1/dat.gui.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.5/lodash.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js"></script>
  <style type="text/css">
body {background:none transparent;}
* {background:none transparent;}
#renderCanvas {background:none transparent;}
</style>
</head>

<body>
  <script>
    var svg = document.createElementNS("http://w3.org/2000/svg", "svg");
    var svgNS = svg.namespaceURI;

    var line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', 5);
    line.setAttribute('y1', 5);
    line.setAttribute('x2', 50);
    line.setAttribute('y2', 50);
    line.setAttribute('style', "stroke: rgb(255, 0, 0); stroke-width: 2");
    svg.appendChild(line);
    document.body.appendChild(svg);
  </script>
</body>

</html>
`