 var app = angular.module('comment',[]);

  app.controller('CommentController', function($scope,$http){
    this.comment = {};
     $scope.abc= function (post) {

      post.comments= []

      if (post.comments) {
        $http.get('/api/blogs/'+post.id+'/comments.json').success(function(data){
          post.comments = data;
        });

      };
     }
    this.addComment = function(post){
      if(!post.comments)
        post.comments = [];
      this.comment.created_at = Date.now();
      post.comments.push(this.comment);
      $http.post('/api/blogs/'+post.id+'/comments.json',{'comment' : this.comment})
      this.comment ={};
    };
  });