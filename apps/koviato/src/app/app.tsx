// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UiComp } from '@react-monorepo-multiple-apps/ui-comp';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="koviato" />
      <UiComp customText="This is main app" />
    </div>
  );
}

export default App;
