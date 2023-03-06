import HeaderComponent from '@/components/common/Header';
import Link from 'next/link';
import styles from '../styles/header.module.scss';
export default function Home() {
  return (
    <>
      <HeaderComponent
        rightElements={[
          <button
            onClick={() => {
              alert('복사');
            }}
            key="button"
            className={styles.box}
            style={{ marginRight: 8 }}
          >
            복사
          </button>,
          <Link href="/feedback" className={styles.box} key="link">
            링크
          </Link>,
        ]}
      />
    </>
  );
}
