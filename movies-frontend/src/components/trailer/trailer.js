import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import './trailer.css';
import React from 'react';

const Trailer = () => {
    const { ytTrailerId } = useParams();
    const navigate = useNavigate();

    if (!ytTrailerId) {
        setTimeout(() => {
            navigate('/');
        }, 2000);
        return <div className="react-player-container">No trailer available, redirecting...</div>;
    }
    return (
        <div className="react-player-container">
            <ReactPlayer 
                controls={true} 
                playing={true} 
                url={`https://www.youtube.com/watch?v=${ytTrailerId}`}
                width='100%' 
                height='100%'
                onError={(e) => {
                    console.error("Player Error:", e);
                    navigate('/');
                }}
            />
        </div>
    );
};

export default Trailer;
