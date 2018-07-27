/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [

];

const siteConfig = {
  title: 'Cohousing' /* title for your website */,
  tagline: 'Cohousing is currently being developed. Stay tuned.',
  url: 'https://www.cohousing.nu' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'cohousing.github.io',
  organizationName: 'cohousing',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    //{doc: 'doc1', label: 'Docs'},
    //{doc: 'doc4', label: 'API'},
    //{page: 'help', label: 'Help'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/cohousing.svg',
  footerIcon: 'img/cohousing.svg',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#FA6904',
    secondaryColor: '#FF0000',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Cohousing',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/coorporative.svg',
  twitterImage: 'img/coorporative.svg',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/cohousing/cohousing.github.io',
};

module.exports = siteConfig;
