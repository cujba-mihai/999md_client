import Breadcrumbs from '@/components/breadcrumbs/index';
import Product from '@/components/product/Product';

const Index = () => {
  return (
    <div style={{maxWidth: '100%'}}>
      <Breadcrumbs />
      <Product />
    </div>
  );
};

Index.withLayout = true;

export default Index;
