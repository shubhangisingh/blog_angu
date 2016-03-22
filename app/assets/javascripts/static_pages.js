(function(){
  var app = angular.module('blogApp',['ngSanitize', 'ngTagsInput', 'blog', 'comment', 'tag', 'sanitize']);

    // blog controller

  //   app.controller('BlogController', ['$http', function($http){
    
  //   var blog = this;
  //   blog.title = "Code Blog";
    
  //   blog.posts = {};
  //   $http.get('/api/blogs.json').success(function(data){
  //     blog.posts = data;
  //   });

  //   blog.tags ={};

  //   $http.get('/api/tags.json').success(function(data){
  //     blog.tags = data;

  //   });

  //   blog.hello = function(tag) {
  //     $http.get('/api/blogs.json?tag='+ tag).success(function(data){
  //       blog.posts = data;
  //     });
  //   };
    
  //   blog.tab = 'blog';
    
  //   blog.selectTab = function(setTab){
  //     blog.tab = setTab;
  //   };
    
  //   blog.isSelected = function(checkTab){
  //     return blog.tab === checkTab;

  //   };
    
  //   blog.post = {};
  //   blog.addPost = function(){
  //     blog.post
  //     blog.post.created_at = Date.now();
  //     blog.post.active = 1;
  //     blog.posts.unshift(this.post);
  //     blog.tab = 0;
  //   $http.post('/api/blogs/create.json',{'blog' : blog.post}).success(function(data){
  //     blog.posts = data;
  //   });

  //   };   
    
  // }]);
// sanitize filter
// app.filter("sanitize", ['$sce', function($sce) {
//         return function(htmlCode){
//             return $sce.trustAsHtml(htmlCode);
//         }
//     }]);


// comment controller
  // app.controller('CommentController', function($scope,$http){
  //   this.comment = {};
  //    $scope.abc= function (post) {
  //     console.info('111111'+post)
  //       $http.get('/api/blogs/'+post.id+'/comments.json').success(function(data){
  //         post.comments = data;
  //       });
  //    }
  //   this.addComment = function(post){
  //     if(!post.comments)
  //       post.comments = [];
  //     this.comment.created_at = Date.now();
  //     post.comments.push(this.comment);
  //     $http.post('/api/blogs/'+post.id+'/comments.json',{'comment' : this.comment}).success(function(data){
  //      post.comments = data;
  //     });
  //     this.comment ={};
  //   };
  // });

// tag conroller
  // app.controller('TagController', function($scope, $http) {
  //     $scope.tags = [];
  //   $scope.loadTags = function(query) {
  //     return $http.get('/api/tag_autocomplete/'+query+'.json?query=');
  //   };
  // });
 
})();

