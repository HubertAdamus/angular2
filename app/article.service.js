System.register(['./article-data', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var article_data_1, core_1;
    var ArticleService;
    return {
        setters:[
            function (article_data_1_1) {
                article_data_1 = article_data_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {Http} from 'angular2/http'
            ArticleService = (function () {
                function ArticleService() {
                }
                ArticleService.prototype.getArticles = function () {
                    return Promise.resolve(article_data_1.ARTICLES);
                };
                ArticleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ArticleService);
                return ArticleService;
            })();
            exports_1("ArticleService", ArticleService);
        }
    }
});
//class DataService{
//    items:Array<any>
//
//    constructor (@Inject(Http) http:Http){
//
//    }
//} 
//# sourceMappingURL=article.service.js.map