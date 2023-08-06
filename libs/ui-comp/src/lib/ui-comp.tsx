export interface UiCompProps {
  customText: string;
}

export function UiComp({ customText }: UiCompProps) {
  return (
    <div>
      <h1 className="text-4xl">Welcome to UiComp! - Changes made in ui comp</h1>
      <h2>Welcome to UiComp! - Changes made in ui comp</h2>
      <h2>This the custom text - {customText}</h2>
    </div>
  );
}

export default UiComp;
