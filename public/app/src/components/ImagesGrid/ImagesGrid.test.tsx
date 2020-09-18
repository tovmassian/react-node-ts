import React from 'react';
import { render } from '@testing-library/react';
import ImagesGrid from './ImagesGrid';

test('renders learn react link', () => {
    const { getByText } = render(<ImagesGrid />);
    const linkElement = getByText(/status/i);
    expect(linkElement).toBeInTheDocument();
});
