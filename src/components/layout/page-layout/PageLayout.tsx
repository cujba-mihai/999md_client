import styles from './pageLayout.module.scss';

const PageLayout = ({ children }: React.PropsWithChildren): JSX.Element => {
  return <div className={styles['main-page-layout']}>{children}</div>;
};

export default PageLayout;
