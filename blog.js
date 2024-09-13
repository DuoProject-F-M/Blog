function generateId() {
    var id=0
    return function () {
        return id++
    }
}
var id=generateId()

var arrayOfPosts=[{id: id(),title:"Digital detox",
    description:"A digital detox involves taking a break from screens to reduce stress and improve mental health. Signs you need one include fatigue and irritability. Planning involves setting screen time limits and creating tech-free zones. Benefits include better sleep, increased clarity, and stronger real-world connections. To maintain balance, use apps to track screen time, set digital boundaries, and engage in offline activities.",
    url:"https://images-ext-1.discordapp.net/external/pi5dbOUkyAprLrlQzOfKpvJMX1fT1GlonVbz8A_OMrA/https/i.pinimg.com/564x/99/36/87/9936872a8513a8db2115d056eeec2057.jpg?format=webp&width=585&height=585",
    tag:["Digital"," Detox"]},

    {id: id(),title:"The Healing Power of Creativity: How Creative Activities Enhance Self-Care and Personal Growth",
description:"Creative activities like painting or writing significantly boost mental health by reducing stress and providing emotional expression. They enhance problem-solving skills and encourage personal development through new challenges. Completing creative projects builds self-confidence and resilience. Incorporating creativity into your routine not only supports mental well-being but also promotes personal growth and self-expression",
url:"https://images-ext-1.discordapp.net/external/mS34ARLThGoavWnuNf7tQMMBNmQILVX_rlQt4ySOwHM/https/i.pinimg.com/736x/0f/10/e3/0f10e336e58dc92df2225384d8168f0d.jpg?format=webp&width=585&height=585",
tag:["Healing"," Power"]},

{id: id(),title:"Unlocking Your Potential: Key Principles of a Growth Mindset",
description:"A growth mindset, introduced by Carol Dweck, is based on the belief that abilities can be developed through effort and learning. Embracing challenges is crucial, as it turns obstacles into growth opportunities. Learning from criticism is another key aspect, using feedback to improve rather than seeing it as a personal attack. Persevering through setbacks is important for maintaining motivation and viewing failure as temporary. Celebrating effort over results encourages a focus on the learning process, not just outcomes. Finally, cultivating curiosity drives continuous self-improvement and a love for learning.",
url:"https://images-ext-1.discordapp.net/external/a0Sel0jL5TB_qf2PPkGzGPFSuehJG8PQnEdKjWq1D-o/https/i.pinimg.com/564x/e9/9d/59/e99d5954973fa28d816b219d39d771ed.jpg?format=webp&width=585&height=585",
tag:["Mindset"," Growth"]}
]
displayPosts(arrayOfPosts)
$('#post_form').hide()
var images=['./images/pic2.png','./images/pic3.png','./images/pic4.png']
var ii=0
function toggleImage() {
    var arr=images
    var img= $('#img')
      ii = (ii + 1) % arr.length;
      $(img).attr('src',arr[ii])
    }
