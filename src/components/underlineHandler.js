
export function handleSectionChange(skillsIsVisible, projectIsVisible, homeIsVisible, aboutMeIsVisible, experienceIsVisible, contactIsVisible){
        
    let homeLi = document.querySelector('#homeLi')
    let projectLi = document.querySelector(`#projectsLi`)
    let skillsLi = document.querySelector('#skillsLi')
    let aboutMeLi = document.querySelector('#aboutMeLi')
    let experienceLi = document.querySelector('#experienceLi')
    let contactLi = document.querySelector('#contactLi')
    
    if(homeIsVisible) homeLi.classList.add('underline')
    else homeLi.classList.remove('underline')

    if(projectIsVisible) projectLi.classList.add('underline')
    else projectLi.classList.remove('underline')

    if(skillsIsVisible) skillsLi.classList.add('underline')
    else skillsLi.classList.remove('underline')

    if(aboutMeIsVisible) aboutMeLi.classList.add('underline')
    else aboutMeLi.classList.remove('underline')
    
    if(experienceIsVisible) experienceLi.classList.add('underline')
    else experienceLi.classList.remove('underline')

    if(contactIsVisible) contactLi.classList.add('underline')
    else contactLi.classList.remove('underline')
}