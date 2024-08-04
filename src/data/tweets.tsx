/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Tweet} from '@site/src/components/Tweet';

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};
const TWEETS: TweetItem[] = [
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'daferpi',
    name: 'Abel Fernandez',
    date: 'Oct 26, 2021',
    content: (
      <>
      Want to stay ahead of the curve? @BarkLarm keeps me informed about system issues before they become major headaches. #softwaredevelopment
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'daferpi',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'kmruiz',
    name: 'Kevin Mas Ruiz',
    date: 'Feb 21, 2024',
    content: (
      <>
        Did you know that @BarkLarm supports multiple data sources and integrations? Whether it's logs, metrics, or builds - I can connect them all in one place for comprehensive alarming. #integrations #observability
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'kmruiz',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'aperezm85',
    name: 'Alex Perez',
    date: 'May 17, 2024',
    content: (
      <>
        Ready to take your software development skills to the next level? @BarkLarm is an essential tool for any developer looking to streamline their workflow & build better systems. Try it out and see the difference! #softwaredevelopment #productivity
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'aperezm85',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'CrisMoreiras',
    name: 'Cris Moreiras',
    date: 'May 4, 2024',
    content: (
      <>
        Want to know the secret to reducing mean time to detect (MTTD) and mean time to resolve (MTTR)? It starts with having a clear view of your system's alarms! @BarkLarm helps you stay on top of issues before they become major problems. #observability #devops
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'CrisMoreiras',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'aleixmorgadas',
    name: 'Aleix Morgadas',
    date: 'May 28, 2024',
    content: (
      <>
        Just discovered @BarkLarm - the ultimate observability radiator! This powerful tool helps me build & monitor my software like a pro. #observability #softwaredevelopment
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'aleixmorgadas',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'miguelarian',
    name: 'Miguel Vela',
    date: 'May 17, 2024',
    content: (
      <>
        Ever feel like you're drowning in a sea of systems? @BarkLarm's got your back with customizable local alarming! Say goodbye to tedious notification integrations faster issue resolution. #devops
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'miguelarian',
  },
];

export default TWEETS;