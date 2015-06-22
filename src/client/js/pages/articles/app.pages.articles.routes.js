/// <reference path="../../typings/app.d.ts" />
var app;
(function (app) {
    var pages;
    (function (pages) {
        var articles;
        (function (articles) {
            var ArticleRoutesConfigurator = (function () {
                function ArticleRoutesConfigurator(routeHelper, $log) {
                    this.$inject = ['routeHelper', '$log'];
                    routeHelper.addRoutes(ArticleRoutesConfigurator.getStates());
                    $log.debug('Added article routes');
                }
                ArticleRoutesConfigurator.getStates = function () {
                    return [{
                        name: 'article',
                        url: '/articles',
                        templateUrl: 'app/pages/articles/article-shell.template.html',
                    }, {
                        name: 'article.index',
                        url: '/index',
                        templateUrl: 'app/pages/articles/article-index.template.html',
                        controller: app.pages.articles.ArticleIndexController,
                        controllerAs: 'vm',
                    }, {
                        name: 'article.detail',
                        url: '/{id:int}',
                        templateUrl: 'app/pages/articles/article-detail.template.html',
                        controller: app.pages.articles.ArticleDetailController,
                        controllerAs: 'vm',
                    }];
                };
                return ArticleRoutesConfigurator;
            })();
            app.Module.load('app.pages.articles').run(ArticleRoutesConfigurator);
        })(articles = pages.articles || (pages.articles = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzL2FwcC5wYWdlcy5hcnRpY2xlcy5yb3V0ZXMudHMiXSwibmFtZXMiOlsiYXBwIiwiYXBwLnBhZ2VzIiwiYXBwLnBhZ2VzLmFydGljbGVzIiwiYXBwLnBhZ2VzLmFydGljbGVzLkFydGljbGVSb3V0ZXNDb25maWd1cmF0b3IiLCJhcHAucGFnZXMuYXJ0aWNsZXMuQXJ0aWNsZVJvdXRlc0NvbmZpZ3VyYXRvci5jb25zdHJ1Y3RvciIsImFwcC5wYWdlcy5hcnRpY2xlcy5BcnRpY2xlUm91dGVzQ29uZmlndXJhdG9yLmdldFN0YXRlcyJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBRS9DLElBQU8sR0FBRyxDQWlDVDtBQWpDRCxXQUFPLEdBQUc7SUFBQ0EsSUFBQUEsS0FBS0EsQ0FpQ2ZBO0lBakNVQSxXQUFBQSxLQUFLQTtRQUFDQyxJQUFBQSxRQUFRQSxDQWlDeEJBO1FBakNnQkEsV0FBQUEsUUFBUUEsRUFBQ0EsQ0FBQ0E7WUFFMUJDLElBQU1BLHlCQUF5QkE7Z0JBRzlCQyxTQUhLQSx5QkFBeUJBLENBR2xCQSxXQUErQ0EsRUFBRUEsSUFBb0JBO29CQURqRkMsWUFBT0EsR0FBR0EsQ0FBQ0EsYUFBYUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7b0JBRWpDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSx5QkFBeUJBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBLENBQUNBO29CQUM3REEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxDQUFDQTtnQkFDcENBLENBQUNBO2dCQUVNRCxtQ0FBU0EsR0FBaEJBO29CQUNDRSxNQUFNQSxDQUFDQSxDQUFDQTt3QkFDUEEsSUFBSUEsRUFBRUEsU0FBU0E7d0JBQ2ZBLEdBQUdBLEVBQUVBLFdBQVdBO3dCQUNoQkEsV0FBV0EsRUFBRUEsZ0RBQWdEQTtxQkFDN0RBLEVBQUVBO3dCQUNGQSxJQUFJQSxFQUFFQSxlQUFlQTt3QkFDckJBLEdBQUdBLEVBQUVBLFFBQVFBO3dCQUNiQSxXQUFXQSxFQUFFQSxnREFBZ0RBO3dCQUM3REEsVUFBVUEsRUFBRUEsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0Esc0JBQXNCQTt3QkFDckRBLFlBQVlBLEVBQUVBLElBQUlBO3FCQUNsQkEsRUFBRUE7d0JBQ0ZBLElBQUlBLEVBQUVBLGdCQUFnQkE7d0JBQ3RCQSxHQUFHQSxFQUFFQSxXQUFXQTt3QkFDaEJBLFdBQVdBLEVBQUVBLGlEQUFpREE7d0JBQzlEQSxVQUFVQSxFQUFFQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSx1QkFBdUJBO3dCQUN0REEsWUFBWUEsRUFBRUEsSUFBSUE7cUJBQ2xCQSxDQUFDQSxDQUFDQTtnQkFDSkEsQ0FBQ0E7Z0JBQ0ZGLGdDQUFDQTtZQUFEQSxDQTNCQUQsQUEyQkNDLElBQUFEO1lBRURBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EseUJBQXlCQSxDQUFDQSxDQUFDQTtRQUV0RUEsQ0FBQ0EsRUFqQ2dCRCxRQUFRQSxHQUFSQSxjQUFRQSxLQUFSQSxjQUFRQSxRQWlDeEJBO0lBQURBLENBQUNBLEVBakNVRCxLQUFLQSxHQUFMQSxTQUFLQSxLQUFMQSxTQUFLQSxRQWlDZkE7QUFBREEsQ0FBQ0EsRUFqQ00sR0FBRyxLQUFILEdBQUcsUUFpQ1QiLCJmaWxlIjoicGFnZXMvYXJ0aWNsZXMvYXBwLnBhZ2VzLmFydGljbGVzLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIgLz5cblxubW9kdWxlIGFwcC5wYWdlcy5hcnRpY2xlcyB7XG5cblx0Y2xhc3MgQXJ0aWNsZVJvdXRlc0NvbmZpZ3VyYXRvciB7XG5cblx0XHQkaW5qZWN0ID0gWydyb3V0ZUhlbHBlcicsICckbG9nJ107XG5cdFx0Y29uc3RydWN0b3Iocm91dGVIZWxwZXI6IGFwcC5jb21wb25lbnRzLnJvdXRlcy5JUm91dGVIZWxwZXIsICRsb2c6IG5nLklMb2dTZXJ2aWNlKSB7XG5cdFx0XHRyb3V0ZUhlbHBlci5hZGRSb3V0ZXMoQXJ0aWNsZVJvdXRlc0NvbmZpZ3VyYXRvci5nZXRTdGF0ZXMoKSk7XG5cdFx0XHQkbG9nLmRlYnVnKCdBZGRlZCBhcnRpY2xlIHJvdXRlcycpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBnZXRTdGF0ZXMoKTogQXJyYXk8YW5ndWxhci51aS5JU3RhdGU+IHtcblx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRuYW1lOiAnYXJ0aWNsZScsXG5cdFx0XHRcdHVybDogJy9hcnRpY2xlcycsXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL2FydGljbGVzL2FydGljbGUtc2hlbGwudGVtcGxhdGUuaHRtbCcsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6ICdhcnRpY2xlLmluZGV4Jyxcblx0XHRcdFx0dXJsOiAnL2luZGV4Jyxcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvYXJ0aWNsZXMvYXJ0aWNsZS1pbmRleC50ZW1wbGF0ZS5odG1sJyxcblx0XHRcdFx0Y29udHJvbGxlcjogYXBwLnBhZ2VzLmFydGljbGVzLkFydGljbGVJbmRleENvbnRyb2xsZXIsXG5cdFx0XHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogJ2FydGljbGUuZGV0YWlsJyxcblx0XHRcdFx0dXJsOiAnL3tpZDppbnR9Jyxcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvYXJ0aWNsZXMvYXJ0aWNsZS1kZXRhaWwudGVtcGxhdGUuaHRtbCcsXG5cdFx0XHRcdGNvbnRyb2xsZXI6IGFwcC5wYWdlcy5hcnRpY2xlcy5BcnRpY2xlRGV0YWlsQ29udHJvbGxlcixcblx0XHRcdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdFx0fV07XG5cdFx0fVxuXHR9XG5cblx0YXBwLk1vZHVsZS5sb2FkKCdhcHAucGFnZXMuYXJ0aWNsZXMnKS5ydW4oQXJ0aWNsZVJvdXRlc0NvbmZpZ3VyYXRvcik7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==