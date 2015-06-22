/// <reference path="../../typings/app.d.ts" />
var app;
(function (app) {
    var pages;
    (function (pages) {
        var articles;
        (function (articles) {
            'use strict';
            var ArticleIndexController = (function () {
                function ArticleIndexController($scope, $log, NewsService) {
                    this.$scope = $scope;
                    this.$log = $log;
                    this.NewsService = NewsService;
                    this.articles = null;
                    this.init();
                }
                ArticleIndexController.prototype.init = function () {
                    this.loadNewsArticles();
                };
                ArticleIndexController.prototype.loadNewsArticles = function () {
                    var self = this;
                    this.NewsService.getArticleStubs().then(function articleStubCallback(result) {
                        self.articles = result;
                    });
                };
                ArticleIndexController.$inject = ['$scope', '$log', 'NewsService'];
                return ArticleIndexController;
            })();
            articles.ArticleIndexController = ArticleIndexController;
            app.Module.load('app.pages.articles').addController('ArticleIndexController', ArticleIndexController);
        })(articles = pages.articles || (pages.articles = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzL2FydGljbGUtaW5kZXguY29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJhcHAiLCJhcHAucGFnZXMiLCJhcHAucGFnZXMuYXJ0aWNsZXMiLCJhcHAucGFnZXMuYXJ0aWNsZXMuQXJ0aWNsZUluZGV4Q29udHJvbGxlciIsImFwcC5wYWdlcy5hcnRpY2xlcy5BcnRpY2xlSW5kZXhDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiYXBwLnBhZ2VzLmFydGljbGVzLkFydGljbGVJbmRleENvbnRyb2xsZXIuaW5pdCIsImFwcC5wYWdlcy5hcnRpY2xlcy5BcnRpY2xlSW5kZXhDb250cm9sbGVyLmxvYWROZXdzQXJ0aWNsZXMiLCJhcHAucGFnZXMuYXJ0aWNsZXMuQXJ0aWNsZUluZGV4Q29udHJvbGxlci5sb2FkTmV3c0FydGljbGVzLmFydGljbGVTdHViQ2FsbGJhY2siXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUUvQyxJQUFPLEdBQUcsQ0E4QlQ7QUE5QkQsV0FBTyxHQUFHO0lBQUNBLElBQUFBLEtBQUtBLENBOEJmQTtJQTlCVUEsV0FBQUEsS0FBS0E7UUFBQ0MsSUFBQUEsUUFBUUEsQ0E4QnhCQTtRQTlCZ0JBLFdBQUFBLFFBQVFBLEVBQUNBLENBQUNBO1lBQ3ZCQyxZQUFZQSxDQUFDQTtZQU1oQkEsSUFBYUEsc0JBQXNCQTtnQkFHbENDLFNBSFlBLHNCQUFzQkEsQ0FHZEEsTUFBeUJBLEVBQVVBLElBQW9CQSxFQUFVQSxXQUEyQ0E7b0JBQTVHQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUFtQkE7b0JBQVVBLFNBQUlBLEdBQUpBLElBQUlBLENBQWdCQTtvQkFBVUEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWdDQTtvQkFRekhBLGFBQVFBLEdBQXNDQSxJQUFJQSxDQUFDQTtvQkFQekRBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUNiQSxDQUFDQTtnQkFFREQscUNBQUlBLEdBQUpBO29CQUNDRSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBSU9GLGlEQUFnQkEsR0FBeEJBO29CQUNDRyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDaEJBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLG1CQUFtQkEsQ0FBQ0EsTUFBTUE7d0JBQzFFQyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTtvQkFDeEJBLENBQUNBLENBQUNELENBQUNBO2dCQUNKQSxDQUFDQTtnQkFoQk1ILDhCQUFPQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxNQUFNQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtnQkFrQnBEQSw2QkFBQ0E7WUFBREEsQ0FwQkFELEFBb0JDQyxJQUFBRDtZQXBCWUEsK0JBQXNCQSxHQUF0QkEsc0JBb0JaQSxDQUFBQTtZQUVEQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLHdCQUF3QkEsRUFBRUEsc0JBQXNCQSxDQUFDQSxDQUFDQTtRQUN2R0EsQ0FBQ0EsRUE5QmdCRCxRQUFRQSxHQUFSQSxjQUFRQSxLQUFSQSxjQUFRQSxRQThCeEJBO0lBQURBLENBQUNBLEVBOUJVRCxLQUFLQSxHQUFMQSxTQUFLQSxLQUFMQSxTQUFLQSxRQThCZkE7QUFBREEsQ0FBQ0EsRUE5Qk0sR0FBRyxLQUFILEdBQUcsUUE4QlQiLCJmaWxlIjoicGFnZXMvYXJ0aWNsZXMvYXJ0aWNsZS1pbmRleC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIiAvPlxuXG5tb2R1bGUgYXBwLnBhZ2VzLmFydGljbGVzIHtcbiAgICAndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0IGludGVyZmFjZSBBcnRpY2xlSW5kZXhTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XG5cdFx0dm06IEFydGljbGVJbmRleENvbnRyb2xsZXI7XG5cdH1cblxuXHRleHBvcnQgY2xhc3MgQXJ0aWNsZUluZGV4Q29udHJvbGxlciB7XG5cblx0XHRzdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnTmV3c1NlcnZpY2UnXTtcblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogQXJ0aWNsZUluZGV4U2NvcGUsIHByaXZhdGUgJGxvZzogbmcuSUxvZ1NlcnZpY2UsIHByaXZhdGUgTmV3c1NlcnZpY2U6IGFwcC5jb21wb25lbnRzLmFwaS5OZXdzU2VydmljZSkge1xuXHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0fVxuXG5cdFx0aW5pdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMubG9hZE5ld3NBcnRpY2xlcygpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBhcnRpY2xlczogYXBwLmNvbXBvbmVudHMuYXBpLklBcnRpY2xlU3R1YltdID0gbnVsbDtcblxuXHRcdHByaXZhdGUgbG9hZE5ld3NBcnRpY2xlcygpOiB2b2lkIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHRoaXMuTmV3c1NlcnZpY2UuZ2V0QXJ0aWNsZVN0dWJzKCkudGhlbihmdW5jdGlvbiBhcnRpY2xlU3R1YkNhbGxiYWNrKHJlc3VsdCkge1xuXHRcdFx0XHRzZWxmLmFydGljbGVzID0gcmVzdWx0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdH1cblxuXHRhcHAuTW9kdWxlLmxvYWQoJ2FwcC5wYWdlcy5hcnRpY2xlcycpLmFkZENvbnRyb2xsZXIoJ0FydGljbGVJbmRleENvbnRyb2xsZXInLCBBcnRpY2xlSW5kZXhDb250cm9sbGVyKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9