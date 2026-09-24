const header = document.getElementById("header");


function updateHeader() {

    if (!header) {
        return;
    }


    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


updateHeader();



const navigationLinks =
    document.querySelectorAll(
        '.navigation a[href^="#"]'
    );


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetID =
                link.getAttribute("href");

            const target =
                document.querySelector(targetID);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});



const revealElements =
    document.querySelectorAll(
        ".about-grid, " +
        ".experience-card, " +
        ".timeline-item, " +
        ".community-grid, " +
        ".gallery-item, " +
        ".final-content"
    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

});



if ("IntersectionObserver" in window) {


    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );


} else {


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "visible"
            );

        }
    );

}



const heroPhoto =
    document.querySelector(
        ".hero-photo img"
    );


window.addEventListener(
    "scroll",
    function () {

        if (!heroPhoto) {
            return;
        }


        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {

            return;

        }


        const scroll =
            window.scrollY;


        if (scroll < window.innerHeight) {

            heroPhoto.style.transform =
                `translateY(${scroll * 0.12}px) scale(1.03)`;

        }

    },
    {
        passive: true
    }
);



console.log(
    "BollyLatin website loaded."
);
