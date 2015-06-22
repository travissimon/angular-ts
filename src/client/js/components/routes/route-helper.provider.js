/// <reference path="../../typings/app.d.ts" />
/*
 * Todo: implement in a more typescript friendly way
*/
var app;
(function (app) {
    var components;
    (function (components) {
        var routes;
        (function (routes) {
            'use strict';
            routeHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
            function routeHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
                /* jshint validthis:true */
                var config = {
                    docTitle: undefined,
                    resolveAlways: {}
                };
                $locationProvider.html5Mode(false);
                this.configure = function (cfg) {
                    angular.extend(config, cfg);
                };
                this.$get = RouterHelper;
                RouterHelper.$inject = ['$location', '$rootScope', '$state', '$log'];
                function RouterHelper($location, $rootScope, $state, $log) {
                    var handlingStateChangeError = false;
                    var stateCounts = {
                        errors: 0,
                        changes: 0
                    };
                    var service = {
                        addRoutes: addRoutes,
                        addWhen: addWhen,
                        getStates: getStates,
                        stateCounts: stateCounts
                    };
                    init();
                    return service;
                    ///////////////
                    function addWhen(initialUrl, redirectUrl) {
                        $urlRouterProvider.when(initialUrl, redirectUrl);
                        $log.debug('Added when: ' + initialUrl + ' -> ' + redirectUrl);
                    }
                    function addRoutes(states) {
                        states.forEach(function (state) {
                            state.resolve = angular.extend(state.resolve || {}, config.resolveAlways);
                            $stateProvider.state(state.name, state);
                            $log.debug('Adding route: ' + state.name);
                        });
                    }
                    function handleRoutingErrors() {
                        // Route cancellation:
                        // On routing error, go to the dashboard.
                        // Provide an exit clause if it tries to do it twice.
                        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                            if (handlingStateChangeError) {
                                return;
                            }
                            stateCounts.errors++;
                            handlingStateChangeError = true;
                            var destination = (toState && (toState.title || toState.name || toState.loadedTemplateUrl)) || 'unknown target';
                            var msg = 'Error routing to ' + destination + '. ' + (error.data || '') + '. <br/>' + (error.statusText || '') + ': ' + (error.status || '');
                            $log.error(msg);
                            $location.path('/');
                        });
                        $log.debug('routing error handler added');
                    }
                    function init() {
                        $log.debug('Routes initialising');
                        handleRoutingErrors();
                        initialiseBaseStates();
                    }
                    function getStates() {
                        return $state.get();
                    }
                    // initial setup. Does not belong here :-/
                    function initialiseBaseStates() {
                        $urlRouterProvider.otherwise('/404');
                    }
                }
            }
            angular.module('app.components.routes').provider('routeHelper', routeHelperProvider);
        })(routes = components.routes || (components.routes = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcm91dGVzL3JvdXRlLWhlbHBlci5wcm92aWRlci50cyJdLCJuYW1lcyI6WyJhcHAiLCJhcHAuY29tcG9uZW50cyIsImFwcC5jb21wb25lbnRzLnJvdXRlcyIsImFwcC5jb21wb25lbnRzLnJvdXRlcy5yb3V0ZUhlbHBlclByb3ZpZGVyIiwiYXBwLmNvbXBvbmVudHMucm91dGVzLnJvdXRlSGVscGVyUHJvdmlkZXIuUm91dGVySGVscGVyIiwiYXBwLmNvbXBvbmVudHMucm91dGVzLnJvdXRlSGVscGVyUHJvdmlkZXIuUm91dGVySGVscGVyLmFkZFdoZW4iLCJhcHAuY29tcG9uZW50cy5yb3V0ZXMucm91dGVIZWxwZXJQcm92aWRlci5Sb3V0ZXJIZWxwZXIuYWRkUm91dGVzIiwiYXBwLmNvbXBvbmVudHMucm91dGVzLnJvdXRlSGVscGVyUHJvdmlkZXIuUm91dGVySGVscGVyLmhhbmRsZVJvdXRpbmdFcnJvcnMiLCJhcHAuY29tcG9uZW50cy5yb3V0ZXMucm91dGVIZWxwZXJQcm92aWRlci5Sb3V0ZXJIZWxwZXIuaW5pdCIsImFwcC5jb21wb25lbnRzLnJvdXRlcy5yb3V0ZUhlbHBlclByb3ZpZGVyLlJvdXRlckhlbHBlci5nZXRTdGF0ZXMiLCJhcHAuY29tcG9uZW50cy5yb3V0ZXMucm91dGVIZWxwZXJQcm92aWRlci5Sb3V0ZXJIZWxwZXIuaW5pdGlhbGlzZUJhc2VTdGF0ZXMiXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUUvQyxBQUdBOztFQURFO0FBQ0YsSUFBTyxHQUFHLENBd0dUO0FBeEdELFdBQU8sR0FBRztJQUFDQSxJQUFBQSxVQUFVQSxDQXdHcEJBO0lBeEdVQSxXQUFBQSxVQUFVQTtRQUFDQyxJQUFBQSxNQUFNQSxDQXdHM0JBO1FBeEdxQkEsV0FBQUEsTUFBTUEsRUFBQ0EsQ0FBQ0E7WUFDMUJDLFlBQVlBLENBQUNBO1lBYWhCQSxtQkFBbUJBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLG1CQUFtQkEsRUFBRUEsZ0JB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QUVBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0E7UUFDdEZBLENBQUNBLEVBeEdxQkQsTUFBTUEsR0FBTkEsaUJBQU1BLEtBQU5BLGlCQUFNQSxRQXdHM0JBO0lBQURBLENBQUNBLEVBeEdVRCxVQUFVQSxHQUFWQSxjQUFVQSxLQUFWQSxjQUFVQSxRQXdHcEJBO0FBQURBLENBQUNBLEVBeEdNLEdBQUcsS0FBSCxHQUFHLFFBd0dUIiwiZmlsZSI6ImNvbXBvbmVudHMvcm91dGVzL3JvdXRlLWhlbHBlci5wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIgLz5cclxuXHJcbi8qIFxyXG4gKiBUb2RvOiBpbXBsZW1lbnQgaW4gYSBtb3JlIHR5cGVzY3JpcHQgZnJpZW5kbHkgd2F5XHJcbiovXHJcbm1vZHVsZSBhcHAuY29tcG9uZW50cy5yb3V0ZXMge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIElSb3V0ZUhlbHBlciB7XHJcblx0XHRhZGRSb3V0ZXMoc3RhdGVzOiBhbmd1bGFyLnVpLklTdGF0ZVtdKTogdm9pZDtcclxuICAgICAgICBnZXRTdGF0ZXMoKTogYW5ndWxhci51aS5JU3RhdGVbXTtcclxuICAgICAgICBzdGF0ZUNvdW50cygpOiBJU3RhdGVDb3VudDtcclxuICAgIH1cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJU3RhdGVDb3VudCB7XHJcblx0XHRlcnJvcnM6IG51bWJlcjtcclxuXHRcdGNoYW5nZXM6IG51bWJlcjtcclxuXHR9XHJcblxyXG5cdHJvdXRlSGVscGVyUHJvdmlkZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uUHJvdmlkZXInLCAnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ107XHJcblx0ZnVuY3Rpb24gcm91dGVIZWxwZXJQcm92aWRlcigkbG9jYXRpb25Qcm92aWRlciwgJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgIC8qIGpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xyXG4gICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGRvY1RpdGxlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJlc29sdmVBbHdheXM6IHt9XHJcbiAgICAgICAgfTtcclxuXHJcblx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uKGNmZykge1xyXG4gICAgICAgICAgICBhbmd1bGFyLmV4dGVuZChjb25maWcsIGNmZyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy4kZ2V0ID0gUm91dGVySGVscGVyO1xyXG5cclxuICAgICAgICBSb3V0ZXJIZWxwZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uJywgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJyRsb2cnXTtcclxuICAgICAgICBmdW5jdGlvbiBSb3V0ZXJIZWxwZXIoJGxvY2F0aW9uLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRsb2cpIHtcclxuICAgICAgICAgICAgdmFyIGhhbmRsaW5nU3RhdGVDaGFuZ2VFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgc3RhdGVDb3VudHMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IDAsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzOiAwXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VydmljZSA9IHtcclxuXHRcdFx0XHRhZGRSb3V0ZXM6IGFkZFJvdXRlcyxcclxuXHRcdFx0XHRhZGRXaGVuOiBhZGRXaGVuLFxyXG4gICAgICAgICAgICAgICAgZ2V0U3RhdGVzOiBnZXRTdGF0ZXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZUNvdW50czogc3RhdGVDb3VudHNcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG5cclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRmdW5jdGlvbiBhZGRXaGVuKGluaXRpYWxVcmw6IHN0cmluZywgcmVkaXJlY3RVcmw6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0XHRcdCR1cmxSb3V0ZXJQcm92aWRlci53aGVuKGluaXRpYWxVcmwsIHJlZGlyZWN0VXJsKTtcclxuXHRcdFx0XHQkbG9nLmRlYnVnKCdBZGRlZCB3aGVuOiAnICsgaW5pdGlhbFVybCArICcgLT4gJyArIHJlZGlyZWN0VXJsKTtcclxuXHRcdFx0fVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkUm91dGVzKHN0YXRlcykge1xyXG5cdFx0XHRcdHN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXRlKSB7XHJcblx0XHRcdFx0XHRzdGF0ZS5yZXNvbHZlID0gYW5ndWxhci5leHRlbmQoc3RhdGUucmVzb2x2ZSB8fCB7fSwgY29uZmlnLnJlc29sdmVBbHdheXMpO1xyXG5cdFx0XHRcdFx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoc3RhdGUubmFtZSwgc3RhdGUpO1xyXG5cdFx0XHRcdFx0JGxvZy5kZWJ1ZygnQWRkaW5nIHJvdXRlOiAnICsgc3RhdGUubmFtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJvdXRpbmdFcnJvcnMoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSb3V0ZSBjYW5jZWxsYXRpb246XHJcbiAgICAgICAgICAgICAgICAvLyBPbiByb3V0aW5nIGVycm9yLCBnbyB0byB0aGUgZGFzaGJvYXJkLlxyXG4gICAgICAgICAgICAgICAgLy8gUHJvdmlkZSBhbiBleGl0IGNsYXVzZSBpZiBpdCB0cmllcyB0byBkbyBpdCB0d2ljZS5cclxuICAgICAgICAgICAgICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VFcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGluZ1N0YXRlQ2hhbmdlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvdW50cy5lcnJvcnMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdTdGF0ZUNoYW5nZUVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gKHRvU3RhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0b1N0YXRlLnRpdGxlIHx8IHRvU3RhdGUubmFtZSB8fCB0b1N0YXRlLmxvYWRlZFRlbXBsYXRlVXJsKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1bmtub3duIHRhcmdldCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSAnRXJyb3Igcm91dGluZyB0byAnICsgZGVzdGluYXRpb24gKyAnLiAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvci5kYXRhIHx8ICcnKSArICcuIDxici8+JyArIChlcnJvci5zdGF0dXNUZXh0IHx8ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnOiAnICsgKGVycm9yLnN0YXR1cyB8fCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cdFx0XHRcdCRsb2cuZGVidWcoJ3JvdXRpbmcgZXJyb3IgaGFuZGxlciBhZGRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xyXG5cdFx0XHRcdCRsb2cuZGVidWcoJ1JvdXRlcyBpbml0aWFsaXNpbmcnKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVJvdXRpbmdFcnJvcnMoKTtcclxuXHRcdFx0XHRpbml0aWFsaXNlQmFzZVN0YXRlcygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRTdGF0ZXMoKSB7IHJldHVybiAkc3RhdGUuZ2V0KCk7IH1cclxuXHJcblx0XHRcdC8vIGluaXRpYWwgc2V0dXAuIERvZXMgbm90IGJlbG9uZyBoZXJlIDotL1xyXG5cdFx0XHRmdW5jdGlvbiBpbml0aWFsaXNlQmFzZVN0YXRlcygpIHtcclxuXHRcdFx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvNDA0Jyk7XHJcblx0XHRcdH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuY29tcG9uZW50cy5yb3V0ZXMnKS5wcm92aWRlcigncm91dGVIZWxwZXInLCByb3V0ZUhlbHBlclByb3ZpZGVyKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=