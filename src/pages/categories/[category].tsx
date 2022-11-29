import Breadcrumbs from '@/components/breadcrumbs/index';
import Categories from '@/components/categories/Categories';

const Index = () => {
  return (
    <>
      <Breadcrumbs />
      <Categories />
    </>
  );
};

Index.withLayout = true;

export default Index;
