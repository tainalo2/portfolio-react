import React, { useEffect, useContext, useState } from 'react';
import { ContactContext } from '../../Context';
import axios from 'axios';

function StepValidation() {
    const { formReferences } = useContext(ContactContext);
    const [is200, setIs200] = useState(false);
    var formToFetch = {};
    const api = axios.create({
        baseURL: window.location.origin
      });
    Object.keys(formReferences).forEach((key) => {
        if (formReferences[key].isValid) {
            formToFetch[key] = formReferences[key].value;
        }
    })
    useEffect(() => {
        api.post('/api/contact', formToFetch).then((response) => {
            console.log(response);
            if (response.status === 200) {
                setIs200(true);
            }
        })
    }, []);
    return (
        <div>
            <div
                style={
                    {
                        display: is200 ? 'none' : 'block'
                    }
                }
            >
                Validation en cours
            </div>
            <div
                style={
                    {
                        display: is200 ? 'block' : 'none'
                    }
                }
            >
                Validation reussie
            </div>
        </div>
    )
}

export default StepValidation
