import React from 'react';
import './ResumeModern.css';
import './ResumeClassic.css';
import './ResumeCreative.css';

function ResumePreview({ resumeData, onGenerateResume, onBack, setResumeData}) {
    const { id, user_id, fullName, email, phone, dob, address, education, skills, experience, resume_type, created_on } = resumeData;
    const types = ['classic', 'modern', 'creative'];

    return (
        <div id="resumeOutput">
            <div id='resume' className={types[resume_type - 1]}>
                <h1>Resume</h1>
                <div id="resumeHeader">
                    <div id="resumeHeaderRight">
                        <h2 id="resumeFullName">{fullName}</h2>
                        <p id="resumeEmail">{email}</p>
                        <p id="resumePhone">{phone}</p>
                        <p id="resumeDob">{dob}</p>
                        <p id="resumeAddress">{address}</p>
                    </div>
                </div>
                <div id="resumeBody">
                    <h2>Education</h2>
                    <p id="resumeEducation">{education}</p>
                    <h2>Skills</h2>
                    <p id="resumeSkills">{skills}</p>
                    <h2>Work Experience</h2>
                    <p id="resumeExperience">{experience}</p>
                </div>
            </div>
            <button className="button" type="button" id="generate" onClick={onGenerateResume}>Download</button>
            <button type="button" id="prev" onClick={onBack}>BACK</button>
        </div>
    );
}

export default ResumePreview;
