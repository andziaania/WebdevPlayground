This are some svg code playings basing on https://www.youtube.com/watch?v=LKwXoaFwYFk

IMPORTANT NOTES FOR CREATING SVG WITH INKSCAPE:
1. Inkscape (set before drawing shapes)
	->ctr+Shift+P -> Svg output -> Path Data -> Absolute
2. <g> with translate attribute
3. If strange rotations happen during animation
-make sure the path coordinates have all letters capital (which means the coordinates are absolute)
-make sure the coordinates from one anime value are created by previous value with the same no. of points (create the svg again)
and the same with initial value from the html <svg> object.