setInterval(toggleImage,2000)
function makeUser(userName,password) {
    var objj={
        userName:userName,
        password:password,
        posts:[],
        comments:[]
    }
    return objj
}
    function Use() {
var obj={
    user:[]
}
obj.addUser=function (user) {
    this.user.push(user)
}
obj.addPost=function (title,description,url,tag) {
var object={
    id:id(),
    title:title,
    description:description,
    url:url,
    tag:tag
}
    this.user[this.user.length-1].posts.push(object)
    return object
}
obj.updatePost=function (id,key,val) {
    for (let i = 0; i < this.user[this.user.length-1].posts.length; i++) {
        if (this.user[this.user.length-1].posts[i].id===id) {
            this.user[this.user.length-1].posts[i][key]=val
        }
      }
}
obj.removePost=function (id) {
    for (let i = 0; i < this.user[this.user.length-1].posts.length; i++) {
        if (this.user[this.user.length-1].posts[i].id===id) {
           return this.user[this.user.length-1].posts.splice(i,1)
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
    this.user[this.user.length-1].comments.push(objc)
    return objc
}
obj.updateComment=function (idc,newc) {
    for (let i = 0; i < this.user[this.user.length-1].comments.length; i++) {
        if (this.user[this.user.length-1].comments[i].idc===idc) {
            this.user[this.user.length-1].comments[i].comment=newc
        }
      }
}
obj.removeComment=function (idc) {
    for (let i = 0; i < this.user[this.user.length-1].comments.length; i++) {
        console.log(this.user[this.user.length-1].comments[i].idc)
        if (this.user[this.user.length-1].comments[i].idc===idc) {
           return this.user[this.user.length-1].comments.splice(i,1)
        }
    }
return 'Please check the id of the comment'
}
obj.search=function (tag) {
    var newarr=[]
    for (let i = 0; i < this.user[this.user.length-1].posts.length; i++) {
        if (this.user[this.user.length-1].posts[i].tag===tag) {
           newarr.push(this.user[this.user.length-1].posts[i])
        }
    }
    return newarr
}
return obj
    }
    function displayPost(post) {
        $("#posts").append(`<div class='form1' id='${post.id}'>
          <h3 class='Title' >${post.title}</h3>
          <h4 class='Description' >${post.description}</h4>
          <h5 class="tags">${post.tag}</h5>
          <img class='postimg' id="image-${post.id}" src="${post.url}"/>
           <button id='comment-${post.id}' class="buttoncomment">Add comment</button>
           <div class="hcomment">
           <input id="c${post.id}" type="text" placeholder="Add your comment..." name="c"/>
           <button name="submitc" type="button" class="submitc">Submit</button>
             </div>
          </div>`);
          $(".hcomment").hide()
          $(".buttoncomment").show()
          $(`#comment-${post.id}`).on("click",function(){
            if (!loggedin) {
                $(".login-page").show()
                $('#posts').hide()
            }
            $(".buttoncomment").hide()
              $(".hcomment").show()
         })

          $(".submitc").on("click",function(){
            if (!loggedin) {
                $(".login-page").show()
            }
            else{
              $(".hcomment").show()
                
            }
          var newc=$(`#c${post.id}`).val()
          console.log("newc: ",post,"arrofcomm",test.user[test.user.length-1].comments,"id post: ",post.id);
          
          test.addComment(post.id,newc)
                  displayComment(test.user[test.user.length-1].comments)
               })
    }
    $(".hcomment").hide()
        function displayComment(arrOfComments) {
            console.log(arrOfComments[arrOfComments.length-1].comment);
            
            $(`#${arrOfComments[arrOfComments.length-1].id}`).append(`<div id='${arrOfComments[arrOfComments.length-1].idc}'>
              <h4 class='thecomment' >${test.user[test.user.length-1].userName}</h4>
              <h5 class='thecomment' >${arrOfComments[arrOfComments.length-1].comment}</h5>
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
    $('#posts').toggle()
 })
 var test=Use()
	$('#create-button').on('click', function() {
		var createUsernameEntry = $("#create-username").val();
		var createPasswordEntry = $("#create-password").val();  

    var newuser=makeUser(createUsernameEntry ,createPasswordEntry)
    test.addUser(newuser)
    console.log('user array',test.user,"new user: ",newuser);
    if((createUsernameEntry).length ) {
      createUsernameValid = true;
    }
    if((createPasswordEntry).length ) {
      createPasswordValid = true;
    }
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
    var loggedin=false
	$('#login-button').on('click', function() {
		var loginUsernameEntry = $("#login-username").val();
		var loginPasswordEntry = $("#login-password").val();
        for (let i = 0; i < test.user.length; i++) {
            if (test.user[i].userName===(loginUsernameEntry)&&test.user[i].password===(loginPasswordEntry)) {
                console.log("Logged In");
                $(".login-page").hide()
                $('#posts').show()
                loggedin=true
                console.log('btn',loggedin);
                return 
            } 
        }
            alert ("Login Failed ! Please check your password.")
	});
         $('#submit').on('click', function() {
            var title = $("#title").val();
            var description = $("#description").val();
            var url = $("#url").val();
            var tag = $("#tag").val();
        if((description).length && (tag).length && (title).length) {
            test.addPost(title,description,url,tag)           
            displayPosts(test.user[test.user.length-1].posts)
        } else {
            alert ('all fields must be filled')
        }
        $('#post_form').hide()
    })