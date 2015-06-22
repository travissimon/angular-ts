/// <reference path="../../typings/app.d.ts" />
var app;
(function (app) {
    var pages;
    (function (pages) {
        var articles;
        (function (articles) {
            'use strict';
            var ArticleSidebarDirective = (function () {
                function ArticleSidebarDirective($log, NewsService) {
                    var _this = this;
                    this.$log = $log;
                    this.NewsService = NewsService;
                    this.bindToController = false;
                    this.restrict = 'EA';
                    this.templateUrl = 'app/pages/articles/article-sidebar.template.html';
                    this.link = function (scope, element, attrs) {
                        var self = _this;
                        _this.NewsService.getArticleStubs().then(function articleStubCallback(result) {
                            scope.vm.articles = result;
                        });
                    };
                }
                ArticleSidebarDirective.factory = function () {
                    var directive = function ($log, NewsService) {
                        return new ArticleSidebarDirective($log, NewsService);
                    };
                    directive.$inject = ['$log', 'NewsService'];
                    return directive;
                };
                return ArticleSidebarDirective;
            })();
            app.Module.load('app.pages.articles').addDirective('appSidebar', ArticleSidebarDirective.factory());
        })(articles = pages.articles || (pages.articles = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzL2FydGljbGUtc2lkZWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiYXBwIiwiYXBwLnBhZ2VzIiwiYXBwLnBhZ2VzLmFydGljbGVzIiwiYXBwLnBhZ2VzLmFydGljbGVzLkFydGljbGVTaWRlYmFyRGlyZWN0aXZlIiwiYXBwLnBhZ2VzLmFydGljbGVzLkFydGljbGVTaWRlYmFyRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiYXBwLnBhZ2VzLmFydGljbGVzLkFydGljbGVTaWRlYmFyRGlyZWN0aXZlLmNvbnN0cnVjdG9yLmFydGljbGVTdHViQ2FsbGJhY2siLCJhcHAucGFnZXMuYXJ0aWNsZXMuQXJ0aWNsZVNpZGViYXJEaXJlY3RpdmUuZmFjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBRS9DLElBQU8sR0FBRyxDQXNDVDtBQXRDRCxXQUFPLEdBQUc7SUFBQ0EsSUFBQUEsS0FBS0EsQ0FzQ2ZBO0lBdENVQSxXQUFBQSxLQUFLQTtRQUFDQyxJQUFBQSxRQUFRQSxDQXNDeEJBO1FBdENnQkEsV0FBQUEsUUFBUUEsRUFBQ0EsQ0FBQ0E7WUFDdkJDLFlBQVlBLENBQUNBO1lBUWhCQSxJQUFNQSx1QkFBdUJBO2dCQVk1QkMsU0FaS0EsdUJBQXVCQSxDQVlSQSxJQUFvQkEsRUFBVUEsV0FBMkNBO29CQVo5RkMsaUJBMEJDQTtvQkFkb0JBLFNBQUlBLEdBQUpBLElBQUlBLENBQWdCQTtvQkFBVUEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWdDQTtvQkFYN0ZBLHFCQUFnQkEsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBQ2xDQSxhQUFRQSxHQUFXQSxJQUFJQSxDQUFDQTtvQkFFeEJBLGdCQUFXQSxHQUFXQSxrREFBa0RBLENBQUNBO29CQUN6RUEsU0FBSUEsR0FBR0EsVUFBQ0EsS0FBMEJBLEVBQUVBLE9BQTRCQSxFQUFFQSxLQUFxQkE7d0JBQ3RGQSxJQUFJQSxJQUFJQSxHQUFHQSxLQUFJQSxDQUFDQTt3QkFDaEJBLEtBQUlBLENBQUNBLFdBQVdBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLG1CQUFtQkEsQ0FBQ0EsTUFBTUE7NEJBQzFFQyxLQUFLQSxDQUFDQSxFQUFFQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTt3QkFDNUJBLENBQUNBLENBQUNELENBQUNBO29CQUNKQSxDQUFDQSxDQUFDQTtnQkFHRkEsQ0FBQ0E7Z0JBR01ELCtCQUFPQSxHQUFkQTtvQkFDQ0csSUFBSUEsU0FBU0EsR0FBR0EsVUFBQ0EsSUFBb0JBLEVBQUVBLFdBQTJDQTt3QkFDakZBLE1BQU1BLENBQUNBLElBQUlBLHVCQUF1QkEsQ0FBQ0EsSUFBSUEsRUFBRUEsV0FBV0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZEQSxDQUFDQSxDQUFDQTtvQkFFRkEsU0FBU0EsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7b0JBRTVDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDbEJBLENBQUNBO2dCQUVGSCw4QkFBQ0E7WUFBREEsQ0ExQkFELEFBMEJDQyxJQUFBRDtZQUVEQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLFlBQVlBLEVBQUVBLHVCQUF1QkEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDckdBLENBQUNBLEVBdENnQkQsUUFBUUEsR0FBUkEsY0FBUUEsS0FBUkEsY0FBUUEsUUFzQ3hCQTtJQUFEQSxDQUFDQSxFQXRDVUQsS0FBS0EsR0FBTEEsU0FBS0EsS0FBTEEsU0FBS0EsUUFzQ2ZBO0FBQURBLENBQUNBLEVBdENNLEdBQUcsS0FBSCxHQUFHLFFBc0NUIiwiZmlsZSI6InBhZ2VzL2FydGljbGVzL2FydGljbGUtc2lkZWJhci5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9hcHAuZC50c1wiIC8+XG5cbm1vZHVsZSBhcHAucGFnZXMuYXJ0aWNsZXMge1xuICAgICd1c2Ugc3RyaWN0JztcblxuXHRpbnRlcmZhY2UgQXJ0aWNsZVNpZGViYXJTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XG5cdFx0dm06IHtcblx0XHRcdGFydGljbGVzOiBhcHAuY29tcG9uZW50cy5hcGkuSUFydGljbGVTdHViW107XG5cdFx0fTtcblx0fVxuXG5cdGNsYXNzIEFydGljbGVTaWRlYmFyRGlyZWN0aXZlIGltcGxlbWVudHMgbmcuSURpcmVjdGl2ZSB7XG5cdFx0YmluZFRvQ29udHJvbGxlcjogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdHJlc3RyaWN0OiBzdHJpbmcgPSAnRUEnO1xuXHRcdHNjb3BlOiB7fTtcblx0XHR0ZW1wbGF0ZVVybDogc3RyaW5nID0gJ2FwcC9wYWdlcy9hcnRpY2xlcy9hcnRpY2xlLXNpZGViYXIudGVtcGxhdGUuaHRtbCc7XG5cdFx0bGluayA9IChzY29wZTogQXJ0aWNsZVNpZGViYXJTY29wZSwgZWxlbWVudDogbmcuSUF1Z21lbnRlZEpRdWVyeSwgYXR0cnM6IG5nLklBdHRyaWJ1dGVzKSA9PiB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR0aGlzLk5ld3NTZXJ2aWNlLmdldEFydGljbGVTdHVicygpLnRoZW4oZnVuY3Rpb24gYXJ0aWNsZVN0dWJDYWxsYmFjayhyZXN1bHQpIHtcblx0XHRcdFx0c2NvcGUudm0uYXJ0aWNsZXMgPSByZXN1bHQ7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSAkbG9nOiBuZy5JTG9nU2VydmljZSwgcHJpdmF0ZSBOZXdzU2VydmljZTogYXBwLmNvbXBvbmVudHMuYXBpLk5ld3NTZXJ2aWNlKSB7XG5cdFx0fVxuXG5cblx0XHRzdGF0aWMgZmFjdG9yeSgpOiBuZy5JRGlyZWN0aXZlRmFjdG9yeSB7XG5cdFx0XHR2YXIgZGlyZWN0aXZlID0gKCRsb2c6IG5nLklMb2dTZXJ2aWNlLCBOZXdzU2VydmljZTogYXBwLmNvbXBvbmVudHMuYXBpLk5ld3NTZXJ2aWNlKSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgQXJ0aWNsZVNpZGViYXJEaXJlY3RpdmUoJGxvZywgTmV3c1NlcnZpY2UpO1xuXHRcdFx0fTtcblxuXHRcdFx0ZGlyZWN0aXZlLiRpbmplY3QgPSBbJyRsb2cnLCAnTmV3c1NlcnZpY2UnXTtcblxuXHRcdFx0cmV0dXJuIGRpcmVjdGl2ZTtcblx0XHR9XG5cblx0fVxuXG5cdGFwcC5Nb2R1bGUubG9hZCgnYXBwLnBhZ2VzLmFydGljbGVzJykuYWRkRGlyZWN0aXZlKCdhcHBTaWRlYmFyJywgQXJ0aWNsZVNpZGViYXJEaXJlY3RpdmUuZmFjdG9yeSgpKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9