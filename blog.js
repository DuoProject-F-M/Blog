$('#post_form').hide()
var images=['./images/pic2.jpg','./images/pic3.jpg','./images/pic4.jpg']
var ii=0
function toggleImage() {
    var arr=images
    var img= $('#img')
      ii = (ii + 1) % arr.length;
      $(img).attr('src',arr[ii])
    }
setInterval(toggleImage,1000)

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
    user:user,
    list:[]
}
obj.addUser=function (user) {
    this.list.push(user)
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
 
obj.check=function (user) {
    for (let i = 0; i < this.list.length; i++) {
        if (this.list.includes(user.userName)&&this.list.includes(user.password)) {
        return true
        }
        }
   return false
}

return obj
    }

    function displayPost(post) {
        $("#posts").append(`<div class='form1' id='${post.id}'>
          <h2>${post.title}</h2>
          <h3>${post.description}</h3>
          <h4>${post.tag}</h4>
          <img class='postimg' id="image-${post.id}" src="${post.url}"/>
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

           
            $('#search').on('click',function () {
                var text=$('#txt').val()
                console.log(text);
               var arr= test.search(text)
               if (arr.length) {
                console.log(arr);
                $('#posts').empty()
                displayPosts(arr)
               }
            })

 $(".login-page").hide()
 $("#signup").on("click",function(){
    $(".login-page").toggle()
    $('#posts').hide()
 })



 // Look at console///////////////////////////////////////////////////////////////////

	
  var loggedin=false
	$('#login-button').on('click', function() {
		var loginUsernameEntry = $("#login-username").val();
		var loginPasswordEntry = $("#login-password").val();
        for (let i = 0; i < test.list.length; i++) {
            if (test.list[i].userName===(loginUsernameEntry)&&test.list[i].password===(loginPasswordEntry)) {
                console.log("Logged In");
                $(".login-page").hide()
                $('#posts').show()
                loggedin=true
                console.log('btn',loggedin);
                

            } else {
                alert ("Login Falied")
            };
        }
       
	});
  
	$('#create-button').on('click', function() {
		var createUsernameEntry = $("#create-username").val();
		var createPasswordEntry = $("#create-password").val();
    var createUsernameValid = false;
    var createPasswordValid = false;
    var createUsernameObject = $("#create-username");
    var createPasswordObject = $("#create-password");
  
    var validate = /^\s*[a-zA-Z0-9,\s]+\s*$/;
   
    if(!validate.test(createUsernameEntry) || (createUsernameEntry).length == 0) {
      $(createUsernameObject).addClass("error")
      $(createUsernameObject).val("No special characters or spaces.")
    } else {
      createUsernameValid = true;
      var createUsername = $(createUsernameObject).val();
    }
    
    if(!validate.test(createPasswordEntry) || (createPasswordEntry).length == 0) {
      $(createPasswordObject).addClass("error");
      $(createPasswordObject).val("No special characters or spaces.");
    } else {
      createPasswordValid = true;
      var createPassword = $(createPasswordObject).val();
    }
    
   
      
    $(createUsernameObject).on('click', function () {
      $(this).val("");  
      $(this).removeClass("error");
    });
    
    $(createPasswordObject).on('click', function () {
      $(this).val("");  
      $(this).removeClass("error");
    });
    


    var user= makeUser(createUsername, createPassword)
    test.addUser(user)
    
		if(createUsernameValid && createPasswordValid ) {
      $('form').animate({
			height: "toggle",
			opacity: "toggle"
		}, "fast");
    }
	});
  
	$('.message a').on('click', function() {
		$('form').animate({
			height: "toggle",
			opacity: "toggle"
		}, "fast");
	});

        $("#buttonpost").on("click",function(){   
            if (!loggedin) {
                $(".login-page").show()
            }
            else {
        $('#post_form').show()
                displayPosts(me.posts)
            }
         })
         $("#buttoncomment").on("click",function(){
            if (!loggedin) {
                $(".login-page").show()
            }
            else{
                test.addComment(0,'commm')
                displayComment(me.comments)
            }
         })
     
         var admin=makeUser('admin','admin')
         test.addUser(admin)
///////////////////////////////////////////////////////////////////////////////////////////
         $('#submit').on('click', function() {
            var title = $("#title").val();
            var description = $("#description").val();
            var url = $("#url").val();
            var tag = $("#tag").val();
       
        if((description).length && (tag).length && (title).length) {
            test.addPost(title,description,url,tag)
            displayPosts(me.posts)
        } else {
            alert ('all fields must be filled')
        }
        $('#post_form').hide()
    })