/// <reference path="../../typings/app.d.ts" />
var app;
(function (app) {
    var components;
    (function (components) {
        var stacktrace;
        (function (stacktrace) {
            'use strict';
            var StacktraceService = (function () {
                function StacktraceService() {
                    this.print = printStackTrace;
                }
                StacktraceService.prototype.getLocalStackTrace = function (callerName) {
                    if (callerName == null) {
                        callerName = 'Stacktrace';
                    }
                    else {
                        callerName = 'Stacktrace: ' + callerName;
                    }
                    var stackFrames = printStackTrace();
                    var frames = [];
                    for (var i = 0; i < stackFrames.length; i++) {
                        var frameStr = stackFrames[i];
                        if (frameStr.startsWith('Object.printStackTrace')) {
                            continue;
                        }
                        var frame = this.parseFrame(frameStr);
                        if (frame.path.contains('bower_components') || frame.func.endsWith('getLocalStackTrace') || frame.file === 'stacktrace-service.js' || frame.file === 'profile-service.js') {
                            continue;
                        }
                        frames.push(frame);
                    }
                    return frames;
                };
                // Takes a string, as generated by stacktrace.js
                // and parses it into a well-defined frame object
                StacktraceService.prototype.parseFrame = function (frame) {
                    var atIdx = frame.indexOf('@');
                    var func = frame.substring(0, atIdx);
                    // The calling function usually has a spurious object prepended
                    // let's drop it
                    var fullSt = func.indexOf('.');
                    if (fullSt > 0) {
                        func = func.substring(fullSt + 1);
                    }
                    var loc = frame.substring(atIdx + 1);
                    var lastSlash = loc.lastIndexOf('/');
                    var path = loc.substring(0, lastSlash);
                    var fileAndSpec = loc.substring(lastSlash + 1);
                    var colon = fileAndSpec.indexOf(':');
                    var file = fileAndSpec.substring(0, colon);
                    var spec = fileAndSpec.substring(colon + 1);
                    colon = spec.indexOf(':');
                    var line = spec.substring(0, colon);
                    var col = spec.substring(colon + 1);
                    return {
                        path: path,
                        file: file,
                        func: func,
                        line: line,
                        col: col,
                    };
                };
                return StacktraceService;
            })();
            stacktrace.StacktraceService = StacktraceService;
            var m = app.Module.load('app.components.stacktrace');
            m.addService('StacktraceService', StacktraceService);
        })(stacktrace = components.stacktrace || (components.stacktrace = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhY2t0cmFjZS9zdGFja3RyYWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiYXBwIiwiYXBwLmNvbXBvbmVudHMiLCJhcHAuY29tcG9uZW50cy5zdGFja3RyYWNlIiwiYXBwLmNvbXBvbmVudHMuc3RhY2t0cmFjZS5TdGFja3RyYWNlU2VydmljZSIsImFwcC5jb21wb25lbnRzLnN0YWNrdHJhY2UuU3RhY2t0cmFjZVNlcnZpY2UuY29uc3RydWN0b3IiLCJhcHAuY29tcG9uZW50cy5zdGFja3RyYWNlLlN0YWNrdHJhY2VTZXJ2aWNlLmdldExvY2FsU3RhY2tUcmFjZSIsImFwcC5jb21wb25lbnRzLnN0YWNrdHJhY2UuU3RhY2t0cmFjZVNlcnZpY2UucGFyc2VGcmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBRS9DLElBQU8sR0FBRyxDQXdGVDtBQXhGRCxXQUFPLEdBQUc7SUFBQ0EsSUFBQUEsVUFBVUEsQ0F3RnBCQTtJQXhGVUEsV0FBQUEsVUFBVUE7UUFBQ0MsSUFBQUEsVUFBVUEsQ0F3Ri9CQTtRQXhGcUJBLFdBQUFBLFVBQVVBLEVBQUNBLENBQUNBO1lBQzlCQyxZQUFZQSxDQUFDQTtZQXNCaEJBLElBQWFBLGlCQUFpQkE7Z0JBRTdCQyxTQUZZQSxpQkFBaUJBO29CQUt0QkMsVUFBS0EsR0FBdUJBLGVBQWVBLENBQUNBO2dCQUZuREEsQ0FBQ0E7Z0JBSU1ELDhDQUFrQkEsR0FBekJBLFVBQTBCQSxVQUFrQkE7b0JBQzNDRSxFQUFFQSxDQUFDQSxDQUFDQSxVQUFVQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeEJBLFVBQVVBLEdBQUdBLFlBQVlBLENBQUNBO29CQUMzQkEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNQQSxVQUFVQSxHQUFHQSxjQUFjQSxHQUFHQSxVQUFVQSxDQUFDQTtvQkFDMUNBLENBQUNBO29CQUVEQSxJQUFJQSxXQUFXQSxHQUFhQSxlQUFlQSxFQUFFQSxDQUFDQTtvQkFDOUNBLElBQUlBLE1BQU1BLEdBQWtCQSxFQUFFQSxDQUFDQTtvQkFFL0JBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFdBQVdBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO3dCQUM3Q0EsSUFBSUEsUUFBUUEsR0FBR0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzlCQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUNuREEsUUFBUUEsQ0FBQ0E7d0JBQ1ZBLENBQUNBO3dCQUNEQSxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTt3QkFDdENBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxJQUFJQSxLQUFLQSx1QkFBdUJBLElBQUlBLEtBQUtBLENBQUNBLElBQUlBLEtBQUtBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQzNLQSxRQUFRQSxDQUFDQTt3QkFDVkEsQ0FBQ0E7d0JBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNwQkEsQ0FBQ0E7b0JBRURBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO2dCQUNmQSxDQUFDQTtnQkFFREYsZ0RBQWdEQTtnQkFDaERBLGlEQUFpREE7Z0JBQ3pDQSxzQ0FBVUEsR0FBbEJBLFVBQW1CQSxLQUFhQTtvQkFDL0JHLElBQUlBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO29CQUMvQkEsSUFBSUEsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxBQUVBQSwrREFGK0RBO29CQUMvREEsZ0JBQWdCQTt3QkFDWkEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQy9CQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDaEJBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO29CQUNuQ0EsQ0FBQ0E7b0JBQ0RBLElBQUlBLEdBQUdBLEdBQUdBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO29CQUNyQ0EsSUFBSUEsU0FBU0EsR0FBR0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxJQUFJQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtvQkFDdkNBLElBQUlBLFdBQVdBLEdBQUdBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO29CQUMvQ0EsSUFBSUEsS0FBS0EsR0FBR0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxJQUFJQSxJQUFJQSxHQUFHQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDM0NBLElBQUlBLElBQUlBLEdBQUdBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO29CQUM1Q0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQzFCQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDcENBLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO29CQUNwQ0EsTUFBTUEsQ0FBQ0E7d0JBQ05BLElBQUlBLEVBQUVBLElBQUlBO3dCQUNWQSxJQUFJQSxFQUFFQSxJQUFJQTt3QkFDVkEsSUFBSUEsRUFBRUEsSUFBSUE7d0JBQ1ZBLElBQUlBLEVBQUVBLElBQUlBO3dCQUNWQSxHQUFHQSxFQUFFQSxHQUFHQTtxQkFDUkEsQ0FBQ0E7Z0JBQ0hBLENBQUNBO2dCQUNGSCx3QkFBQ0E7WUFBREEsQ0E3REFELEFBNkRDQyxJQUFBRDtZQTdEWUEsNEJBQWlCQSxHQUFqQkEsaUJBNkRaQSxDQUFBQTtZQUVEQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSwyQkFBMkJBLENBQUNBLENBQUNBO1lBQ3JEQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxtQkFBbUJBLEVBQUVBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7UUFDdERBLENBQUNBLEVBeEZxQkQsVUFBVUEsR0FBVkEscUJBQVVBLEtBQVZBLHFCQUFVQSxRQXdGL0JBO0lBQURBLENBQUNBLEVBeEZVRCxVQUFVQSxHQUFWQSxjQUFVQSxLQUFWQSxjQUFVQSxRQXdGcEJBO0FBQURBLENBQUNBLEVBeEZNLEdBQUcsS0FBSCxHQUFHLFFBd0ZUIiwiZmlsZSI6ImNvbXBvbmVudHMvc3RhY2t0cmFjZS9zdGFja3RyYWNlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9hcHAuZC50c1wiIC8+XG5cbm1vZHVsZSBhcHAuY29tcG9uZW50cy5zdGFja3RyYWNlIHtcbiAgICAndXNlIHN0cmljdCc7XG5cblx0Ly8gTGV0IHR5cGVzY3JpcHQga25vdyBhYm91dCB0aGUgZ2xvYmFsIGZ1bmN0aW9uIGRlZmluZWQgYnkgc3RhY2t0YWNlLmpzXG5cdGludGVyZmFjZSBJU3RhY2tmcmFtZVByaW50ZXIge1xuXHRcdCgpOiBzdHJpbmdbXTtcblx0fVxuXG5cdGRlY2xhcmUgdmFyIHByaW50U3RhY2tUcmFjZTogSVN0YWNrZnJhbWVQcmludGVyO1xuXG5cdGludGVyZmFjZSBJU3RhY2tGcmFtZSB7XG5cdFx0Ly8gZS5nLiBodHRwOi8vaG9zdC5jb20vY29tcG9uZW50cy9cblx0XHRwYXRoOiBzdHJpbmc7XG5cdFx0Ly8gZS5nLiBjb21wb25lbnQtc2VydmljZS5qc1xuXHRcdGZpbGU6IHN0cmluZztcblx0XHQvLyBlLmcuIENvbXBvbmVudC5jb21wb25lbnRGdW5jdGlvblxuXHRcdGZ1bmM6IHN0cmluZztcblx0XHQvLyBlLmcuIDIzNFxuXHRcdGxpbmU6IHN0cmluZztcblx0XHQvLyBlLmcuIDIzXG5cdFx0Y29sOiBzdHJpbmc7XG5cdH1cblxuXHRleHBvcnQgY2xhc3MgU3RhY2t0cmFjZVNlcnZpY2Uge1xuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0fVxuXHRcdFxuXHRcdHB1YmxpYyBwcmludDogSVN0YWNrZnJhbWVQcmludGVyID0gcHJpbnRTdGFja1RyYWNlO1xuXG5cdFx0cHVibGljIGdldExvY2FsU3RhY2tUcmFjZShjYWxsZXJOYW1lOiBzdHJpbmcpOiBBcnJheTxJU3RhY2tGcmFtZT4ge1xuXHRcdFx0aWYgKGNhbGxlck5hbWUgPT0gbnVsbCkge1xuXHRcdFx0XHRjYWxsZXJOYW1lID0gJ1N0YWNrdHJhY2UnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2FsbGVyTmFtZSA9ICdTdGFja3RyYWNlOiAnICsgY2FsbGVyTmFtZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dmFyIHN0YWNrRnJhbWVzOiBzdHJpbmdbXSA9IHByaW50U3RhY2tUcmFjZSgpO1xuXHRcdFx0dmFyIGZyYW1lczogSVN0YWNrRnJhbWVbXSA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrRnJhbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBmcmFtZVN0ciA9IHN0YWNrRnJhbWVzW2ldO1xuXHRcdFx0XHRpZiAoZnJhbWVTdHIuc3RhcnRzV2l0aCgnT2JqZWN0LnByaW50U3RhY2tUcmFjZScpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGZyYW1lID0gdGhpcy5wYXJzZUZyYW1lKGZyYW1lU3RyKTtcblx0XHRcdFx0aWYgKGZyYW1lLnBhdGguY29udGFpbnMoJ2Jvd2VyX2NvbXBvbmVudHMnKSB8fCBmcmFtZS5mdW5jLmVuZHNXaXRoKCdnZXRMb2NhbFN0YWNrVHJhY2UnKSB8fCBmcmFtZS5maWxlID09PSAnc3RhY2t0cmFjZS1zZXJ2aWNlLmpzJyB8fCBmcmFtZS5maWxlID09PSAncHJvZmlsZS1zZXJ2aWNlLmpzJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZyYW1lcy5wdXNoKGZyYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZyYW1lcztcblx0XHR9XG5cblx0XHQvLyBUYWtlcyBhIHN0cmluZywgYXMgZ2VuZXJhdGVkIGJ5IHN0YWNrdHJhY2UuanNcblx0XHQvLyBhbmQgcGFyc2VzIGl0IGludG8gYSB3ZWxsLWRlZmluZWQgZnJhbWUgb2JqZWN0XG5cdFx0cHJpdmF0ZSBwYXJzZUZyYW1lKGZyYW1lOiBzdHJpbmcpOiBJU3RhY2tGcmFtZSB7XG5cdFx0XHR2YXIgYXRJZHggPSBmcmFtZS5pbmRleE9mKCdAJyk7XG5cdFx0XHR2YXIgZnVuYyA9IGZyYW1lLnN1YnN0cmluZygwLCBhdElkeCk7XG5cdFx0XHQvLyBUaGUgY2FsbGluZyBmdW5jdGlvbiB1c3VhbGx5IGhhcyBhIHNwdXJpb3VzIG9iamVjdCBwcmVwZW5kZWRcblx0XHRcdC8vIGxldCdzIGRyb3AgaXRcblx0XHRcdHZhciBmdWxsU3QgPSBmdW5jLmluZGV4T2YoJy4nKTtcblx0XHRcdGlmIChmdWxsU3QgPiAwKSB7XG5cdFx0XHRcdGZ1bmMgPSBmdW5jLnN1YnN0cmluZyhmdWxsU3QgKyAxKTtcblx0XHRcdH1cblx0XHRcdHZhciBsb2MgPSBmcmFtZS5zdWJzdHJpbmcoYXRJZHggKyAxKTtcblx0XHRcdHZhciBsYXN0U2xhc2ggPSBsb2MubGFzdEluZGV4T2YoJy8nKTtcblx0XHRcdHZhciBwYXRoID0gbG9jLnN1YnN0cmluZygwLCBsYXN0U2xhc2gpO1xuXHRcdFx0dmFyIGZpbGVBbmRTcGVjID0gbG9jLnN1YnN0cmluZyhsYXN0U2xhc2ggKyAxKTtcblx0XHRcdHZhciBjb2xvbiA9IGZpbGVBbmRTcGVjLmluZGV4T2YoJzonKTtcblx0XHRcdHZhciBmaWxlID0gZmlsZUFuZFNwZWMuc3Vic3RyaW5nKDAsIGNvbG9uKTtcblx0XHRcdHZhciBzcGVjID0gZmlsZUFuZFNwZWMuc3Vic3RyaW5nKGNvbG9uICsgMSk7XG5cdFx0XHRjb2xvbiA9IHNwZWMuaW5kZXhPZignOicpO1xuXHRcdFx0dmFyIGxpbmUgPSBzcGVjLnN1YnN0cmluZygwLCBjb2xvbik7XG5cdFx0XHR2YXIgY29sID0gc3BlYy5zdWJzdHJpbmcoY29sb24gKyAxKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBhdGg6IHBhdGgsXG5cdFx0XHRcdGZpbGU6IGZpbGUsXG5cdFx0XHRcdGZ1bmM6IGZ1bmMsXG5cdFx0XHRcdGxpbmU6IGxpbmUsXG5cdFx0XHRcdGNvbDogY29sLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbSA9IGFwcC5Nb2R1bGUubG9hZCgnYXBwLmNvbXBvbmVudHMuc3RhY2t0cmFjZScpO1xuXHRtLmFkZFNlcnZpY2UoJ1N0YWNrdHJhY2VTZXJ2aWNlJywgU3RhY2t0cmFjZVNlcnZpY2UpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9