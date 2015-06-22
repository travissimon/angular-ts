/// <reference path="../../typings/app.d.ts" />
var app;
(function (app) {
    var pages;
    (function (pages) {
        var articles;
        (function (articles) {
            'use strict';
            var ArticleDetailController = (function () {
                function ArticleDetailController($scope, $log, $stateParams, NewsService) {
                    this.$scope = $scope;
                    this.$log = $log;
                    this.$stateParams = $stateParams;
                    this.NewsService = NewsService;
                    this.article = null;
                    this.init();
                }
                ArticleDetailController.prototype.init = function () {
                    this.loadArticle();
                };
                ArticleDetailController.prototype.loadArticle = function () {
                    var self = this;
                    var articleId = this.$stateParams.id;
                    var self = this;
                    this.NewsService.getArticleById(articleId).then(function (result) {
                        self.article = result;
                    });
                };
                ArticleDetailController.$inject = ['$scope', '$log', '$stateParams', 'NewsService'];
                return ArticleDetailController;
            })();
            articles.ArticleDetailController = ArticleDetailController;
            app.Module.load('app.pages.articles').addController('ArticleDetailController', ArticleDetailController);
        })(articles = pages.articles || (pages.articles = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzL2FydGljbGUtZGV0YWlsLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiYXBwIiwiYXBwLnBhZ2VzIiwiYXBwLnBhZ2VzLmFydGljbGVzIiwiYXBwLnBhZ2VzLmFydGljbGVzLkFydGljbGVEZXRhaWxDb250cm9sbGVyIiwiYXBwLnBhZ2VzLmFydGljbGVzLkFydGljbGVEZXRhaWxDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiYXBwLnBhZ2VzLmFydGljbGVzLkFydGljbGVEZXRhaWxDb250cm9sbGVyLmluaXQiLCJhcHAucGFnZXMuYXJ0aWNsZXMuQXJ0aWNsZURldGFpbENvbnRyb2xsZXIubG9hZEFydGljbGUiXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUUvQyxJQUFPLEdBQUcsQ0ErQlQ7QUEvQkQsV0FBTyxHQUFHO0lBQUNBLElBQUFBLEtBQUtBLENBK0JmQTtJQS9CVUEsV0FBQUEsS0FBS0E7UUFBQ0MsSUFBQUEsUUFBUUEsQ0ErQnhCQTtRQS9CZ0JBLFdBQUFBLFFBQVFBLEVBQUNBLENBQUNBO1lBQ3ZCQyxZQUFZQSxDQUFDQTtZQU1oQkEsSUFBYUEsdUJBQXVCQTtnQkFHbkNDLFNBSFlBLHVCQUF1QkEsQ0FHZkEsTUFBMEJBLEVBQVVBLElBQW9CQSxFQUFVQSxZQUFpQkEsRUFBVUEsV0FBMkNBO29CQUF4SUMsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBb0JBO29CQUFVQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFnQkE7b0JBQVVBLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFLQTtvQkFBVUEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWdDQTtvQkFRckpBLFlBQU9BLEdBQWdDQSxJQUFJQSxDQUFDQTtvQkFQbERBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUNiQSxDQUFDQTtnQkFFREQsc0NBQUlBLEdBQUpBO29CQUNDRSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtnQkFDcEJBLENBQUNBO2dCQUlPRiw2Q0FBV0EsR0FBbkJBO29CQUNDRyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDaEJBLElBQUlBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEVBQUVBLENBQUNBO29CQUNyQ0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ2hCQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFTQSxNQUFNQTt3QkFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLENBQUNBO2dCQWxCTUgsK0JBQU9BLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLE1BQU1BLEVBQUVBLGNBQWNBLEVBQUVBLGFBQWFBLENBQUNBLENBQUNBO2dCQW1CcEVBLDhCQUFDQTtZQUFEQSxDQXJCQUQsQUFxQkNDLElBQUFEO1lBckJZQSxnQ0FBdUJBLEdBQXZCQSx1QkFxQlpBLENBQUFBO1lBRURBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EseUJBQXlCQSxFQUFFQSx1QkFBdUJBLENBQUNBLENBQUNBO1FBQ3pHQSxDQUFDQSxFQS9CZ0JELFFBQVFBLEdBQVJBLGNBQVFBLEtBQVJBLGNBQVFBLFFBK0J4QkE7SUFBREEsQ0FBQ0EsRUEvQlVELEtBQUtBLEdBQUxBLFNBQUtBLEtBQUxBLFNBQUtBLFFBK0JmQTtBQUFEQSxDQUFDQSxFQS9CTSxHQUFHLEtBQUgsR0FBRyxRQStCVCIsImZpbGUiOiJwYWdlcy9hcnRpY2xlcy9hcnRpY2xlLWRldGFpbC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIiAvPlxuXG5tb2R1bGUgYXBwLnBhZ2VzLmFydGljbGVzIHtcbiAgICAndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0IGludGVyZmFjZSBBcnRpY2xlRGV0YWlsU2NvcGUgZXh0ZW5kcyBuZy5JU2NvcGUge1xuXHRcdHZtOiBBcnRpY2xlRGV0YWlsQ29udHJvbGxlcjtcblx0fVxuXG5cdGV4cG9ydCBjbGFzcyBBcnRpY2xlRGV0YWlsQ29udHJvbGxlciB7XG5cblx0XHRzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJHN0YXRlUGFyYW1zJywgJ05ld3NTZXJ2aWNlJ107XG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IEFydGljbGVEZXRhaWxTY29wZSwgcHJpdmF0ZSAkbG9nOiBuZy5JTG9nU2VydmljZSwgcHJpdmF0ZSAkc3RhdGVQYXJhbXM6IGFueSwgcHJpdmF0ZSBOZXdzU2VydmljZTogYXBwLmNvbXBvbmVudHMuYXBpLk5ld3NTZXJ2aWNlKSB7XG5cdFx0XHR0aGlzLmluaXQoKTtcblx0XHR9XG5cblx0XHRpbml0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5sb2FkQXJ0aWNsZSgpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBhcnRpY2xlOiBhcHAuY29tcG9uZW50cy5hcGkuSUFydGljbGUgPSBudWxsO1xuXG5cdFx0cHJpdmF0ZSBsb2FkQXJ0aWNsZSgpOiB2b2lkIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciBhcnRpY2xlSWQgPSB0aGlzLiRzdGF0ZVBhcmFtcy5pZDtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHRoaXMuTmV3c1NlcnZpY2UuZ2V0QXJ0aWNsZUJ5SWQoYXJ0aWNsZUlkKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuXHRcdFx0XHRzZWxmLmFydGljbGUgPSByZXN1bHQ7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRhcHAuTW9kdWxlLmxvYWQoJ2FwcC5wYWdlcy5hcnRpY2xlcycpLmFkZENvbnRyb2xsZXIoJ0FydGljbGVEZXRhaWxDb250cm9sbGVyJywgQXJ0aWNsZURldGFpbENvbnRyb2xsZXIpO1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=