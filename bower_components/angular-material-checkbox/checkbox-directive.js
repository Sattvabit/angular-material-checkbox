/* @preserve
 *
 * angular-material-checkbox
 * https://github.com/Sattvabit/angular-material-checkbox
 *
 * Version: 0.0.1 - 08/22/2015
 * License: MIT
 * Credits: sattvabitinc & contributors
 */
angular.module('sb.checkbox', [])
.constant('iconSizeClasses', {
    small: '24px',
    medium: '40px',
    large: '53px'
})
.constant('labelSizeClasses', {
    small: '16px',
    medium: '20px',
    large: '24px'
})

.filter('trust', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
})
.directive('sbCheckbox', ['iconSizeClasses', 'labelSizeClasses', function(iconSizeClasses, labelSizeClasses) {
	return {
		scope: {
			label:'@',
			checkedIconName:'@',
			uncheckedIconName:'@',
			checkedIconColor:'@',
			uncheckedIconColor:'@',
			size:'@',
			preSelected:'@',
			showLabel:'@'
		},
		require: 'ngModel',
		restrict: 'AE',
		template: '<div class="sb-checkbox" style=\'-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;\' unselectable=\'on\' onselectstart=\'return false;\' onmousedown=\'return false;\'><span class="custom-icon" ng-style="{color: checkboxModel.isChecked ? checkboxModel.checkedIconColor : checkboxModel.uncheckedIconColor}"><i class="material-icons" ng-style="{verticalAlign: \'middle\', fontSize: checkboxModel.iconFontSize}"  ng-bind-html="checkboxModel.isChecked ? checkboxModel.checkedIconName : checkboxModel.uncheckedIconName | trust"></i></span> <span ng-if="checkboxModel.showLabel" ng-class="{\'sb-checkbox-label-checked\':checkboxModel.isChecked, \'sb-checkbox-label-unchecked\':!checkboxModel.isChecked}">{{label}}</span></div>',
		link: function(scope, element, Attrs, ngModel) {
			element.css("cursor", "pointer");
			scope.checkboxModel = {
				isChecked: false,
				// checkedIconName: scope.checkedIconName || 'check_circle',
				// uncheckedIconName: scope.uncheckedIconName || 'radio_button_unchecked',
				// IE 6-9
				checkedIconName: scope.checkedIconName || '&#xE86C;',
				uncheckedIconName: scope.uncheckedIconName || '&#xE836;',
				checkedIconColor: scope.checkedIconColor || '#009688',
				uncheckedIconColor: scope.uncheckedIconColor || '#B2DFDB',
				size: scope.size || 'small',
				showLabel: true
			};
			console.log(iconSizeClasses['small']);
			var iconSizeClass = scope.checkboxModel.size.toLowerCase();
			if(iconSizeClass == 'small' || iconSizeClass == 'medium' || iconSizeClass == 'large') {
				scope.checkboxModel.iconFontSize = iconSizeClasses[scope.checkboxModel.size.toLowerCase()];
			}
			if(scope.showLabel == 'false') {
				scope.checkboxModel.showLabel = false;
			}
			if(scope.preSelected == 'true') {
				scope.checkboxModel.isChecked = true;
			}

			ngModel.$setViewValue(scope.checkboxModel.isChecked);

			element.bind('click', function() {
				scope.checkboxModel.isChecked = !scope.checkboxModel.isChecked;
				ngModel.$setViewValue(scope.checkboxModel.isChecked);
				scope.$apply();
			});
		}
	};
}]);