

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".panels",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length -1),
    end: "+=3000",
  }
});



gsap.to(".ld1", {y: 54, duration: 1, x: -10, ease: "power1.inOut", });
gsap.to(".ld1", { width: 285, duration: 1, delay: 1,});
gsap.to(".ld1", { width: 500, duration: 2, delay: 2, onComplete: () => { 
  //gsap.to(window, {scrollTo: {y: 500, }, duration: 1})
  // gsap.to("#loading", {display: 'none', duration: 1,  delay: 1,});
}});


gsap.to(".bar1", 
  {
    width: '500px',
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#home",
      containerAnimation: scrollTween,
      start: "top center",
      end: "bottom center",
      scrub: 1,
    }
  }
)

gsap.to(".bar2", 
  {
    width: 200,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#home",
      containerAnimation: scrollTween,
      start: "top center",
      end: "bottom center",
      scrub: 1,
    }
  }
)


document.querySelector('.kids').addEventListener('mouseover', () => {
  document.getElementById('paper').style.backgroundImage = 'url(./imgs/kids_bg.png)';
});
document.querySelector('.start').addEventListener('mouseover', () => {
  document.getElementById('paper').style.backgroundImage = 'url(./imgs/start_bg.png)';
});

document.querySelector('.deeper').addEventListener('mouseover', () => {
  document.getElementById('paper').style.backgroundImage = 'url(./imgs/deeper_bg.png)';
});
document.querySelector('.role').addEventListener('mouseover', () => {
  document.getElementById('paper').style.backgroundImage = 'url(./imgs/role_bg.png)';
});


//scroll animation

function animateFrom(elem,) {
  gsap.fromTo(elem, {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: elem,
      start: "top center",
      end: "bottom center",
      scrub: 1,
    }
  });
}

//cursor

const cursor = document.querySelector('.cursor-follower');
const count = document.querySelector('.card');
window.addEventListener('mousemove', (e) => {
    const { x, y, target } = e;
    const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button') || target === count;
    gsap.to(cursor, {
      x: x + 1,
      y: y + 1,
      duration: 0.7,
      transform: `scale(${isTargetLinkOrBtn ? 1.6 : 1})`,
    });
});




//text animation
function splitText(element) {
    const text = element.textContent;
    const lines = text.split('\n');
    element.innerHTML = lines.map(line => `<span class="line">${line}</span>`).join('');
    const targets = Array.from(element.querySelectorAll('span'));
    return {
        lines: targets,
    };
}
const par = document.querySelector('.subtitle');
const split = splitText(par);
split.lines.forEach((target, i) => {
  gsap.to(target, {
    ease: "power1.inOut",
    opacity: 1,
    duration: 1 + i * 2,
    scrollTrigger: {
      trigger: target,
      scrub: 1,
      start: "top center",
      end: "bottom center"
    }
  });
});

document.body.style.cursor = 'none';