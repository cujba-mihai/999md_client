import Breadcrumbs from '@/components/breadcrumbs/index';
import Product from '@/components/product/Product';

const Index = () => {
  return (
    <>
      <Breadcrumbs />
      <Product />
    </>
  );
};

Index.withLayout = true;

export default Index;
