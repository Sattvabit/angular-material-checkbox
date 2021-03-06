# angular-material-checkbox
Simple angular check-box/toggle button directive using Google material design [icons](https://www.google.com/design/icons/).

[Click Here](http://www.sattvabit.com/angular-material-checkbox/) for demo.

###Key Features
* Uses Google material font icons to show checkbox in div
* Shows just a checkbox or checkbox with inline label
* Label is also clickable
* Older IE(tested in IE 7+) support if icons used in specific way
* Easy to use & fully customizable

### Getting Started
Download the package, and include the `/checkbox-directive.js` file in your page.

```bash
bower install angular-material-checkbox --save
```
Then add material icons with following line in your `index.html` head section:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Also add the `sb.checkbox` as dependency to your Angular App main module, e.g.
```js
var app = angular.module('app', ['sb.checkbox']);
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
<!-- Used as attribute to support <=IE9 versions -->
<div sb-checkbox label="test labrl"
	 			 ng-model="user.test1">
</div>
<span> model value: {{user.test1}} </span>
```
NOTE: `sb-checkbox` class is added in check-box container `div` you can override it to apply custom css.
### Description of attributes
| Attribute        | Description           | Required | Example  |
| :------------- |:-------------| :-----:| :-----|
| ng-model | model of checkbox | Yes | choices.checkbox1 |
| checked-icon-name | [Google material design icon](https://www.google.com/design/icons/) name for checked state | No | check_circle, check_box OR `&#xE86C;` , `&#xE834;` (For IE 9 or below)|
| unchecked-icon-name | [Google material design icon](https://www.google.com/design/icons/) name for unchecked state | No | radio_button_unchecked, check_box_outline_blank OR `&#xE836;` , `&#xE835;` (For IE 9 or below)|
| checked-icon-color | Icon color in hex for checked state | No | '#009688' |
| unchecked-icon-color | Icon color in hex for unchecked state | No | '#B2DFDB' |
| size | size of checkbox | No | small, medium or large |
| pre-selected | if 'true' checkbox will be selected at start, defaults to false | No | true OR false
| show-label | Don't show label <span> if false, defaults to true | No | true OR false
