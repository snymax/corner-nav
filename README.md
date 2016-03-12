# corner-nav
A diagonal navigation bar

#usage
include stylesheet
```html
<link rel="stylesheet" href="stylesheets/screen.css" type="text/css">
```
or import scss into project
```scss
@import "sass/screen.scss";
```

add nav bar markdown
```html

<nav id="diagnav">
    <ul>
        <li title="Home"><a href="#" class="icon-home">Home</a></li>
        <li title="Services"><a href="#"  class="icon-wrench">Services</a></li>
        <li><a href="#" title="Downloads" class="icon-download">Downloads</a></li>
        <li><a href="#" title="Tips &amp; Tricks" class="icon-tiptricks">Tips &amp;<br>Tricks</a></li>
    </ul>
</nav>

include the corner nav script
```html
<script src="js/diagnav.js"></script>

## About
placed nav bar at 45 degree in the top right corner
if text is to large text size wil be reduced

##future
create a multi bar markdown 
would function the same but allows you do set up multiple nav bars on different buttons or the same one.
also would have font size scaling
