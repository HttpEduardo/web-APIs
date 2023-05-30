import { component$, Slot } from '@builder.io/qwik';
import {Footer} from 'ui';
import {Header} from 'ui';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
