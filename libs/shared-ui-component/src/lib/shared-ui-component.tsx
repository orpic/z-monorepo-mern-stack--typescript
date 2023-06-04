import styles from './shared-ui-component.module.css';

/* eslint-disable-next-line */
export interface SharedUiComponentProps {}

export function SharedUiComponent(props: SharedUiComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedUiComponent!</h1>
    </div>
  );
}

export default SharedUiComponent;
