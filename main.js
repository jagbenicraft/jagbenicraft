function openNav() {
    document.getElementById("jsnavbar").classList.add("toggleclass");
  };
  
  function closeNav() {
    document.getElementById("jsnavbar").classList.remove("toggleclass");
  };

  
// Split text into words and characters
const text = new SplitType("#new", { types: "words, chars" });

console.clear();

gsap.registerPlugin(ScrollTrigger);

const text2 = new SplitType("#new2", { types: "words, chars" });


const al = gsap
  .timeline({
    scrollTrigger: {
        
      trigger: "#sl2Section",
      start: "top top",
      end: "+=150%",
      pin: ".slide2",
     
      scrub: 0.75
     
    }
  })

 .to(
    text2.words,
    {
      y:10,
      textFillColor: "#9A2827",
      opacity:1,
      stagger: 0.1
    },
    0.1
  );


const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section1",
      start: "top top",
      end: "+=150%",
      pin: ".slide1",
      
      scrub: 0.75
     
    }
  })

 .to(
    text.words,
    {
        y:3,
      textFillColor: "#9A2827",
      opacity:1,
      stagger: 0.1
    },
    0.1
  );


  




const races = document.querySelector(".races");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".slide4",
	start:"top top",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:".slide4",
	animation:tween,
	scrub:1,
	invalidateOnRefresh:true
	// markers:true

})



gsap.from(".navbar a", {
	
    y: -10,
    stagger: 0.2
});


gsap.from(".logo-rec", {
	
    y: -10,
    stagger: 0.2
});
