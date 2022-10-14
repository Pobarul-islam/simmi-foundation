import React, { useEffect, useState } from 'react';

const Objectives = () => {
    const [objective, setObjective] = useState('');
    useEffect(() => {
        fetch("objective.json")
            .then(res => res.json())
        .then(data=>setObjective(data))
    },[])
    return (
        <div>
            <h2>Objective data: {objective.length}</h2>
        </div>
    );
};

export default Objectives;