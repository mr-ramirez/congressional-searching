## Your Assignment

Implement a simple list view which contains for each congressperson: a full name, social media links, party, their district/state, and the next year in which they are up for election. Additionally, you should start by implementing the following core functionality:

* An input for searching for Senators or Representatives by name.
* UI for filtering congresspeople by various characteristics (e.g. party, year of next election, gender, etc)
* Simple client-side pagination (optional: make the # of results per page configurable)
* A way to change the parameters that are being passed to the API -- i.e. chamber (`house` or `senate`) and congressional session (the default should be the current, `115`), and reload the list with the new data.
* Show some sort of loading UI while data is being fetched from the API.

You can also think about implementing some of the following additional functionality. It's OK if you don't get to everything, and you may implement other features then what is listed here if you think there is an interesting use of the data we haven't covered:

* Some of the data points are ranges or percentages, like `total_votes` or `votes_with_party_percentage`. Create a slider UI that allows the user to drag along a scale to hide/show congresspeople who satisfy the criteria.
* We are limited to only 5000 API calls a day, and we don't expect the API to change frequently. Can we cache some of the data on the device so that we don't need to make redundant calls to the API for data we have fetched previously?
* The API provides an office address for each congressperson. Create a detail view (how this is implemented is up to you) which uses the a mapping API like Google Maps to show a map with a pin for the office location when the user clicks on a specific list item.
* The API provides an `api_url` for each congressperson. Create a detail view (how this is implemented is up to you) which calls the detailed API for that congressperson and shows additional information on their roles/committee membership when the user clicks on a specific list item.
* Ideally, we'd be able to share a particular slice of the data with others. Implement some routing mechanism so that each search property is encoded in the URL, such that we can refresh the page and still see the same result.
* CRA comes packaged with the [`jest`](https://github.com/facebook/jest) testing library. It also sets up a sample test file in `App.test.js` and you can run the tests using `yarn test`. You can find additional info on testing in CRA [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests). Add new tests for the components you setup that verify that they work the way we'd like. We've setup some code to help stub out the ProPublica API request so that we don't actually hit the API when running tests, but you may need to update it so that your components receive the data they are expecting.
