import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './SoftSkills.css'
import SoftSkillsCard from './SoftSkillsCard';

import { softSkillsData } from '../../data/softSkillsData'

function SoftSkills() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Soft Skills</h1>
                    {softSkillsData.map(softSkill => (
                        <SoftSkillsCard
                            key={softSkill.id}
                            id={softSkill.id}
                            skillName={softSkill.skillName}
                            description={softSkill.description}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default SoftSkills
