# angular-material-checkbox
Simple angular check-box directive using Google material design icons.

Demo : coming soon

###Key Features
* Uses Google material font icons to show checkbox
* Shows just a checkbox or checkbox with inline label
* Label is also clikable if used
* Older IE(tested in IE 7+) support if icons used in specific way
* Easy to use & fully custmizable

### Getting Started
Download the package, and include the /checkbox-directive.js file in your page.

```bash
bower install angular-material-checkbox --save
```
Then add following line in your index.html head section:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Also add the angular-material-checkbox module to your Angular App file, e.g.
```js
var app = angular.module('app', ["angular-material-checkbox"]);
```
### Usage(With minimum options)

As an element(For newer HTML5 browsers):
```html
<sb-checkbox
	label="test label"
	ng-model="user.test1"
 />
<span> model value: {{user.test1}} </span>
```
As an attribute(If you want to support older IE, also use angular 1.2.8):
```html
<!-- Used as attribute to support <IE9 versions -->
<div sb-checkbox label="test labrl"
	 			 ng-model="user.test1">
</div>
<span> model value: {{user.test1}} </span>
```


