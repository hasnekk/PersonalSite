let mySkills = document.querySelectorAll('.forAnimationSelector');

let skillsObserver = new IntersectionObserver(
    (entries, skillsObserver) => {
        entries.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add('onEnterClass');
                setTimeout(() => {
                    element.target.style.opacity = 1;
                }, 990);
            }else{
                element.target.classList.remove('onEnterClass');
                setTimeout(() => {
                    element.target.style.opacity = 0;
                }, 1000);
            }
        });
    },
    {
        threshold: [0]
    }
);

mySkills.forEach((skill) => skillsObserver.observe(skill));
