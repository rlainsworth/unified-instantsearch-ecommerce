/*
| -----------------------------------------------------------------------------
| Unified InstantSearch E-commerce by Algolia             http://alg.li/unified
| -----------------------------------------------------------------------------
|
| Welcome to the Unified InstantSearch E-commerce configuration file.
| This is where you can customize Unified InstantSearch E-commerce specifically
| for your project.
|
| Unless mandatory, if you don't use a setting, feel free to comment it out.
|
| View the full documentation at http://alg.li/unified/doc
|
*/

import React from 'preact/compat';
import { Hit } from './Hit';

/*
|-------------------------------------------------------------------------------
| Base configuration                           http://alg.li/unified/base-config
|-------------------------------------------------------------------------------
|
| Here is where you define your base configuration.
|
| This is the starting point of your project. These options are necessary to
| integrate Unified InstantSearch E-commerce in your website, and wire it with
| your Algolia index.
|
*/

export const inputContainer = '#search-button';
export const inputContent = 'Start discovering...';
//export const keyboardShortcuts = ['/'];
export const appId = 'KLPP6ZGPE7';
export const searchApiKey = '70d41d3f13d21f03cb1086447211b011';
export const hitComponent = Hit;
export const index = {
  indexName: 'unified_instantsearch_your_data',
  searchParameters: {
    analytics: true,
    clickAnalytics: true,
    hitsPerPage: 18,
    attributesToSnippet: ['description:25'],
  },
};

/*
|-------------------------------------------------------------------------------
| Insights, Analytics and Personalization         http://alg.li/unified/insights
|-------------------------------------------------------------------------------
|
| Here is where you define your Analytics and Personalization settings.
|
| We provide you with ways to measure how your search is doing, and make search
| results more relevant for individual users by personalizing their experience
| based on a unique profile built over time.
|
*/

export const googleAnalytics = false;
export const setUserToken = (setToken) => {
  setToken(/* The current user's `userToken` */);
};

/*
|-------------------------------------------------------------------------------
| Sort-by                                          http://alg.li/unified/sort-by
|-------------------------------------------------------------------------------
|
| Here is where you define your different sort-by options.
|
| Algolia sorts search results by relevance, using its ranking formula.
| Yet, you can provide several sorting options based on a specific attribute
| (e.g., descending price) using replica indices.
|
*/

export const sorts = [
  {
    label: 'Distance ascending',
    value: 'instant_search_distance_asc',
  },
  {
    label: 'Distance descending',
    value: 'instant_search_distance_desc',
  },
];

/*
|-------------------------------------------------------------------------------
| Refinements                                  http://alg.li/unified/refinements
|-------------------------------------------------------------------------------
|
| Here is where you define your different refinement options.
|
| We provide you with different types of refinement options to let users narrow
| down their searches based on a specific attribute.
|
| Some refinement types require you to follow a specific record schema.
|
*/

export const refinements = [
  {
    type: 'hierarchical',
    header: 'Interests',
    label: 'Interests',
    options: {
      attributes: [
        'hierarchicalCategories.lvl0',
        'hierarchicalCategories.lvl1',
      ],
      limit: 6,
      showMore: true,
    },
  },
  {
    type: 'list',
    header: 'Local helpers',
    label: 'Helpers',
    options: {
      attribute: 'servicesOffered',
      //searchable: true,
      showMore: true,
      limit: 6,
      showMoreLimit: 20,
      translations: {
        showMore: (expanded) =>
          expanded ? '- View fewer brands' : '+ View more brands',
      },
    },
  },
  {
    type: 'slider',
    header: 'Age',
    label: 'Age',
    options: {
      attribute: 'ageRange',
      transformValue: (value) => (
        <>
          <span className="uni-Hit-age"></span>
          {value}
        </>
      ),
    },
  },
];

//console.log('refinements',refinements);

/*
|-------------------------------------------------------------------------------
| Query Suggestions                      http://alg.li/unified/query-suggestions
|-------------------------------------------------------------------------------
|
| Here is where you define your Query Suggestions settings.
|
| Query Suggestions let you display a list of relevant queries that your users
| can select from as they type.
|
| This requires a Query Suggestion index that we populate over time with data
| from what your users are searching for. If your index isn't ready yet, feel
| free to comment out this section and re-enable it later.
|
*/

// export const suggestionsIndex = {
//   indexName: 'instant_search_demo_query_suggestions',
//   searchParameters: {
//     hitsPerPage: 6,
//   },
// };

/*
|-------------------------------------------------------------------------------
| Styles                                            http://alg.li/unified/styles
|-------------------------------------------------------------------------------
|
| Here is where you define the styling for your search experience.
|
| If you edit these values while in development mode, you must restart the
| server to see your changes.
|
*/

export const styles = {
  colors: {
    primary: '#d02139',
    secondary: '#21243d',
  },
  text: {
    fontFamily: `-apple-system, blinkmacsystemfont, 'Segoe UI', roboto, oxygen,
ubuntu, cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
  },
  baseZIndex: 100,
};
