import { UiComp } from '@react-monorepo-multiple-apps/ui-comp';

export function App() {
  return (
    <div>
      <h1 className="text-2xl">Hello world</h1>
      <UiComp customText="This is main app" />
    </div>
  );
}

export default App;
