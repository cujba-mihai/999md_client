// import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Clone - 999.md"
          description="Built with NextJS"
        />
      }
    >   
     <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
    recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
    voluptatibus distinctio recusandae autem esse explicabo molestias officia
    placeat, accusamus aut saepe.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
    recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
    voluptatibus distinctio recusandae autem esse explicabo molestias officia
    placeat, accusamus aut saepe.
  </p>
     
    </Main>
  );
};

export default Index;
