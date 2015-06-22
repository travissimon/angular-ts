/// <reference path="../../typings/app.d.ts" />
var app;
(function (app) {
    var components;
    (function (components) {
        var profiling;
        (function (profiling) {
            'use strict';
            var ProfileService = (function () {
                function ProfileService($log) {
                    this.$log = $log;
                    this.enableProfiling = false;
                    this.$inject = ['$log'];
                }
                ProfileService.prototype.profile = function (profileName, fn) {
                    if (this.enableProfiling) {
                        return function () {
                            console.profile(profileName);
                            var returnValue = fn.apply(this.arguments);
                            console.profileEnd();
                            return returnValue;
                        };
                    }
                    else {
                        return function () {
                            return fn.apply(this, arguments);
                        };
                    }
                };
                return ProfileService;
            })();
            profiling.ProfileService = ProfileService;
            app.Module.load('app.components.profiling').addService('ProfileService', ProfileService);
        })(profiling = components.profiling || (components.profiling = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsaW5nL3Byb2ZpbGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbImFwcCIsImFwcC5jb21wb25lbnRzIiwiYXBwLmNvbXBvbmVudHMucHJvZmlsaW5nIiwiYXBwLmNvbXBvbmVudHMucHJvZmlsaW5nLlByb2ZpbGVTZXJ2aWNlIiwiYXBwLmNvbXBvbmVudHMucHJvZmlsaW5nLlByb2ZpbGVTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiYXBwLmNvbXBvbmVudHMucHJvZmlsaW5nLlByb2ZpbGVTZXJ2aWNlLnByb2ZpbGUiXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUUvQyxJQUFPLEdBQUcsQ0E2QlQ7QUE3QkQsV0FBTyxHQUFHO0lBQUNBLElBQUFBLFVBQVVBLENBNkJwQkE7SUE3QlVBLFdBQUFBLFVBQVVBO1FBQUNDLElBQUFBLFNBQVNBLENBNkI5QkE7UUE3QnFCQSxXQUFBQSxTQUFTQSxFQUFDQSxDQUFDQTtZQUM3QkMsWUFBWUEsQ0FBQ0E7WUFFaEJBLElBQWFBLGNBQWNBO2dCQUsxQkMsU0FMWUEsY0FBY0EsQ0FLTkEsSUFBb0JBO29CQUFwQkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBZ0JBO29CQUhqQ0Esb0JBQWVBLEdBQUdBLEtBQUtBLENBQUNBO29CQUUvQkEsWUFBT0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBRW5CQSxDQUFDQTtnQkFFTUQsZ0NBQU9BLEdBQWRBLFVBQWVBLFdBQW1CQSxFQUFFQSxFQUFZQTtvQkFDL0NFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBLENBQUNBO3dCQUMxQkEsTUFBTUEsQ0FBQ0E7NEJBQ04sT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs0QkFDN0IsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7NEJBQzNDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQzs0QkFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFDcEIsQ0FBQyxDQUFDQTtvQkFDSEEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNQQSxNQUFNQSxDQUFDQTs0QkFDTixNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ2xDLENBQUMsQ0FBQ0E7b0JBQ0hBLENBQUNBO2dCQUNGQSxDQUFDQTtnQkFFRkYscUJBQUNBO1lBQURBLENBdkJBRCxBQXVCQ0MsSUFBQUQ7WUF2QllBLHdCQUFjQSxHQUFkQSxjQXVCWkEsQ0FBQUE7WUFFREEsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsMEJBQTBCQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLGNBQWNBLENBQUNBLENBQUNBO1FBQzFGQSxDQUFDQSxFQTdCcUJELFNBQVNBLEdBQVRBLG9CQUFTQSxLQUFUQSxvQkFBU0EsUUE2QjlCQTtJQUFEQSxDQUFDQSxFQTdCVUQsVUFBVUEsR0FBVkEsY0FBVUEsS0FBVkEsY0FBVUEsUUE2QnBCQTtBQUFEQSxDQUFDQSxFQTdCTSxHQUFHLEtBQUgsR0FBRyxRQTZCVCIsImZpbGUiOiJjb21wb25lbnRzL3Byb2ZpbGluZy9wcm9maWxpbmcuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIgLz5cblxubW9kdWxlIGFwcC5jb21wb25lbnRzLnByb2ZpbGluZyB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG5cblx0XHRwdWJsaWMgZW5hYmxlUHJvZmlsaW5nID0gZmFsc2U7XG5cblx0XHQkaW5qZWN0ID0gWyckbG9nJ107XG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSAkbG9nOiBuZy5JTG9nU2VydmljZSkge1xuXHRcdH1cblxuXHRcdHB1YmxpYyBwcm9maWxlKHByb2ZpbGVOYW1lOiBzdHJpbmcsIGZuOiBGdW5jdGlvbikge1xuXHRcdFx0aWYgKHRoaXMuZW5hYmxlUHJvZmlsaW5nKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb25zb2xlLnByb2ZpbGUocHJvZmlsZU5hbWUpO1xuXHRcdFx0XHRcdHZhciByZXR1cm5WYWx1ZSA9IGZuLmFwcGx5KHRoaXMuYXJndW1lbnRzKTtcblx0XHRcdFx0XHRjb25zb2xlLnByb2ZpbGVFbmQoKTtcblx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuVmFsdWU7XG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRhcHAuTW9kdWxlLmxvYWQoJ2FwcC5jb21wb25lbnRzLnByb2ZpbGluZycpLmFkZFNlcnZpY2UoJ1Byb2ZpbGVTZXJ2aWNlJywgUHJvZmlsZVNlcnZpY2UpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9