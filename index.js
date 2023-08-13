let mySkills = document.querySelectorAll('.forAnimationSelector');

let skillsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add('showFullClass');
                setTimeout(() => {
                    element.target.style.opacity = 1;
                }, 990);
            } 
        });
    },
    {
        threshold: [1]
    }
);

mySkills.forEach((skill) => skillsObserver.observe(skill));
