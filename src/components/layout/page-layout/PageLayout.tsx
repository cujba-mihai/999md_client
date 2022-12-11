import styles from './PageLayout.module.scss';

interface IProps {
  children: React.ReactNode;
  isDrawerMenuOpen: boolean;
}

const PageLayout: React.FC<IProps> = ({ children, isDrawerMenuOpen }: IProps): JSX.Element => {
  return (
      <div className={`${styles['main-page-layout']} ${styles[`drawer-${isDrawerMenuOpen ? 'open' : 'closed'}`]}`}>{children}</div>
  );
};

export default PageLayout;
