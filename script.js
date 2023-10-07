


gsap.from(".about-us-in h3",{
    scrollTrigger:{
        trigger:".about-us-in h3",
        scroller:"body",
    
        start:"top 90%",
        end:"bottom 20%",
        scrub:4

    },
    onStart:function(){
        $('.about-us-in h3').textillate({
            in:{ effect: 'fadeInUp'}
            
        });
    }
    
    
})

gsap.to(".page-1 p",{
    scrollTrigger:{
        trigger:".page-1 p",
        scroller:"body",
        
        start:"top 20%",
        end:"bottom 50%",
        scrub:3

    },
    y:"-90",
    
    duration:2
    
    
})
gsap.from(".about-us-in p",{
    scrollTrigger:{
        trigger:".about-us-in p",
        scroller:"body",
    
        start:"top 100%",
        end:"bottom 20%",
        scrub:1

    },
    onStart:function(){
        $('.about-us-in p').textillate({
            in:{ effect: 'fadeInUp'}
            
        });
    }
    
    
})
gsap.from(".about-us img",{
    scrollTrigger:{
        trigger:".about-us img",
        scroller:"body",
        
        start:"top 90%",
        end:"bottom 50%",
        scrub:3

    },
    x:"90",
    scale:0.6,
    duration:2
    
    
})
gsap.from(".about-us-in",{
    scrollTrigger:{
        trigger:".about-us-in",
        scroller:"body",
        
        start:"top 90%",
        end:"bottom 20%",
        scrub:3

    },
    y:"60",
    duration:2
    
    
})
gsap.from(".card",{
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        
        start:"top 90%",
        end:"bottom 50%",
        scrub:1

    },
    y:"-70",
    scale:0.7,
    duration:2
    
    
})
gsap.from(".about-us .pings",{
    scrollTrigger:{
        trigger:".about-us .pings",
        scroller:"body",
        
        start:"top 90%",
        end:"bottom 50%",
        scrub:1

    },
    y:"-70",
    scale:0.7,
    duration:2
    
    
})
gsap.from(".sub",{
    scrollTrigger:{
        trigger:".sub",
        scroller:"body",
        
        start:"top 90%",
        end:"bottom 10%",
        scrub:2

    },
    y:"-180",
    
    duration:5
    
    
})



var s = document.getElementById("search");
// var a=3;
// if (a==2){
//     location.replace('index.html');
// }

// var check = document.querySelector("#submit");
// check.addEventListener("click",function(e){
//     e.preventDefault(); 
//     var con=0;
//     alert(s.value);
//     const subjects = ["DSA","PHYSICS", "CHEMISTRY", "C", "MATHS", "MATH", "EGD", "BEE", "PYTHON", "PYQP"];
//     const searchText = document.getElementById("search").value.toLowerCase();
//     const subs = document.querySelectorAll(".sub");

//     subs.forEach(function (element) {
//         const elementText = element.querySelector("h2").textContent.toLowerCase();
//         if (elementText.includes(searchText)) {
//             element.style.display = "block"; // Show the element
//             document.querySelector(".hero .sub").style.height="85vh";
//             document.querySelector(".hero .sub").style.width="37vw";
//             document.querySelector(".hero .sub h2").style.marginLeft="30%";
//             document.querySelector(".hero .sub p").style.marginLeft="24%";
//             document.querySelector(".hero .sub button").style.margin = "20px 94px";
//             document.querySelector(".hero .sub img").style.marginLeft="20%"

//             con += 1;
//         } else {
//             element.style.display = "none"; // Hide the element
//         }
//     });;
//     if (con === 0) {
//         alert("No matching results found.");
//     }


    // for (let i = 0; i < subjects.length; i++) {
    //     var element = subjects[i];

    //     if (s.value == element ) {
    //         con+=1;
    //         console.log(s.value);
    //         // var cb = document.querySelector(".page-1-1 .sub");
    //         // cb.classList.add("new-try")
    //         // alert("worked")
    //         // var cd = document.querySelector(".page-1-1 .new-try");
    //         // cd.style="block";
    //         break;
    //     }
    // }
    // if(con==1){
    //     window.location.href = 'index.html';
    //     console.log("Redirecting to index.html");
    // }
// })
function search(){
    // console.log(s);
}


// if (s){
//     alert(s);
// }
// else 
// {
//     alert("Bye Bye");
// }


 