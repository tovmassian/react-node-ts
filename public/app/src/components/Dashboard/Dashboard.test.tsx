import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

xtest('renders learn react link', () => {
    const { getByText } = render(<Dashboard />);
    const linkElement = getByText(/save to reload/i);
    expect(linkElement).toBeInTheDocument();
});
