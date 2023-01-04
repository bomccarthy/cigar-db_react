import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CigarCard from '../components/CigarCard';

export default function SingleCigar() {
    const [cigar, setCigar] = useState({})
    const { cigarId } = useParams()

    useEffect(()=>{
        const getCigarInfo = async () => {
            const res = await fetch(`https://sysrock.pythonanywhere.com/api/cigars/${cigarId}`);
            console.log(res);
            const data = await res.json();
            console.log(data);
            if (data.status === 'ok') {
                setCigar(data.data)
            }
        };
        getCigarInfo()
    }, [cigarId])

    console.log(cigarId)
    console.log(cigar)

    return (
        <div>
            <CigarCard card = {cigar}/>
        </div>

    )
}