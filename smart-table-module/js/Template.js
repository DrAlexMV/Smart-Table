angular.module('smartTable.templates', ['partials/defaultCell.html', 'partials/defaultHeader.html', 'partials/editableCell.html', 'partials/globalSearchCell.html', 'partials/pagination.html', 'partials/selectAllCheckbox.html', 'partials/selectionCheckbox.html', 'partials/smartTable.html', 'partials/tabs.html']);

angular.module("partials/defaultCell.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/defaultCell.html",
    "{{formatedValue}}");
}]);

angular.module("partials/defaultHeader.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/defaultHeader.html",
    "<span class=\"header-content\" ng-class=\"{'sort-ascent':column.reverse==true,'sort-descent':column.reverse==false}\">{{column.label}}</span>");
}]);

angular.module("partials/editableCell.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/editableCell.html",
    "<div ng-dblclick=\"toggleEditMode($event)\">\n" +
    "    <span ng-hide=\"isEditMode\">{{value | format:column.formatFunction:column.formatParameter}}</span>\n" +
    "\n" +
    "    <form ng-submit=\"submit()\" ng-show=\"isEditMode\" name=\"myForm\">\n" +
    "        <input name=\"myInput\" ng-model=\"value\" type=\"type\" input-type/>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("partials/globalSearchCell.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/globalSearchCell.html",
    "<div class='row well well-small'>\n" +
    "	<div class='input-group col-lg-4'>\n" +
    "		<span class='input-group-btn'>\n" +
    "			<button popover-placement='bottom' class='btn btn-info'>\n" +
    "				<span class='glyphicon glyphicon-search'></span>\n" +
    "			</button>\n" +
    "		</span>\n" +
    "		<input type=\"text\" class='form-control' ng-model=\"searchValue\">\n" +
    "	</div>\n" +
    "	<div class='col-lg-7'>\n" +
    "		<button ng-click='addButtonPressed()' class='btn btn-success pull-right'>\n" +
    "			<span class='glyphicon glyphicon-plus'></span>\n" +
    "		</button>\n" +
    "	</div>\n" +
    "	<div class='col-lg-1'>\n" +
    "		<button ng-click=\"removeButtonPressed()\" class='btn btn-danger pull-right'>\n" +
    "			<span class='glyphicon glyphicon-remove'></span>\n" +
    "		</button>		\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("partials/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/pagination.html",
    "<ul class='pagination'>\n" +
    "    <li ng-repeat=\"page in pages\" ng-class=\"{active: page.active, disabled: page.disabled}\">\n" +
    "    	<a ng-click=\"selectPage(page.number)\">{{page.text}}</a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("partials/selectAllCheckbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/selectAllCheckbox.html",
    "<input class=\"smart-table-select-all\"  type=\"checkbox\" ng-model=\"holder.isAllSelected\"/>");
}]);

angular.module("partials/selectionCheckbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/selectionCheckbox.html",
    "<input type=\"checkbox\" ng-model=\"dataRow.isSelected\" stop-event=\"click\"/>");
}]);

angular.module("partials/smartTable.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/smartTable.html",
    "<table class=\"smart-table\">\n" +
    "    <thead>\n" +
    "    <tr class=\"smart-table-global-search-row\" ng-show=\"isGlobalSearchActivated\">\n" +
    "        <td class=\"smart-table-global-search\" column-span=\"{{columns.length}}\" colspan=\"{{columnSpan}}\">\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr class=\"smart-table-tabs-row\" ng-show=\"areTabsActivated\">\n" +
    "        <td class=\"smart-table-tabs\" column-span=\"{{columns.length}}\" colspan=\"{{columnSpan}}\">\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr class=\"smart-table-header-row\">\n" +
    "        <th ng-repeat=\"column in columns\" ng-include=\"column.headerTemplateUrl\"\n" +
    "            class=\"smart-table-header-cell {{column.headerClass}}\" scope=\"col\">\n" +
    "        </th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"dataRow in displayedCollection\" ng-class=\"{selected:dataRow.isSelected}\"\n" +
    "        class=\"smart-table-data-row\">\n" +
    "        <td ng-repeat=\"column in columns\" class=\"smart-table-data-cell {{column.cellClass}}\"></td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "    <tfoot ng-show=\"isPaginationEnabled\">\n" +
    "    <tr class=\"smart-table-footer-row\">\n" +
    "        <td colspan=\"{{columns.length}}\">\n" +
    "            <div pagination-smart-table=\"\" num-pages=\"numberOfPages\" max-size=\"maxSize\" current-page=\"currentPage\"></div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    </tfoot>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("partials/tabs.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/tabs.html",
    "<tabset>\n" +
    "	<tab>\n" +
    "		<tab-heading>\n" +
    "				<h4>\n" +
    "					<p>\n" +
    "						<span class='glyphicon glyphicon-list-alt'></span>\n" +
    "						All\n" +
    "					</p>\n" +
    "				</h4>\n" +
    "		</tab-heading>\n" +
    "	</tab>\n" +
    "	<tab>\n" +
    "		<tab-heading>\n" +
    "				<h4>\n" +
    "					<p class='text-warning'>\n" +
    "						<span class='glyphicon glyphicon-bell'></span>\n" +
    "						Alarm\n" +
    "					</p>\n" +
    "				</h4>\n" +
    "		</tab-heading>\n" +
    "	</tab>\n" +
    "	<tab>\n" +
    "		<tab-heading>\n" +
    "			<div class='col-md-4'>\n" +
    "				<h4>\n" +
    "					<p class='text-danger'>\n" +
    "						<span class='glyphicon glyphicon-warning-sign'></span>\n" +
    "						Warning	\n" +
    "					</p>\n" +
    "				</h4>\n" +
    "			</div>\n" +
    "		</tab-heading>\n" +
    "	</tab>\n" +
    "</tabset>\n" +
    "");
}]);
