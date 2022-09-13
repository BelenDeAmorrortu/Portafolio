
export function handleSectionChange(skillsIsVisible, projectIsVisible, homeIsVisible, aboutMeIsVisible, experienceIsVisible, contactIsVisible){
        
    let homeLi = document.querySelector('#homeLi')
    let projectLi = document.querySelector(`#projectsLi`)
    let skillsLi = document.querySelector('#skillsLi')
    let aboutMeLi = document.querySelector('#aboutMeLi')
    let experienceLi = document.querySelector('#experienceLi')
    let contactLi = document.querySelector('#contactLi')
    let borderStyle = '2px solid #f5f5f5'

    if(homeIsVisible) homeLi.style.borderBottom = borderStyle
    else homeLi.style.borderBottom = 'none'

    if(projectIsVisible) projectLi.style.borderBottom = borderStyle
    else projectLi.style.borderBottom = 'none'

    if(skillsIsVisible) skillsLi.style.borderBottom = borderStyle
    else skillsLi.style.borderBottom = 'none'

    if(aboutMeIsVisible) aboutMeLi.style.borderBottom = borderStyle
    else aboutMeLi.style.borderBottom = 'none'
    
    if(experienceIsVisible) experienceLi.style.borderBottom = borderStyle
    else experienceLi.style.borderBottom = 'none'

    if(contactIsVisible) contactLi.style.borderBottom = borderStyle
    else contactLi.style.borderBottom = 'none'
}