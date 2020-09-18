import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import './Dashboard.scss';

export const Dashboard: React.FunctionComponent = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        async function getImages(): Promise<void> {
            try {
                const response = await fetch('api/images').then((res) => res.json());
                const items = response.images.map((imageUrl, index) => {
                    return (
                        <div className="imageBox" key={index}>
                            <LazyLoad height={150}>
                                <img src={`${imageUrl}?to=crop&r=200&type=webp`} />
                            </LazyLoad>
                        </div>
                    );
                });
                setImages(items);
            } catch (err) {
                setImages(err.message);
            }
        }
        getImages();
    }, []);

    return (
        <>
            <div className="Dashboard">{images}</div>
        </>
    );
};

export default Dashboard;
