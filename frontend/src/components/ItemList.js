import React, {useEffect, useState} from 'react';
import axios from 'axios';


const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        try{
            const response = await
            axios.get(`http://localhost:8000/api/items/`);
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error)
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map (item => (
                    <li key= {item.id}>
                        {item.first_name} : {item.middle_name} : {item.last_name} : {item.address} : {item.email} : {item.phone} : {item.birthday} : {item.gender} : {item.civil_status} : {item.height} : {item.weight} : {item.blood_type} : {item.citizenship} : {item.gsis_id} : {item.pagibig_id} : {item.philhealth_id} : {item.sss_no} : {item.tin_no} : {item.agency_employee_no} : {item.spouses_name} : {item.fathers_name} : {item.mothers_name} : {item.elementary_school} : {item.secondary_school} : {item.college_school} : {item.graduate_studies}
                        <button onClick={() => onEdit (item)}>Edit</button>
                        <button onClick={() => onDelete (item.id)} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

export default ItemList;