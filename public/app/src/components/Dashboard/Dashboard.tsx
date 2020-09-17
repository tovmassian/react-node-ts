import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import './Dashboard.scss';

export const Dashboard: React.FunctionComponent = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        async function getImages(): Promise<void> {
            try {
                const response = await fetch('api/images').then((res) => res.json());
                const items = response.images.map((imageUrl, index) => {
                    return (
                        <div className="imageBox" key={index}>
                            <LazyLoad height={150}>
                                <img src={`${imageUrl}?r240x240`} />
                            </LazyLoad>
                        </div>
                    );
                });
                setData(items);
            } catch (err) {
                setData(err.message);
            }
        }
        getImages();
    });

    return (
        <>
            <div className="Dashboard">{data}</div>
        </>
    );
};

export default Dashboard;
