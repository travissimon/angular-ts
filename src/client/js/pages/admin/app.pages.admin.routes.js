/// <reference path="../../typings/app.d.ts" />
var app;
(function (app) {
    var pages;
    (function (pages) {
        var admin;
        (function (admin) {
            var AdminRoutesConfigurator = (function () {
                function AdminRoutesConfigurator(routeHelper, $log) {
                    this.$inject = ['routeHelper', '$log'];
                    routeHelper.addRoutes(AdminRoutesConfigurator.getStates());
                    $log.debug('Added admin routes');
                }
                AdminRoutesConfigurator.getStates = function () {
                    return [{
                        name: 'adminIndex',
                        url: '/admin',
                        views: {
                            'sidebar': {
                                templateUrl: 'app/pages/admin/sidebar.template.html',
                            },
                            'main': {
                                templateUrl: 'app/pages/admin/home.template.html',
                            }
                        }
                    }];
                };
                return AdminRoutesConfigurator;
            })();
            app.Module.load('app.pages.admin').run(AdminRoutesConfigurator);
        })(admin = pages.admin || (pages.admin = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL2FwcC5wYWdlcy5hZG1pbi5yb3V0ZXMudHMiXSwibmFtZXMiOlsiYXBwIiwiYXBwLnBhZ2VzIiwiYXBwLnBhZ2VzLmFkbWluIiwiYXBwLnBhZ2VzLmFkbWluLkFkbWluUm91dGVzQ29uZmlndXJhdG9yIiwiYXBwLnBhZ2VzLmFkbWluLkFkbWluUm91dGVzQ29uZmlndXJhdG9yLmNvbnN0cnVjdG9yIiwiYXBwLnBhZ2VzLmFkbWluLkFkbWluUm91dGVzQ29uZmlndXJhdG9yLmdldFN0YXRlcyJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBRS9DLElBQU8sR0FBRyxDQTZCVDtBQTdCRCxXQUFPLEdBQUc7SUFBQ0EsSUFBQUEsS0FBS0EsQ0E2QmZBO0lBN0JVQSxXQUFBQSxLQUFLQTtRQUFDQyxJQUFBQSxLQUFLQSxDQTZCckJBO1FBN0JnQkEsV0FBQUEsS0FBS0EsRUFBQ0EsQ0FBQ0E7WUFFdkJDLElBQU1BLHVCQUF1QkE7Z0JBRzVCQyxTQUhLQSx1QkFBdUJBLENBR2hCQSxXQUFXQSxFQUFFQSxJQUFJQTtvQkFEN0JDLFlBQU9BLEdBQUdBLENBQUNBLGFBQWFBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO29CQUVqQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsdUJBQXVCQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDM0RBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFFTUQsaUNBQVNBLEdBQWhCQTtvQkFDQ0UsTUFBTUEsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLElBQUlBLEVBQUVBLFlBQVlBO3dCQUNsQkEsR0FBR0EsRUFBRUEsUUFBUUE7d0JBQ2JBLEtBQUtBLEVBQUVBOzRCQUNOQSxTQUFTQSxFQUFFQTtnQ0FDVkEsV0FBV0EsRUFBRUEsdUNBQXVDQTs2QkFDcERBOzRCQUNEQSxNQUFNQSxFQUFFQTtnQ0FDUEEsV0FBV0EsRUFBRUEsb0NBQW9DQTs2QkFDakRBO3lCQUNEQTtxQkFDREEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLENBQUNBO2dCQUVGRiw4QkFBQ0E7WUFBREEsQ0F2QkFELEFBdUJDQyxJQUFBRDtZQUVEQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLHVCQUF1QkEsQ0FBQ0EsQ0FBQ0E7UUFFakVBLENBQUNBLEVBN0JnQkQsS0FBS0EsR0FBTEEsV0FBS0EsS0FBTEEsV0FBS0EsUUE2QnJCQTtJQUFEQSxDQUFDQSxFQTdCVUQsS0FBS0EsR0FBTEEsU0FBS0EsS0FBTEEsU0FBS0EsUUE2QmZBO0FBQURBLENBQUNBLEVBN0JNLEdBQUcsS0FBSCxHQUFHLFFBNkJUIiwiZmlsZSI6InBhZ2VzL2FkbWluL2FwcC5wYWdlcy5hZG1pbi5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9hcHAuZC50c1wiIC8+XG5cbm1vZHVsZSBhcHAucGFnZXMuYWRtaW4ge1xuXG5cdGNsYXNzIEFkbWluUm91dGVzQ29uZmlndXJhdG9yIHtcblxuXHRcdCRpbmplY3QgPSBbJ3JvdXRlSGVscGVyJywgJyRsb2cnXTtcblx0XHRjb25zdHJ1Y3Rvcihyb3V0ZUhlbHBlciwgJGxvZykge1xuXHRcdFx0cm91dGVIZWxwZXIuYWRkUm91dGVzKEFkbWluUm91dGVzQ29uZmlndXJhdG9yLmdldFN0YXRlcygpKTtcblx0XHRcdCRsb2cuZGVidWcoJ0FkZGVkIGFkbWluIHJvdXRlcycpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBnZXRTdGF0ZXMoKTogQXJyYXk8YW5ndWxhci51aS5JU3RhdGU+IHtcblx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRuYW1lOiAnYWRtaW5JbmRleCcsXG5cdFx0XHRcdHVybDogJy9hZG1pbicsXG5cdFx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdFx0J3NpZGViYXInOiB7XG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9hZG1pbi9zaWRlYmFyLnRlbXBsYXRlLmh0bWwnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J21haW4nOiB7XG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9hZG1pbi9ob21lLnRlbXBsYXRlLmh0bWwnLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fV07XG5cdFx0fVxuXG5cdH1cblxuXHRhcHAuTW9kdWxlLmxvYWQoJ2FwcC5wYWdlcy5hZG1pbicpLnJ1bihBZG1pblJvdXRlc0NvbmZpZ3VyYXRvcik7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==