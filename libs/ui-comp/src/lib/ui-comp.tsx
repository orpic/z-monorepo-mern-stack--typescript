import styles from './ui-comp.module.css';

/* eslint-disable-next-line */
export interface UiCompProps {}

export function UiComp(props: UiCompProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiComp!</h1>
    </div>
  );
}

export default UiComp;
