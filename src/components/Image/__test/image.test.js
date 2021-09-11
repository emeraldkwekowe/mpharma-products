import { render, screen } from '@testing-library/react';
import Image from "../image";


test('renders image with alt and inherits class from props', () => {
    const alt = "drag";
    const className = "mycustomclass";

    render(<Image className={className} src="drag.svg" alt={alt} />)
    const imgElement = screen.getByTestId("img");
    expect(imgElement).toHaveClass(className);
})

test('renders a paragraph asking for an alt before image is displayed', () => {
    render(<Image src="drag.svg"/>)

    const altPElement = screen.getByTestId("alt_enforcement_p");
    expect(altPElement).toBeInTheDocument();
})
