import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const FetchGitHubRepo = () => {
    const [repo, setRepo]=useState([]);

    useEffect(() => {
       callToGitHubToFetchListOfRepo()
    }, [])

    const callToGitHubToFetchListOfRepo=async ()=>{
        const output=await axios.get('https://api.github.com/users/aryan21710/repos')
        if (output) {
            console.log('output',output.data)
            setRepo([...output.data])
        }
    }
    return (
        <div>
            <h1>GITHUB REPO APP</h1>
            <ul>
            {repo.map((r)=><li>{r.name}</li>)}
            </ul>
           
        </div>
    )
}
