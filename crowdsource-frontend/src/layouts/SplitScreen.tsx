// SplitScreen.tsx

import  { ReactNode } from 'react';

interface SplitScreenProps {
  left: ReactNode;
  right: ReactNode;
}

interface ThreeScreenProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}

export function SplitScreen({ left, right }: SplitScreenProps) {
  return (
    <main className="split-screen">
      <div className="left-pane-split">{left}</div>
      <div className="right-pane-split">{right}</div>
    </main>
  );
}



export function ThreeScreen({ left,center, right }: ThreeScreenProps) {
  return (
    <main className="split-screen">
      <div className="left-pane-three">{left}</div>
      <div className="center-pane-three">{center}</div>
      <div className="right-pane-three  ">{right}</div>
    </main>
  );
}

