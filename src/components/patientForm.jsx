import { useState } from 'react';
import './patientForm.css';
import SubmitHistory from './submitHistory';

const PatientForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const [underPcp, setUnderPcp] = useState(false);
    const [pcpName, setPcpName] = useState('');
    const [healthConcerns, setHealthConcerns] = useState('');
    const [currentConcerns, setCurrentConcerns] = useState('');
    const [patientData, setPatientData] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        const data = {
            firstName,lastName,birthDate,
            phone,underPcp,pcpName,
            healthConcerns, currentConcerns
        };

        console.log(data);

        setPatientData(prevData => [...prevData, data]);
    }

    const handleFirstNameChange = event => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = event => {
        setLastName(event.target.value);
    }

    const handleBirthChange = event => {
        setBirthDate(event.target.value);
    }

    const handlePhoneChange = event => {
        setPhone(event.target.value);
    }

    const handlePcpChange = event => {
        setUnderPcp(event.target.checked);
    }

    const handlePcpNameChange = event =>  {
        setPcpName(event.target.value);
    }

    const handleHealthConcernsChange = event => {
        setHealthConcerns(event.target.value);
    }

    const handleCurrentConcernsChange = event => {
        setCurrentConcerns(event.target.value);
    }

    const viewData = event => {
        event.preventDefault();
        setShowHistory(prevShow => !prevShow);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h2>Assessment Form</h2>
            <h3>Patient Information</h3>
            <div className="field">
                <label>First Name (required)</label>
                <div><input required type="text" value={firstName} onChange={handleFirstNameChange} /></div>
            </div>
            <div className="field">
                <label>Last Name (required)</label>
                <div><input required type="text" value={lastName} onChange={handleLastNameChange} /></div>
            </div>
            <div className="field">
                <label>Date of Birth (required)</label>
                <div><input required type="text" value={birthDate} onChange={handleBirthChange} /></div>
            </div>
            <div className="field">
                <label>Phone</label>
                <div><input type="text" value={phone} onChange={handlePhoneChange} /></div>
            </div>
            <h3>Care Information</h3>
            <div className="field">
                <label>Are you Currently Under PCP?
                    <input type="checkbox" checked={underPcp} onChange={handlePcpChange} />
                    <span>{underPcp ? "yes" : "no"}</span>
                </label>
            </div>
            {underPcp &&
                <div>
                    <h3>PCP Name</h3>
                    <div className="field">
                        <label>Name (required)</label>
                        <div><input required={underPcp} type="text" value={pcpName} onChange={handlePcpNameChange} /></div>
                    </div>
                    <div className="field">
                        <label>Health Concerns and symptoms (required)</label>
                        <div><textarea required={underPcp} placeholder="[Write Concerns and Symptoms Here]" value={healthConcerns} onChange={handleHealthConcernsChange} /></div>
                    </div>
                    <div className="field">
                        <label>What are your current Health Concerns ? (required)</label>
                        <div><textarea required={underPcp} placeholder="[Write Current Health Concerns here]" value={currentConcerns} onChange={handleCurrentConcernsChange} /></div>
                    </div>
                </div>
            }
            <input type="submit" value="Submit" />
            <div><button onClick={viewData}>
                {showHistory
                    ?<span>Hide</span>
                    :<span>View</span>
                }
                Patient Data
            </button></div>
            <SubmitHistory show={showHistory} data={patientData} />
        </form>
        </div>
    );
}

export default PatientForm;