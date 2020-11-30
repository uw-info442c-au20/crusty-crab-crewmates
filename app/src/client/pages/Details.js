import React from 'react';
import { useParams } from 'react-router';

export default function Details() {
    const { id } = useParams();

    return (
        <h1>wow this is recycle number {id}</h1>
    )
}

