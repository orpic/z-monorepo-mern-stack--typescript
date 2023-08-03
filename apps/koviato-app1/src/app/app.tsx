// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UiComp } from '@react-monorepo-multiple-apps/ui-comp';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="koviato-app1" />
      <UiComp customText="Koviato 2" />
    </div>
  );
}

export default App;
