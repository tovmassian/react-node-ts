import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing';

xtest('renders learn react link', () => {
    const { getByText } = render(<Landing />);
    const linkElement = getByText(/save to reload/i);
    expect(linkElement).toBeInTheDocument();
});
