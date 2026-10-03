/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { RussianArticle } from './pages/RussianArticle';
import { EnglishArticle } from './pages/EnglishArticle';

export default function App() {
  const isRu = window.location.pathname === '/ru' || window.location.pathname.startsWith('/ru/');

  // Sync document title and html lang attribute dynamically
  useEffect(() => {
    if (isRu) {
      document.title = 'Саркисян Александр';
      document.documentElement.lang = 'ru';
    } else {
      document.title = 'Aleksandr Sarkisian';
      document.documentElement.lang = 'en';
    }
  }, [isRu]);

  if (isRu) {
    return <RussianArticle />;
  }

  return <EnglishArticle />;
}
