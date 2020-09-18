import React, { useEffect, useReducer } from 'react';
import LazyLoad from 'react-lazy-load';
import './ImagesGrid.scss';

export const ImagesGrid: React.FunctionComponent = () => {
    const REQUEST_STATUS = {
        SUCCESS: 'success',
        LOADING: 'loading',
        ERROR: 'error',
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'GET_IMAGES':
                return {
                    ...state,
                    status: REQUEST_STATUS.SUCCESS,
                    images: action.images,
                };
            case 'UPDATE_STATUS':
                return {
                    ...state,
                    status: REQUEST_STATUS.SUCCESS,
                };
        }
    };

    const [{ images, status }, dispatch] = useReducer(reducer, {
        images: [],
        status: REQUEST_STATUS.LOADING,
    });

    useEffect(() => {
        async function getImages(): Promise<void> {
            try {
                const response = await fetch('api/images').then((res) => res.json());
                dispatch({
                    images: response.images,
                    type: 'GET_IMAGES',
                });
            } catch (err) {
                dispatch({
                    status: REQUEST_STATUS.ERROR,
                    type: 'UPDATE_STATUS',
                });
            }
        }
        getImages();
    }, []);

    return (
        <>
            <div>status: {status}</div>
            <div className="ImagesGrid">
                {images.map((imageUrl, index) => (
                    <div className="imageBox" key={index}>
                        <LazyLoad height={150}>
                            <img src={`${imageUrl}?to=crop&r=200&type=webp`} />
                        </LazyLoad>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ImagesGrid;
