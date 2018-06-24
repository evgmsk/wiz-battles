/**
 * project WizBattle
 */
import React from 'react';
import Star from 'react-icons/lib/fa/star';

const ExperienceBar = props => {
    const experienceClass = `experience-bar experience-${props.experience}`;
    return props.experience !== undefined
        ? (
            <div className="experience-box">
                <span className="experience-value"><Star /></span>
                <div className="experience-progress">
                    <div className={experienceClass} value={props.experience} />
                </div>
            </div>)
        : <div />;
};

export default ExperienceBar;
