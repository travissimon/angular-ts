/// <reference path="../typings/app.d.ts" />
var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        var ShellController = (function () {
            function ShellController($rootScope, $timeout) {
                this.$rootScope = $rootScope;
                this.$timeout = $timeout;
                this.isBusy = true;
                this.busyMessage = 'Please wait';
                this.showSplash = true;
                this.$rootScope.vm = this;
                this.activate();
            }
            ShellController.prototype.activate = function () {
                this.hideSplash();
            };
            ShellController.prototype.hideSplash = function () {
                var _this = this;
                // Force a 1 second delay so we can see the splash.
                this.$timeout(function () {
                    _this.showSplash = false;
                }, 1000);
            };
            ShellController.$inject = ['$rootScope', '$timeout'];
            return ShellController;
        })();
        layout.ShellController = ShellController;
        app.Module.load('app.layout').addController('ShellController', ShellController);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9zaGVsbC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbImFwcCIsImFwcC5sYXlvdXQiLCJhcHAubGF5b3V0LlNoZWxsQ29udHJvbGxlciIsImFwcC5sYXlvdXQuU2hlbGxDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiYXBwLmxheW91dC5TaGVsbENvbnRyb2xsZXIuYWN0aXZhdGUiLCJhcHAubGF5b3V0LlNoZWxsQ29udHJvbGxlci5oaWRlU3BsYXNoIl0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7QUFFNUMsSUFBTyxHQUFHLENBK0JUO0FBL0JELFdBQU8sR0FBRztJQUFDQSxJQUFBQSxNQUFNQSxDQStCaEJBO0lBL0JVQSxXQUFBQSxNQUFNQSxFQUFDQSxDQUFDQTtRQUNmQyxZQUFZQSxDQUFDQTtRQU1oQkEsSUFBYUEsZUFBZUE7WUFNM0JDLFNBTllBLGVBQWVBLENBTVBBLFVBQWdDQSxFQUFVQSxRQUE0QkE7Z0JBQXRFQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUFzQkE7Z0JBQVVBLGFBQVFBLEdBQVJBLFFBQVFBLENBQW9CQTtnQkFMbkZBLFdBQU1BLEdBQVlBLElBQUlBLENBQUNBO2dCQUN2QkEsZ0JBQVdBLEdBQVdBLGFBQWFBLENBQUNBO2dCQUNwQ0EsZUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBSXhCQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDMUJBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO1lBQ2pCQSxDQUFDQTtZQUVPRCxrQ0FBUUEsR0FBaEJBO2dCQUNDRSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtZQUNuQkEsQ0FBQ0E7WUFFTUYsb0NBQVVBLEdBQWpCQTtnQkFBQUcsaUJBS0NBO2dCQUpBQSxBQUNBQSxtREFEbURBO2dCQUNuREEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7b0JBQ2JBLEtBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUN6QkEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDVkEsQ0FBQ0E7WUFmTUgsdUJBQU9BLEdBQUdBLENBQUNBLFlBQVlBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO1lBZ0I3Q0Esc0JBQUNBO1FBQURBLENBckJBRCxBQXFCQ0MsSUFBQUQ7UUFyQllBLHNCQUFlQSxHQUFmQSxlQXFCWkEsQ0FBQUE7UUFFREEsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUNqRkEsQ0FBQ0EsRUEvQlVELE1BQU1BLEdBQU5BLFVBQU1BLEtBQU5BLFVBQU1BLFFBK0JoQkE7QUFBREEsQ0FBQ0EsRUEvQk0sR0FBRyxLQUFILEdBQUcsUUErQlQiLCJmaWxlIjoibGF5b3V0L3NoZWxsLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9hcHAuZC50c1wiIC8+XG5cbm1vZHVsZSBhcHAubGF5b3V0IHtcbiAgICAndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0IGludGVyZmFjZSBTaGVsbENvbnRyb2xsZXJTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XG5cdFx0dm06IFNoZWxsQ29udHJvbGxlcjtcblx0fVxuXG5cdGV4cG9ydCBjbGFzcyBTaGVsbENvbnRyb2xsZXIge1xuXHRcdHB1YmxpYyBpc0J1c3k6IGJvb2xlYW4gPSB0cnVlO1xuXHRcdHB1YmxpYyBidXN5TWVzc2FnZTogc3RyaW5nID0gJ1BsZWFzZSB3YWl0Jztcblx0XHRwdWJsaWMgc2hvd1NwbGFzaCA9IHRydWU7XG5cblx0XHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckdGltZW91dCddO1xuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgJHJvb3RTY29wZTogU2hlbGxDb250cm9sbGVyU2NvcGUsIHByaXZhdGUgJHRpbWVvdXQ6IG5nLklUaW1lb3V0U2VydmljZSkge1xuXHRcdFx0dGhpcy4kcm9vdFNjb3BlLnZtID0gdGhpcztcblx0XHRcdHRoaXMuYWN0aXZhdGUoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGFjdGl2YXRlKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5oaWRlU3BsYXNoKCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGhpZGVTcGxhc2goKSB7XG5cdFx0XHQvLyBGb3JjZSBhIDEgc2Vjb25kIGRlbGF5IHNvIHdlIGNhbiBzZWUgdGhlIHNwbGFzaC5cblx0XHRcdHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNob3dTcGxhc2ggPSBmYWxzZTtcblx0XHRcdH0sIDEwMDApO1xuXHRcdH1cblx0fVxuXG5cdGFwcC5Nb2R1bGUubG9hZCgnYXBwLmxheW91dCcpLmFkZENvbnRyb2xsZXIoJ1NoZWxsQ29udHJvbGxlcicsIFNoZWxsQ29udHJvbGxlcik7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=