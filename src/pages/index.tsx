import BuyOnMarket from '@/components/buy-on-market/BuyOnMarket';
import MainContent from '@/components/main-content/MainContent';
const Index = () => {
  return (
    <>
      <MainContent />
      <BuyOnMarket />
    </>
  );
};

Index.withLayout = true;

export default Index;
