 var app = angular.module('blog',[]);
 app.controller('BlogController', ['$http', function($http){
    
    var blog = this;
    blog.title = "Code Blog";
    
    blog.posts = {};
    $http.get('/api/blogs.json').success(function(data){
      blog.posts = data;
    });

    blog.tags ={};

    $http.get('/api/tags.json').success(function(data){
      blog.tags = data;

    });

    blog.hello = function(tag) {
      $http.get('/api/blogs.json?tag='+ tag).success(function(data){
        blog.posts = data;
      });
    };
    
    blog.tab = 'blog';
    
    blog.selectTab = function(setTab){
      blog.tab = setTab;
    };
    
    blog.isSelected = function(checkTab){
      return blog.tab === checkTab;

    };
    
    blog.post = {};
    blog.addPost = function(){
      blog.post
      blog.post.created_at = Date.now();
      blog.post.active = 1;
      blog.posts.unshift(this.post);
      blog.tab = 0;
    $http.post('/api/blogs/create.json',{'blog' : blog.post}).success(function(data){
      blog.posts = data;
    });

    };    
  }]);