import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

xtest('renders learn react link', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/React-Node-TS Surveys/i);
    expect(linkElement).toBeInTheDocument();
});
