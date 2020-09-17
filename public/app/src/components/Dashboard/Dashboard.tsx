import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
                            <LazyLoadImage
                                height={150}
                                src={`${imageUrl}?r240x240`} // use normal <img> attributes as props
                                width={150}
                            />
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
