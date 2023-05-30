import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {Menu} from 'ui';
import {OnThisPage} from 'ui';
import styles from './docs.css';

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="docs">
      <Menu />
      <article>
        <Slot />
      </article>
      <OnThisPage />
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Documentation`,
  };
};
