/// <reference path="../../typings/app.d.ts" />
var app;
(function (app) {
    var components;
    (function (components) {
        var navbar;
        (function (navbar) {
            'use strict';
            var NavbarDirective = (function () {
                function NavbarDirective($log) {
                    var _this = this;
                    this.$log = $log;
                    this.bindToController = false;
                    this.restrict = 'EA';
                    this.templateUrl = 'app/components/navbar/navbar.template.html';
                    this.link = function (scope, element, attrs) {
                        _this.$log.debug('Navbar directive: creating sections in link method');
                        scope.sections = [{
                            state: 'article.index',
                            text: 'Articles',
                            isActive: true,
                        }, {
                            state: 'adminIndex',
                            text: 'Administration home',
                            isActive: false,
                        }];
                    };
                }
                NavbarDirective.factory = function () {
                    var directive = function ($log) {
                        return new NavbarDirective($log);
                    };
                    directive['$inject'] = ['$log'];
                    return directive;
                };
                return NavbarDirective;
            })();
            app.Module.load('app.components.navbar').addDirective('appNavbar', NavbarDirective.factory());
        })(navbar = components.navbar || (components.navbar = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiYXBwIiwiYXBwLmNvbXBvbmVudHMiLCJhcHAuY29tcG9uZW50cy5uYXZiYXIiLCJhcHAuY29tcG9uZW50cy5uYXZiYXIuTmF2YmFyRGlyZWN0aXZlIiwiYXBwLmNvbXBvbmVudHMubmF2YmFyLk5hdmJhckRpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsImFwcC5jb21wb25lbnRzLm5hdmJhci5OYXZiYXJEaXJlY3RpdmUuZmFjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBRS9DLElBQU8sR0FBRyxDQWlEVDtBQWpERCxXQUFPLEdBQUc7SUFBQ0EsSUFBQUEsVUFBVUEsQ0FpRHBCQTtJQWpEVUEsV0FBQUEsVUFBVUE7UUFBQ0MsSUFBQUEsTUFBTUEsQ0FpRDNCQTtRQWpEcUJBLFdBQUFBLE1BQU1BLEVBQUNBLENBQUNBO1lBQzFCQyxZQUFZQSxDQUFDQTtZQWFoQkEsSUFBTUEsZUFBZUE7Z0JBbUJwQkMsU0FuQktBLGVBQWVBLENBbUJBQSxJQUFvQkE7b0JBbkJ6Q0MsaUJBZ0NDQTtvQkFib0JBLFNBQUlBLEdBQUpBLElBQUlBLENBQWdCQTtvQkFsQnhDQSxxQkFBZ0JBLEdBQVlBLEtBQUtBLENBQUNBO29CQUNsQ0EsYUFBUUEsR0FBV0EsSUFBSUEsQ0FBQ0E7b0JBRXhCQSxnQkFBV0EsR0FBV0EsNENBQTRDQSxDQUFDQTtvQkFDbkVBLFNBQUlBLEdBQUdBLFVBQUNBLEtBQWtCQSxFQUFFQSxPQUE0QkEsRUFBRUEsS0FBcUJBO3dCQUM5RUEsS0FBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0Esb0RBQW9EQSxDQUFDQSxDQUFDQTt3QkFDdEVBLEtBQUtBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBOzRCQUNqQkEsS0FBS0EsRUFBRUEsZUFBZUE7NEJBQ3RCQSxJQUFJQSxFQUFFQSxVQUFVQTs0QkFDaEJBLFFBQVFBLEVBQUVBLElBQUlBO3lCQUNkQSxFQUFHQTs0QkFDSEEsS0FBS0EsRUFBRUEsWUFBWUE7NEJBQ25CQSxJQUFJQSxFQUFFQSxxQkFBcUJBOzRCQUMzQkEsUUFBUUEsRUFBRUEsS0FBS0E7eUJBQ2ZBLENBQUNBLENBQUNBO29CQUNKQSxDQUFDQSxDQUFDQTtnQkFJRkEsQ0FBQ0E7Z0JBRU1ELHVCQUFPQSxHQUFkQTtvQkFDQ0UsSUFBSUEsU0FBU0EsR0FBR0EsVUFBQ0EsSUFBb0JBO3dCQUNwQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2xDQSxDQUFDQSxDQUFDQTtvQkFFRkEsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7b0JBRWhDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDbEJBLENBQUNBO2dCQUVGRixzQkFBQ0E7WUFBREEsQ0FoQ0FELEFBZ0NDQyxJQUFBRDtZQUVEQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSx1QkFBdUJBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLFdBQVdBLEVBQUVBLGVBQWVBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLENBQUNBO1FBQy9GQSxDQUFDQSxFQWpEcUJELE1BQU1BLEdBQU5BLGlCQUFNQSxLQUFOQSxpQkFBTUEsUUFpRDNCQTtJQUFEQSxDQUFDQSxFQWpEVUQsVUFBVUEsR0FBVkEsY0FBVUEsS0FBVkEsY0FBVUEsUUFpRHBCQTtBQUFEQSxDQUFDQSxFQWpETSxHQUFHLEtBQUgsR0FBRyxRQWlEVCIsImZpbGUiOiJjb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIiAvPlxuXG5tb2R1bGUgYXBwLmNvbXBvbmVudHMubmF2YmFyIHtcbiAgICAndXNlIHN0cmljdCc7XG5cblx0aW50ZXJmYWNlIE5hdmJhclNjb3BlIGV4dGVuZHMgbmcuSVNjb3BlIHtcblx0XHRzZWN0aW9uczogQXJyYXk8U2l0ZVNlY3Rpb24+O1xuXHR9XG5cblxuXHRpbnRlcmZhY2UgU2l0ZVNlY3Rpb24ge1xuXHRcdHN0YXRlOiBzdHJpbmc7XG5cdFx0dGV4dDogc3RyaW5nO1xuXHRcdGlzQWN0aXZlOiBib29sZWFuO1xuXHR9XG5cblx0Y2xhc3MgTmF2YmFyRGlyZWN0aXZlIGltcGxlbWVudHMgbmcuSURpcmVjdGl2ZSB7XG5cdFx0YmluZFRvQ29udHJvbGxlcjogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdHJlc3RyaWN0OiBzdHJpbmcgPSAnRUEnO1xuXHRcdHNjb3BlOiB7fTtcblx0XHR0ZW1wbGF0ZVVybDogc3RyaW5nID0gJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIudGVtcGxhdGUuaHRtbCc7XG5cdFx0bGluayA9IChzY29wZTogTmF2YmFyU2NvcGUsIGVsZW1lbnQ6IG5nLklBdWdtZW50ZWRKUXVlcnksIGF0dHJzOiBuZy5JQXR0cmlidXRlcykgPT4ge1xuXHRcdFx0dGhpcy4kbG9nLmRlYnVnKCdOYXZiYXIgZGlyZWN0aXZlOiBjcmVhdGluZyBzZWN0aW9ucyBpbiBsaW5rIG1ldGhvZCcpO1xuXHRcdFx0c2NvcGUuc2VjdGlvbnMgPSBbe1xuXHRcdFx0XHRzdGF0ZTogJ2FydGljbGUuaW5kZXgnLFxuXHRcdFx0XHR0ZXh0OiAnQXJ0aWNsZXMnLFxuXHRcdFx0XHRpc0FjdGl2ZTogdHJ1ZSxcblx0XHRcdH0sICB7XG5cdFx0XHRcdHN0YXRlOiAnYWRtaW5JbmRleCcsXG5cdFx0XHRcdHRleHQ6ICdBZG1pbmlzdHJhdGlvbiBob21lJyxcblx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlLFxuXHRcdFx0fV07XG5cdFx0fTtcblxuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSAkbG9nOiBuZy5JTG9nU2VydmljZSkge1xuXHRcdH1cblxuXHRcdHN0YXRpYyBmYWN0b3J5KCk6IG5nLklEaXJlY3RpdmVGYWN0b3J5IHtcblx0XHRcdHZhciBkaXJlY3RpdmUgPSAoJGxvZzogbmcuSUxvZ1NlcnZpY2UpID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBOYXZiYXJEaXJlY3RpdmUoJGxvZyk7XG5cdFx0XHR9O1xuXG5cdFx0XHRkaXJlY3RpdmVbJyRpbmplY3QnXSA9IFsnJGxvZyddO1xuXG5cdFx0XHRyZXR1cm4gZGlyZWN0aXZlO1xuXHRcdH1cblxuXHR9XG5cblx0YXBwLk1vZHVsZS5sb2FkKCdhcHAuY29tcG9uZW50cy5uYXZiYXInKS5hZGREaXJlY3RpdmUoJ2FwcE5hdmJhcicsIE5hdmJhckRpcmVjdGl2ZS5mYWN0b3J5KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9