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
### Description of attributes
| Attribute        | Description           | Required | Example  |
| :------------- |:-------------| :-----:| :-----|
| ng-model | model of checkbox | Yes | choices.checkbox1 |
| checked-icon-name | [Google material design icon](https://www.google.com/design/icons/) name for checked state | No | check_circle, check_box_outline_blank OR '&#xE86C;' , '&#xE835;' (For IE 9 or below)|
| unchecked-icon-name | [Google material design icon](https://www.google.com/design/icons/) name for unchecked state | No | radio_button_unchecked, check_box OR '&#xE836;' , '&#xE834;' (For IE 9 or below)|
| checked-icon-color | Icon color in hex for checked state | No | '#009688' |
| unchecked-icon-color | Icon color in hex for unchecked state | No | '#B2DFDB' |
| size | size of checkbox | No | small, medium or large |
| pre-selected | if 'true' checkbox will be selected at start, defaults to false | No | true OR false
| show-label | Don't show label <span> if false, defaults to true | No | true OR false