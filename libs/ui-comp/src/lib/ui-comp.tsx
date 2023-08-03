import styles from './ui-comp.module.css';

export interface UiCompProps {
  customText: string;
}

export function UiComp({ customText }: UiCompProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiComp!</h1>
      <h2>This the custom text - {customText}</h2>
    </div>
  );
}

export default UiComp;
