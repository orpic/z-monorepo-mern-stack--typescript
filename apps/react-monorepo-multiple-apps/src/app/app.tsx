// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { SharedUiComponent } from '@react-monorepo-multiple-apps/shared-ui-component';

// import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      {/* <NxWelcome title="react-monorepo-multiple-apps" /> */}
      <SharedUiComponent />
    </div>
  );
}

export default App;
