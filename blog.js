function generateId() {
    var id=0
    return function () {
        return id++
    }
}
var id=generateId()

function makeUser(userName,password) {
    var objj={
        userName:userName,
        password:password,
        posts:[],
        comments:[]
    }
    return objj
}

    function Use(user) {
var obj={
    user:user
}

obj.addPost=function (title,description,url,tag) {
var object={
    id:id(),
    title:title,
    description:description,
    url:url,
    tag:tag
}
    this.user.posts.push(object)
    return object
}

obj.updatePost=function (id,key,val) {
    for (let i = 0; i < this.user.posts.length; i++) {
        if (this.user.posts[i].id===id) {
            this.user.posts[i][key]=val
        }
      }
}

obj.removePost=function (id) {
    for (let i = 0; i < this.user.posts.length; i++) {
        if (this.user.posts[i].id===id) {
           return this.user.posts.splice(i,1)
        }
    }
return 'Please check the id of the post'
}

obj.addComment=function (idd,comment) {
    var objc={
        id:idd,
        idc:id(),
        comment:comment
    }
    this.user.comments.push(objc)
    return objc
}

obj.updateComment=function (idc,newc) {
    for (let i = 0; i < this.user.comments.length; i++) {
        if (this.user.comments[i].idc===idc) {
            this.user.comments[i].comment=newc
        }
      }
}

obj.removeComment=function (idc) {
    for (let i = 0; i < this.user.comments.length; i++) {
        console.log(this.user.comments[i].idc)
        if (this.user.comments[i].idc===idc) {
           return this.user.comments.splice(i,1)
        }
    }
return 'Please check the id of the comment'
}

obj.search=function (tag) {
    var newarr=[]
    for (let i = 0; i < this.user.posts.length; i++) {
        if (this.user.posts[i].tag===tag) {
           newarr.push(this.user.posts[i])
        }
    }
    return newarr
}


return obj
    }

    function displayPost(post) {
        $("#posts").append(`<div id='${post.id}'>
          <h2>${post.title}</h2>
          <h3>${post.description}</h3>
          <h4>${post.tag}</h4>
          <img id="image-${post.id}" src="${post.url}"/>
          </div>`);
    }

        var me=makeUser('fatma','malek')
        var test=Use(me)

        function displayComment(comment) {
            console.log(comment[comment.length-1].comment);
            
            $(`#${comment[comment.length-1].id}`).append(`<div id='${comment[comment.length-1].idc}'>
              <h2>${test.user.userName}</h2>
              <h2>${comment[comment.length-1].comment}</h2>
              </div>`);
        }

        function displayPosts(array) {
            for (let i = 0; i < array.length; i++) {
                var element=array[i]
                    displayPost(element);
                  }
            }

            $('#buttonpost').on('click',function () {
                test.addPost('title','des','url','tag')
                displayPosts(me.posts)
            })

            $('#buttoncomment').on('click',function () {
               
                test.addComment(0,'commm')
                console.log(me.comments);
                displayComment(me.comments)
                
            })
            
            $('#search').on('click',function () {
                $('#posts').empty()
                var text=$('#txt').val()
                console.log(text);
               var arr= test.search(text)
               console.log(arr);
                displayPosts(arr)
            })

            
          
