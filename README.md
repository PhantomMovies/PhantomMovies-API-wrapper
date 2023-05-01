<img src="https://phantommovies.com/images/PhantomMovies.png" align="right" style="width: 160px; max-width: 190px"/>

# PhantomMovies.com API Wrapper

> Phantom Movies provides a simple **HTTP API** to Integrate ours into your Business or Application

## Requirements

-   PhantomMovies.com API Key ([Get it here](https://phantommovies.com/user/profile/dashboard/edit))
-   npm >=8.3.0
-   node >=16.0.0

## Installation

```bash
npm install phantom-movies
```
## Usage

```javascript
const PhantomMovies = require("phantom-movies");
const API = new PhantomMovies.API("YOUR_API_KEY");

API.searchMovie("Avatar: The Way of Water").then((res) => {
	console.log(res); // Get information on the Movie with the Title Avatar: The Way of Water
});
```
