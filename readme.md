# SvgToCreateJsPath

This is a little project to convert svg paths into CreateJs graphics markup. Still a work in progress as some commands are missing but it can be used right now for some simple paths. 

Feel free to contribute, to finish it or and make improvments.

## Paths

> Simple or compound shape outlines are drawn with curved or straight lines that can be filled in, outlined, or used as a clipping path. Paths have a compact coding.
For example, M (for “move to”) precedes initial numeric x and y coordinates, and L (for “line to”) precedes a point to which a line should be drawn. Further command letters (C, S, Q, T, and A) precede data that is used to draw various Bézier and elliptical curves. Z is used to close a path.
In all cases, absolute coordinates follow capital letter commands and relative coordinates are used after the equivalent lower-case letters. [1][1]

[1]: https://www.w3.org/TR/SVG11/paths.html

## Known Issues 
- Will only run in browsers which support ES6 modules. 
- 'AQT' Commands have not yet been completed.

## Useful Links

- CreateJs: https://www.createjs.com/
- CreateJs Graphics Class: https://www.createjs.com/docs/easeljs/classes/Graphics.html
- SVG: https://en.wikipedia.org/wiki/Scalable_Vector_Graphics
- SVG Specification: Paths: https://www.w3.org/TR/SVG11/paths.html
- SVG Minifyer: https://jakearchibald.github.io/svgomg/
- ES6 Modules: https://jakearchibald.com/2017/es-modules-in-browsers/