import SVGImage from '@/components/Image';
import { cleanup, render, waitFor} from '@testing-library/react';


describe('Image component', () => {
  describe('Render method', () => {

    const alt = 'Random alt';
    const src = 'visa.svg';
    const className = 'TEST_CLASSNAME';
    const id = 'TEST_CLASSNAME';

    it('should contain alt for image', async () => {
      render(<SVGImage alt={alt} src={src} id={id} className={className} />);

      const img = document.getElementsByTagName('IMG').item(0);

      expect(img).toHaveAttribute('alt', alt);

      cleanup();
    });

    it('should contain src', async () => {
      render(<SVGImage alt={alt} src={src} id={id} className={className} priority={true}/>);

      const img = document.getElementById(id);

      img?.setAttribute('src', src);
      
      await waitFor(() => {
        return expect(img).toHaveAttribute('src', src);
      })

    });
  });
});
