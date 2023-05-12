const axios = require("axios").default;

class PhantomMovies {
    constructor(accessToken) {
		this.accessToken = accessToken;
		this.url = "https://api.phantommovies.com/3/";
	}

	/**
	 * @param {string} title Retrieves information on the provided movie title (if it is in our database).
	*/
	searchMovie(title) {
		const FirstCaps = title.split(" ")
            for (var i = 0; i < FirstCaps.length; i++) {
                FirstCaps[i] = FirstCaps[i].charAt(0).toUpperCase() + FirstCaps[i].slice(1);
            
            }

        const resultText = FirstCaps.join(" ")
		const params = `movies/movie?accessToken=${this.accessToken}&title=${resultText}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};

    getTrendingMovies() {
		const params = `movies/trending?accessToken=${this.accessToken}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};

    getopRatedMovies() {
		const params = `movies/top_rated?accessToken=${this.accessToken}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};

    getLatestMovies() {
		const params = `movies/latest?accessToken=${this.accessToken}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};

	getMovieGenre(genre) {
		const FirstCaps = genre.split(" ")
            for (var i = 0; i < FirstCaps.length; i++) {
                FirstCaps[i] = FirstCaps[i].charAt(0).toUpperCase() + FirstCaps[i].slice(1);
            
            }

        const resultText = FirstCaps.join(" ")
		const params = `movies/genre?accessToken=${this.accessToken}&genre=${resultText}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};

	searchTvSeries(title) {
		const FirstCaps = title.split(" ")
            for (var i = 0; i < FirstCaps.length; i++) {
                FirstCaps[i] = FirstCaps[i].charAt(0).toUpperCase() + FirstCaps[i].slice(1);
            
            }

        const resultText = FirstCaps.join(" ")
		const params = `tv/series?accessToken=${this.accessToken}&title=${resultText}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};
    
	/**
	 * @param {string} params URL route
	 * @param {*} body Content of body.
	 * @param {string} method HTTP Method. Default is 'GET'
	 */
	async makeRequest(params, body, method) {
		return await new Promise((resolve, reject) => {
            axios({
                method: method ? method : "GET",
                url: this.url + `${params}`,
                data: body,
                responseType: "json",
                proxy: false
            })
            .then((res) => {
                return resolve(res.data);
            })
            .catch((err) => {
                return reject(err);
            });	
		});
	}
}

module.exports = PhantomMovies;