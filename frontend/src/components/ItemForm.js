import React, { useState, useEffect } from 'react';
import axios from 'axios';
        
const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFName] = useState('');
    const [middle_name, setMName] = useState('');
    const [last_name, setLName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [civil_status, setCStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBType] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [gsis_id, setGId] = useState('');
    const [pagibig_id, setPId] = useState('');
    const [philhealth_id, setPhId] = useState('');
    const [sss_no, setSss] = useState('');
    const [tin_no, setTin] = useState('');
    const [agency_employee_no, setAEmployee] = useState('');
    const [spouses_name, setSName] = useState('');
    const [fathers_name, setFathersN] = useState('');
    const [mothers_name, setMothersN] = useState('');
    const [elementary_school, setESchool] = useState('');
    const [secondary_school, setSSchool] = useState('');
    const [college_school, setCSchool] = useState('');
    const [graduate_studies, setGStudies] = useState('');

 
    useEffect(() => {
        if (item) {
            setFName(item.first_name);
            setMName(item.middle_name);
            setLName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
            setBirthday(item.birthday);
            setGender(item.gender);
            setCStatus(item.civil_status);
            setHeight(item.height);
            setWeight(item.weight);
            setBType(item.blood_type);
            setCitizenship(item.citizenship);
            setGId(item.gsis_id);
            setPId(item.pagibig_id);
            setPhId(item.philhealth_id);
            setSss(item.sss_no);
            setTin(item.tin_no);
            setAEmployee(item.agency_employee_no);
            setSName(item.spouses_name);
            setFathersN(item.fathers_name);
            setMothersN(item.mothers_name);
            setESchool(item.elementary_school);
            setSSchool(item.secondary_school);
            setCSchool(item.college_school);
            setGStudies(item.graduate_studies);

         }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { first_name, middle_name, last_name, address, email, phone, birthday, gender, civil_status, height, weight, blood_type, citizenship, gsis_id, pagibig_id, philhealth_id, sss_no, tin_no, agency_employee_no, spouses_name, fathers_name, mothers_name, elementary_school, secondary_school, college_school, graduate_studies };
 
        try {
            if (item) {
            await
            axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
        } else {
            await
            axios.post(`http://localhost:8000/api/items/`, data);
        }
        onSuccess();
            } catch (error) {
                console.error('There was an error submitting the form!', error);
                }
            };
            return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={first_name} onChange={(e) => setFName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middle_name} onChange={(e) => setMName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={last_name} onChange={(e) => setLName(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text"value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Birthday:</label>
                <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div>
                <label>Gender:</label>
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type="text" value={civil_status} onChange={(e) => setCStatus  (e.target.value)} />
            </div> 
            <div>
                <label>Height:</label>
                <input type="text" value={height} onChange={(e) => setHeight (e.target.value)} />
            </div>
            <div>
                <label>Weight:</label>
                <input type="text" value={weight} onChange={(e) => setWeight  (e.target.value)} />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type="text" value={blood_type} onChange={(e) => setBType  (e.target.value)} />
            </div>
            <div>
                <label>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship  (e.target.value)} />
            </div>
            <div>
                <label>GSIS ID No.:</label>
                <input type="text" value={gsis_id} onChange={(e) => setGId  (e.target.value)} />
            </div>
            <div>
                <label>Pag-Ibig ID No. :</label>
                <input type="text" value={pagibig_id} onChange={(e) => setPId  (e.target.value)} />
            </div>
            <div>
                <label>PhilHealth ID No. :</label>
                <input type="text" value={philhealth_id} onChange={(e) => setPhId  (e.target.value)} />
            </div>
            <div>
                <label>SSS No. :</label>
                <input type="text" value={sss_no} onChange={(e) => setSss (e.target.value)} />
            </div>
            <div>
                <label>TIN No. :</label>
                <input type="text" value={tin_no} onChange={(e) => setTin  (e.target.value)} />
            </div>
            <div>
                <label>Agency Employee No. </label>
                <input type="text" value={agency_employee_no} onChange={(e) => setAEmployee  (e.target.value)} />
            </div>
            <div>
                <label>Spouse's Name:</label>
                <input type="text" value={spouses_name} onChange={(e) => setSName  (e.target.value)} />
            </div>
            <div>
                <label>Father's Name:</label>
                <input type="text" value={fathers_name} onChange={(e) => setFathersN  (e.target.value)} />
            </div>
            <div>
                <label>Mother's Name:</label>
                <input type="text" value={mothers_name} onChange={(e) => setMothersN  (e.target.value)} />
            </div>
            <div>
                <label>Elementary School:</label>
                <input type="text"area value={elementary_school} onChange={(e) => setESchool (e.target.value)} />
            </div>
            <div>
                <label>Secondary School:</label>
                <input type="text" value={secondary_school} onChange={(e) => setSSchool  (e.target.value)} />
            </div>
            <div>
                <label>College School:</label>
                <input type="text" value={college_school} onChange={(e) => setCSchool  (e.target.value)} />
            </div>
            <div>
                <label>Graduate Studies:</label>
                <input type="text"area value={graduate_studies} onChange={(e) => setGStudies  (e.target.value)} />
            </div>

            <button type="submit">Submit</button>
 </form>
 );
};
export default ItemForm;