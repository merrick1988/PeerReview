(function () {
    'use strict';

    /* App Module */

    var mainModule = angular.module('mainModule', ['loginModule', 'personeModule', 'adminModule']);
    angular.module('loginModule', []);
    angular.module('personeModule', ['loadService']);
    angular.module('adminModule', ['LocalStorageModule', 'ui.bootstrap.dialog']);
    angular.module('loadService', ['ngResource']);
   

})();