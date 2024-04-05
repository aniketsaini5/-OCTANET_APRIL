function main() {
    var main = gsap.timeline();
    main.from(".image img",{

        duration: 3,
        opacity:0,
        y: -1,
        delay:1,
        scrub: 4,
        repeat:-1,
        yoyo:true



    })
  }
  main();
  
  
  
  