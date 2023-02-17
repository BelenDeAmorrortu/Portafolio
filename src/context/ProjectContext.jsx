import React, { useContext, useState } from 'react'
import { useEffect } from 'react'

const ProjectContext = React.createContext()

export function useProject() {
    return useContext(ProjectContext)
}

export function ProjectProvider({ children }) {

    const [currentProject, setCurrentProject] = useState(false)
    const [display, setDisplay] = useState('none')

    useEffect(()=>{
        currentProject ? setDisplay('flex') : setDisplay('none')
    }, [currentProject])

    let value = {
        currentProject,
        setCurrentProject,
        display,
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}