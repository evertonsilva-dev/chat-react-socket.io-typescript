import React from 'react';
import Chat from 'src/components/chat';
import { HomeContainer } from './styles';

export default function Home() {
  // const themeToggle = useTheme();

  return (
    <HomeContainer>
      <Chat />
      {/* <Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button> */}
    </HomeContainer>
  );
}
