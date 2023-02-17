
export function handleSectionChange(skillsIsVisible, projectIsVisible, homeIsVisible, aboutMeIsVisible, experienceIsVisible, contactIsVisible){
        
    let homeLi = document.querySelector('#homeLi')
    let projectLi = document.querySelector(`#projectsLi`)
    let skillsLi = document.querySelector('#skillsLi')
    let aboutMeLi = document.querySelector('#aboutMeLi')
    let experienceLi = document.querySelector('#experienceLi')
    let contactLi = document.querySelector('#contactLi')

    let pairs = [
        [ homeIsVisible, homeLi ],
        [ projectIsVisible, projectLi ],
        [ skillsIsVisible, skillsLi ],
        [ aboutMeIsVisible, aboutMeLi ],
        [ experienceIsVisible, experienceLi ],
        [ contactIsVisible, contactLi ]
    ]
    
    pairs.forEach( p => p[0] ? p[1].classList.add('underline') : p[1].classList.remove('underline'));
}