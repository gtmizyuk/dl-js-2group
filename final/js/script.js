// Date
function getCurrentDate() {
    let today = new Date();

    // Name days
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //let dayName = days[today.getDay()];

    // Current date
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1);
    let yyyy = today.getFullYear();

    // Current time
    let h = String(today.getHours());
    let m = String(today.getMinutes());
    let s = String(today.getSeconds());

    if (mm.length < 2){
        mm = '0' + mm;
    } 
    if (dd.length < 2){
        dd = '0' + dd;
    } 
    if (h.length < 2){
        h = '0' + h;
    } 
    if (m.length < 2){
        m = '0' + m;
    }
    if (s.length < 2){
        s = '0' + s;
    }

    let hms = [h, m, s].join(':');
    // ISO format: 2020-12-26T14:52:14
    let dateToday = yyyy + '-' + mm + '-' + dd;
    return [dateToday, "T", hms].join('')
}

/* Objects */
let moviesPro = {
    "The Mandalorian": {
        "titleMovie": "The Mandalorian",
        "posterMovie": "./images/bgs/mandalorian-bg.jpg", 
        "siteMovie": "https://www.starwars.com/series/the-mandalorian", 
        "countReviews": 0, //7
        "averageStars": 0, //4
        "statsMovie": {
            "Daniel Radcliffe": {
                "photoActor": "./images/reviews/Daniel Radcliffe.jpg",
                "ratingActor": 4,
                "commentActor": "Great movie. Good acting.",
                "dateCommentActor": "2020-12-13T18:32:27.000+02:00"
            },
            "Nicholas Cage": {
                "photoActor": "./images/reviews/Nicholas Cage.jpg",
                "ratingActor": 3,
                "commentActor": "The plot is cool, but the camera work is not very much.",
                "dateCommentActor": "2020-10-14T11:14:45.000+03:00"
            },
            "Kate Hudson": {
                "photoActor": "./images/reviews/Kate Hudson.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-12T14:32:53.000+02:00"
            },
            "Milla Jovovich": {
                "photoActor": "./images/reviews/Milla Jovovich.jpg",
                "ratingActor": 3,
                "commentActor": "The plot is cool, but the camera work is not very much.",
                "dateCommentActor": "2020-12-04T19:15:15.000+02:00"
            },
            "Leonardo DiCaprio": {
                "photoActor": "./images/reviews/Leonardo DiCaprio.jpg",
                "ratingActor": 3,
                "commentActor": "The plot is cool, but the camera work is not very much.",
                "dateCommentActor": "2020-12-15T17:59:15.000+02:00"
            },
            "Julia Roberts": {
                "photoActor": "./images/reviews/Julia Roberts.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-15T18:09:25.000+02:00"
            },
            "Adam Sandler": {
                "photoActor": "./images/reviews/Adam Sandler.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-08T12:22:11.000+02:00"
            }
        },
    },
    "Sherlock": {
        "titleMovie": "Sherlock",
        "posterMovie": "./images/bgs/sherlock-bg.jpg", 
        "siteMovie": "https://sherlockholmes.com/", 
        "countReviews": 0, //5
        "averageStars": 0, //3
        "statsMovie": {
            "Daniel Radcliffe": {
                "photoActor": "./images/reviews/Daniel Radcliffe.jpg",
                "ratingActor": 3,
                "commentActor": "The plot is cool, but the camera work is not very much.",
                "dateCommentActor": "2020-11-23T12:14:45.000+02:00"
            },
            "Nicholas Cage": {
                "photoActor": "./images/reviews/Nicholas Cage.jpg",
                "ratingActor": 4,
                "commentActor": "Great movie. Good acting.",
                "dateCommentActor": "2020-12-13T08:15:21.000+02:00"
            },
            "Hugh Jackman": {
                "photoActor": "./images/reviews/Hugh Jackman.jpg",
                "ratingActor": 2,
                "commentActor": "Weak plot.",
                "dateCommentActor": "2020-12-10T23:15:34.000+02:00"
            },
            "Milla Jovovich": {
                "photoActor": "./images/reviews/Milla Jovovich.jpg",
                "ratingActor": 3,
                "commentActor": "The plot is cool, but the camera work is not very much.",
                "dateCommentActor": "2020-11-23T15:44:23.000+02:00"
            },
            "Jude Law": {
                "photoActor": "./images/reviews/Jude Law.jpg",
                "ratingActor": 4,
                "commentActor": "Great movie. Good acting.",
                "dateCommentActor": "2020-12-02T14:34:03.000+02:00"
            }
        },
    },
    "Watchmen": {
        "titleMovie": "Watchmen",
        "posterMovie": "./images/bgs/watchmen-bg.jpg", 
        "siteMovie": "https://www.hbo.com/watchmen", 
        "countReviews": 0, //11
        "averageStars": 0, //4
        "statsMovie": {
            "Daniel Radcliffe": {
                "photoActor": "./images/reviews/Daniel Radcliffe.jpg",
                "ratingActor": 4,
                "commentActor": "Great movie. Good acting.",
                "dateCommentActor": "2020-11-23T12:14:45.000+02:00"
            },
            "Nicholas Cage": {
                "photoActor": "./images/reviews/Nicholas Cage.jpg",
                "ratingActor": 2,
                "commentActor": "Weak plot.",
                "dateCommentActor": "2020-12-11T07:12:53.000+02:00"
            },
            "Kate Hudson": {
                "photoActor": "./images/reviews/Kate Hudson.jpg",
                "ratingActor": 3,
                "commentActor": "The plot is cool, but the camera work is not very much.",
                "dateCommentActor": "2020-12-13T09:10:21.000+02:00"
            },
            "Hugh Jackman": {
                "photoActor": "./images/reviews/Hugh Jackman.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-10T22:29:11.000+02:00"
            },
            "Milla Jovovich": {
                "photoActor": "./images/reviews/Milla Jovovich.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-09T14:12:10.000+02:00"
            },
            "Keira Knightley": {
                "photoActor": "./images/reviews/Keira Knightley.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-15T18:04:30.000+02:00"
            },
            "Dwayne Johnson": {
                "photoActor": "./images/reviews/Dwayne Johnson.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-19T19:01:00.000+02:00"
            },
            "Julia Roberts": {
                "photoActor": "./images/reviews/Julia Roberts.jpg",
                "ratingActor": 4,
                "commentActor": "Great movie. Good acting.",
                "dateCommentActor": "2020-12-20T18:24:35.000+02:00"
            },
            "Adam Sandler": {
                "photoActor": "./images/reviews/Adam Sandler.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-17T19:12:26.000+02:00"
            },
            "Scarlett Johansson": {
                "photoActor": "./images/reviews/Scarlett Johansson.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-21T20:13:38.000+02:00"
            },
            "Matthew McConaughey": {
                "photoActor": "./images/reviews/Matthew McConaughey.jpg",
                "ratingActor": 5,
                "commentActor": "This is a wonderful movie!",
                "dateCommentActor": "2020-12-22T14:38:03.000+02:00"
            }       
        },
    },
    "The Hobbit - Battle five armies": {
        "titleMovie": "The Hobbit - Battle five armies",
        "posterMovie": "./images/bgs/hobbit-bg.jpg", 
        "siteMovie": "https://www.warnerbros.com/movies/hobbit-battle-five-armies", 
        "countReviews": 0, //4
        "averageStars": 0, //2
        "statsMovie": {
            "Daniel Radcliffe": {
                "photoActor": "./images/reviews/Daniel Radcliffe.jpg",
                "ratingActor": 2,
                "commentActor": "Weak plot.",
                "dateCommentActor": "2020-12-22T06:12:42.000+02:00"
            },
            "Kate Hudson": {
                "photoActor": "./images/reviews/Kate Hudson.jpg",
                "ratingActor": 4,
                "commentActor": "Great movie. Good acting.",
                "dateCommentActor": "2020-12-23T08:15:22.000+02:00"
            },
            "Hugh Jackman": {
                "photoActor": "./images/reviews/Hugh Jackman.jpg",
                "ratingActor": 2,
                "commentActor": "Weak plot.",
                "dateCommentActor": "2020-12-24T21:00:14.000+02:00"
            },
            "Brad Pitt": {
                "photoActor": "./images/reviews/Brad Pitt.jpg",
                "ratingActor": 1,
                "commentActor": "I did not like it at all :(.",
                "dateCommentActor": "2020-11-01T09:18:45.000+02:00"
            }
        },
    },
    "Interstellar": {
        "titleMovie": "Interstellar",
        "posterMovie": "./images/bgs/interstellar-bg.jpg", 
        "siteMovie": "https://www.warnerbros.co.uk/movies/interstellar", 
        "countReviews": 0, //9
        "averageStars": 0, //3
        "statsMovie": {
            "Daniel Radcliffe": {
                "photoActor": "./images/reviews/Daniel Radcliffe.jpg",
                "ratingActor": 1,
                "commentActor": "The actors play unbelievably. In general - bad.",
                "dateCommentActor": "2020-12-24T13:32:51.000+02:00"
            },
            "Nicholas Cage": {
                "photoActor": "./images/reviews/Nicholas Cage.jpg",
                "ratingActor": 3,
                "commentActor": "The plot is cool, but the camera work is not very much.",
                "dateCommentActor": "2020-12-25T10:14:21.000+02:00"
            },
            "Kate Hudson": {
                "photoActor": "./images/reviews/Kate Hudson.jpg",
                "ratingActor": 4,
                "commentActor": "Great movie. Good acting.",
                "dateCommentActor": "2020-12-24T17:15:33.000+02:00"
            },
            "Hugh Jackman": {
                "photoActor": "./images/reviews/Hugh Jackman.jpg",
                "ratingActor": 3,
                "commentActor": "The plot is cool, but the camera work is not very much.",
                "dateCommentActor": "2020-12-23T14:29:20.000+02:00"
            },
            "Milla Jovovich": {
                "photoActor": "./images/reviews/Milla Jovovich.jpg",
                "ratingActor": 4,
                "commentActor": "Great movie. Good acting.",
                "dateCommentActor": "2020-12-25T18:00:10.000+02:00"
            },
            "Dwayne Johnson": {
                "photoActor": "./images/reviews/Dwayne Johnson.jpg",
                "ratingActor": 3,
                "commentActor": "The plot is cool, but the camera work is not very much.",
                "dateCommentActor": "2020-12-22T17:52:16.000+02:00"
            },
            "Anne Hathaway": {
                "photoActor": "./images/reviews/Anne Hathaway.jpg",
                "ratingActor": 1,
                "commentActor": "I did not like it at all :(.",
                "dateCommentActor": "2020-12-12T16:23:11.000+02:00"
            },
            "Tom Cruise": {
                "photoActor": "./images/reviews/Tom Cruise.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-25T19:15:10.000+02:00"
            },
            "Scarlett Johansson": {
                "photoActor": "./images/reviews/Scarlett Johansson.jpg",
                "ratingActor": 5,
                "commentActor": "This was incredible!",
                "dateCommentActor": "2020-12-22T13:45:20.000+02:00"
            }
        },
    },
    getTitleMovie: function(obj, movie) {
        return obj[movie]["titleMovie"]
    },
    getPosterMovie: function(obj, movie) {
        return obj[movie]["posterMovie"]
    },
    getSiteMovie: function(obj, movie) {
        return obj[movie]["siteMovie"]
    },
    getNamesActorsCurrentMovie: function(obj, movie) {
        return obj[movie]["statsMovie"]
    },
    getNamesAllActors: function(obj, allMovies) {
        let allNamesActors = [];
        for (let i = 0; i < allMovies.length; i++) {
            let item = allMovies[i];
            let actorsEachMovie = obj[item]["statsMovie"];
            for (const actor in actorsEachMovie) {
                if(allNamesActors.indexOf(actor) === -1) {
                    allNamesActors.push(actor);
                }
            }
        } 
        return allNamesActors
    },
    getCurrentMovieActorPhoto: function(obj, movie, actor) {
        return obj[movie]["statsMovie"][actor]["photoActor"]
    },
    getCurrentMovieActorStars: function(obj, movie, actor) {
        return obj[movie]["statsMovie"][actor]["ratingActor"]
    },
    getCurrentMovieCommentActor: function(obj, movie, actor) {
        return obj[movie]["statsMovie"][actor]["commentActor"]
    },
    getCurrentMovieDateCommentActor: function(obj, movie, actor) {
        let dtCommentActor = obj[movie]["statsMovie"][actor]["dateCommentActor"];
        let dt = luxon.DateTime.fromISO(dtCommentActor).toFormat('cccc, yyyy-LL-dd tt');
        return dt    
    },
    getAverageStars: function(obj, movie) {
        return obj[movie]["averageStars"]
    },
    setCountReviews: function(obj, movie) {
        obj[movie]["countReviews"] = Object.keys(obj[movie]["statsMovie"]).length
    },
    getCountReviews: function(obj, movie) {
        return obj[movie]["countReviews"]
    },
    getCountTotalReviews: function(obj) {
        let total = 0;
        for (const movie in obj) {
            total += obj[movie]["countReviews"];
        }
        return total
    },
    getCountMovies: function(obj) {
        return Object.getOwnPropertyNames(obj).filter(property => typeof obj[property] !== 'function').length   
    },
    setAverageStars: function(obj, movie) {
        let avgStars = 0;
        let sumStars = 0;
        let cRev = 0;
        let allNamesActorMovieObj = this.getNamesActorsCurrentMovie(obj, movie);
        cRev = this.getCountReviews(obj, movie);
        for (const nameActor in allNamesActorMovieObj) {
            sumStars += allNamesActorMovieObj[nameActor]["ratingActor"];
        }
        avgStars = Math.round(sumStars / cRev);
        obj[movie]["averageStars"] = avgStars;
    },
    getProperties: function(obj, flag=1) { // flag: 0 (properties and methods), 1 (only properties) or 2 (only methods) 
        if (flag == 1) {
            return Object.getOwnPropertyNames(obj).filter(property => typeof obj[property] !== 'function')
        } else if (flag == 2) {
            return Object.getOwnPropertyNames(obj).filter(property => typeof obj[property] === 'function')
        } else {
            return Object.getOwnPropertyNames(obj)
        }
    },
    setEntries: function(obj) {  
        for (const movie in obj) {
            movie["countReviews"] = this.setCountReviews(obj, movie);
            movie["averageStars"] = this.setAverageStars(obj, movie);
        }
    },
    /*
    getEntriesOnlyProperties: function(obj) {  
        const allowed = this.getProperties(obj, 1);
        const filtered = Object.keys(obj)
            .filter(key => allowed.includes(key))
            .reduce((o, k) => {
                o[k] = obj[k];
                this.setAverageStars(o[k]);
                return o;
            }, {});
        return filtered
    },*/
    getDatesAllReviews: function(obj) {
        let arrayDates = [];
        let arrayDatesISO = [];
        let allMoviesNames = Object.getOwnPropertyNames(obj).filter(property => typeof obj[property] !== 'function');
        for (const numberMovie in allMoviesNames) {
            let mov = allMoviesNames[numberMovie];
            let stats = obj[mov]["statsMovie"];
            for (let actor in stats) {
                let dtCommentActor = stats[actor]["dateCommentActor"];
                let dt = luxon.DateTime.fromISO(dtCommentActor).toFormat('cccc, yyyy-LL-dd tt');
                arrayDates.push(dt);
                arrayDatesISO.push(dtCommentActor); 
            }
        }
        return [arrayDates, arrayDatesISO]
    },
    sortReviewsByDate: function(obj) {
        let arrayDates = this.getDatesAllReviews(obj);
        let arraySortedDatesISO = arrayDates[1];
        arraySortedDatesISO.sort(function(a, b) {
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        });
        let resultSortedDates = arraySortedDatesISO.reverse();
        //return arraySortedDatesISO[arraySortedDatesISO.length - 1]
        return resultSortedDates[0]
    },
    getLastReviewStatistics: function(obj) {
        let lastDateISO = this.sortReviewsByDate(obj);
        let arrayLastReviewStatistics = [];
        let lastReviewDateCommentActor = lastDateISO;
        let allMoviesNames = Object.getOwnPropertyNames(obj).filter(property => typeof obj[property] !== 'function');
        for (const numberMovie in allMoviesNames) {
            let mov = allMoviesNames[numberMovie];
            let stats = obj[mov]["statsMovie"];
            for (let actor in stats) {
                let dtCommentActor = stats[actor]["dateCommentActor"];
                if (lastReviewDateCommentActor == dtCommentActor) {
                    let lastReviewActorName = actor;
                    let lastReviewPhotoActor = stats[actor]["photoActor"];
                    let lastReviewTitleMovie = mov;
                    let lastReviewMovieOffSite = obj[mov]["siteMovie"];
                    let lastReviewMovieStars = stats[actor]["ratingActor"];
                    let lastReviewCommentActor = stats[actor]["commentActor"];

                    arrayLastReviewStatistics.push(
                        lastReviewActorName,
                        lastReviewPhotoActor,
                        lastReviewTitleMovie,
                        lastReviewMovieOffSite,
                        lastReviewMovieStars,
                        lastReviewCommentActor,
                        lastDateISO
                    );
                    return arrayLastReviewStatistics
                }               
            }
        }
    },
    getRemoveAllActorReviews: function(obj, actorName) {
        let allMoviesNames = Object.getOwnPropertyNames(obj).filter(property => typeof obj[property] !== 'function');
        for (const numberMovie in allMoviesNames) {
            let mov = allMoviesNames[numberMovie];
            let stats = obj[mov]["statsMovie"];
            if (stats.hasOwnProperty(actorName)) {
                delete stats[actorName]
            }
        }
        this.setEntries(obj);
        return obj
    },
    getActorsWhoAddReviewsCurrentBovie: function(obj, titleMovie) {
        let arrayActors = [];
        let allMoviesNames = Object.getOwnPropertyNames(obj).filter(property => typeof obj[property] !== 'function');
        for (const numberMovie in allMoviesNames) {
            let mov = allMoviesNames[numberMovie];
            if (mov == titleMovie) {
                let actors = obj[mov]["statsMovie"];
                for (const actor in actors) {
                    arrayActors.push(actor);
                }
            }
        }
        return arrayActors
    },
    getRemoveActorReviewForMovie: function(obj, titleMovie, actorName) {
        let stats = obj[titleMovie]["statsMovie"];
        if (stats.hasOwnProperty(actorName)) {
            delete stats[actorName]
        }
        this.setEntries(obj);
        return obj
    }
}

let allStarsСlubMembers = {
    "0": ["Daniel Radcliffe", "./images/reviews/Daniel Radcliffe.jpg"],
    "1": ["Nicholas Cage", "./images/reviews/Nicholas Cage.jpg"],
    "2": ["Kate Hudson", "./images/reviews/Kate Hudson.jpg"],
    "3": ["Milla Jovovich", "./images/reviews/Milla Jovovich.jpg"],
    "4": ["Leonardo DiCaprio", "./images/reviews/Leonardo DiCaprio.jpg"],
    "5": ["Julia Roberts", "./images/reviews/Julia Roberts.jpg"],
    "6": ["Adam Sandler", "./images/reviews/Adam Sandler.jpg"],
    "7": ["Hugh Jackman", "./images/reviews/Hugh Jackman.jpg"],
    "8": ["Jude Law", "./images/reviews/Jude Law.jpg"],
    "9": ["Keira Knightley", "./images/reviews/Keira Knightley.jpg"],
    "10": ["Dwayne Johnson", "./images/reviews/Dwayne Johnson.jpg"],
    "11": ["Scarlett Johansson", "./images/reviews/Scarlett Johansson.jpg"],
    "12": ["Matthew McConaughey", "./images/reviews/Matthew McConaughey.jpg"],
    "13": ["Brad Pitt", "./images/reviews/Brad Pitt.jpg"],
    "14": ["Anne Hathaway", "./images/reviews/Anne Hathaway.jpg"],
    "15": ["Tom Cruise", "./images/reviews/Tom Cruise.jpg"],
    getNumberClubMembers(obj) {
        let countMembersInClub = 0;
        for (member in obj) {
            if (obj.hasOwnProperty(member) && typeof obj[member] !== 'function') {
                countMembersInClub++;
            }
        }
        return countMembersInClub
    },
    getPhotoActorByIdCard(obj, idCard) {
        return obj[idCard][1]
    },
    getMemberClubByIdCard: function(obj, idCard) {
        return obj[idCard][0]
    },
    getClubIdCardByMember: function(obj, nameMember) {
        for (const idCard in obj) {
            if (obj[idCard][0] == nameMember) {
                return idCard
            }
        }      
    },
    isMemberInClub: function(obj, idCard) {
        if (idCard in obj) {
            return true
        }         
        return false
    }
};

/* Initial incoming */
let dataMovies;
let dataMembersClub; 

/* Settings */
/* Site directory on GitHub Pages */
let pathSiteDirectory = "/dl-js-2group/final/";

/* Site directory on local webserver*/
// let pathSiteDirectory = "/";

/* Site directory on hosting */
// let pathSiteDirectory = "/stars/";

function supportLocalStorage() {
    if (typeof(Storage) !== 'undefined') {
        return true
    } 
    return false    
}

function initLocalStorage() {
    if (supportLocalStorage()) {
        
        localStorage.setItem("moviesProSaveStorage", JSON.stringify(moviesPro));
        localStorage.setItem("allStarsСlubMembersSaveStorage", JSON.stringify(allStarsСlubMembers));   
        dataMovies = JSON.parse(localStorage["moviesProSaveStorage"]);
        dataMembersClub = JSON.parse(localStorage["allStarsСlubMembersSaveStorage"]); 
        moviesPro.setEntries(dataMovies);  
        localStorage.setItem("moviesProSaveStorage", JSON.stringify(dataMovies));
        
    } else {
        console.log("The browser does not support web local storage.");
    }
}

function isLocalStorageByKey(key) {
    if (localStorage.getItem(key)) {
        return true
    }    
    return false
}

function isSessionStorageByKey(key) {
    if (sessionStorage.getItem(key)) {
        return true
    }    
    return false
}

function isCorrectStorage() {
    if (isLocalStorageByKey("moviesProSaveStorage") && isLocalStorageByKey("allStarsСlubMembersSaveStorage")) {
        return true
    } 
    return false  
}

if (!isLocalStorageByKey("moviesProSaveStorage") && !isLocalStorageByKey("allStarsСlubMembersSaveStorage")) {
    console.log("INIT STORAGE");
    initLocalStorage();
} else {
    console.log("STORAGE ALREADY");
    dataMovies = JSON.parse(localStorage["moviesProSaveStorage"]);
    dataMembersClub = JSON.parse(localStorage["allStarsСlubMembersSaveStorage"]);  
}

console.log(dataMovies, "Initial (or update) movies data.");
console.log(dataMembersClub, "Initial (or update) club members data.");

// Visual functionality
function removeStarsMovieScreen() {
    let stars = document.querySelectorAll(".stars-average");
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("star-checked");    
    }
} 

function addAverageStarsMovieScreen(obj, movieValue) {
    let stars = document.querySelectorAll(".stars-average"); 
    for (let i = 0; i < moviesPro.getAverageStars(obj, movieValue); i++) {
        stars[i].classList.add("star-checked");    
    }
}

function createHtmlSelectOption(movieValue){
    return [
        `<option value="`+
        movieValue+
        `">`+
        movieValue+
        `</option>`
    ].join('\n');
}

function showSelectCaseMovie(id) {
    if (isCorrectStorage()) {
        let blockSelectMovie = document.querySelector("#"+id);
        if (blockSelectMovie) {
            blockSelectMovie.innerHTML = "<option disabled='disabled' selected='selected' value='Select a movie'>Select a movie</option><br>";
            allTitlesMovies = moviesPro.getProperties(dataMovies, 1);
            for (let i = 0; i < allTitlesMovies.length; i++) {
                selectOption = createHtmlSelectOption(allTitlesMovies[i]);
                blockSelectMovie.innerHTML += selectOption;
            }
            return true
        } else {
            return false
        }
    } else {
        console.log("There is no such storage.");
    }  
}

function createCardActorReview(movieValue) { 
    if (isCorrectStorage()) {
        let cards = new Array();
        for (const nameActor in moviesPro.getNamesActorsCurrentMovie(dataMovies, movieValue)) {
            let ratingActor = moviesPro.getCurrentMovieActorStars(dataMovies, movieValue, nameActor);
            let commentActor = moviesPro.getCurrentMovieCommentActor(dataMovies, movieValue, nameActor);
            let dateCommentActor = moviesPro.getCurrentMovieDateCommentActor(dataMovies, movieValue, nameActor);
            let photoActor = moviesPro.getCurrentMovieActorPhoto(dataMovies, movieValue, nameActor);
            cards.push([nameActor, photoActor, movieValue, ratingActor, commentActor, dateCommentActor]);
        }
        return cards;  
    } else {
        console.log("There is no such storage.");
    }  
      
}

function createHtmlCard(cardItem, actor, photoActor, comment, date){
    return [
        '<div class="col">',
        '<div class="card">',
            '<img src="',
            photoActor,
            '" class="card-img-top" alt="',
            actor,
            '">',
            '<div class="card-body">',
                '<h5 class="card-title">',
                    actor,
                '</h5>',
                '<small>',
                    '<div id="stars" class="col stars stars-review-wrapper">',
                        '<span><i class="fas fa-star stars-review'+
                        cardItem,
                        '"></i></span>',
                        '<span><i class="fas fa-star stars-review'+
                        cardItem,
                        '"></i></span>',
                        '<span><i class="fas fa-star stars-review'+
                        cardItem,
                        '"></i></span>',
                        '<span><i class="fas fa-star stars-review'+
                        cardItem,
                        '"></i></span>',
                        '<span><i class="fas fa-star stars-review'+
                        cardItem,
                        '"></i></span>',
                    '</div>',
                '</small>',
                '<p class="card-text">',
                comment,
                '</p>',
            '</div>',
            '<div class="card-footer">',
                '<small class="text-muted">',
                   date,
                '</small>',
            '</div>',
        '</div>',
    '</div>'].join('\n');
 }

function selectActorStarsForMovieScreen(cardItem, cStars) {
    let stars = document.querySelectorAll(".stars-review"+cardItem); 
    for (let i = 0; i < cStars; i++) {
        stars[i].classList.add("star-checked");  
    }
}

function sortCards(cards, order) {
        // order sort: 0 (a-z) or 1 (z-a)   
        if (order == 0) {
            cards.sort(function(a, b) {
                return (a[5].split(", ")[1] < b[5].split(", ")[1]) ? -1 : ((a[5].split(", ")[1] > b[5].split(", ")[1]) ? 1 : 0);
            });
        } else {
            cards.sort(function(a, b) {
                return (a[5].split(", ")[1] > b[5].split(", ")[1]) ? -1 : ((a[5].split(", ")[1] < b[5].split(", ")[1]) ? 1 : 0);
            });
        }        
       return cards
}

function showCardActorReview(movieValue) {   
    let currentCard = document.querySelector("#cards-show");
    currentCard.innerHTML = "";
    let cardsShow = createCardActorReview(movieValue);
    if (cardsShow.length > 0) {
        cardsShow = sortCards(cardsShow, 1); // order sort: 0 (a-z) or 1 (z-a)
        for (let i = 0; i < cardsShow.length; i++) {
            //console.log(i, cardsShow[i][0], cardsShow[i][1], cardsShow[i][2], cardsShow[i][3], cardsShow[i][4], cardsShow[i][5]); //card, actor, photo, movie, rating, comment, date 
            let htmlCard = createHtmlCard(i, cardsShow[i][0], cardsShow[i][1], cardsShow[i][4], cardsShow[i][5]); //card, actor, photo, comment, date 
            currentCard.innerHTML += htmlCard;
            currentCard.classList.remove("no-reviews");
            selectActorStarsForMovieScreen(i, cardsShow[i][3]);
            console.log("Review Card build: OK.");
        } 
    } else {
        currentCard.innerHTML = "No reviews".toUpperCase();
        currentCard.classList.add("no-reviews");
        console.log("No reviews.");
    }
}

function selectedMovieScreen() {
    if (isCorrectStorage()) {
        let movies = document.querySelector("#selectMovie");
        let movieValue = movies.options[movies.selectedIndex].value;
        if (movieValue) {
            document.querySelector('#title-movie').innerText = moviesPro.getTitleMovie(dataMovies, movieValue);
            document.querySelector('#bg').style.backgroundImage = `url(${moviesPro.getPosterMovie(dataMovies, movieValue)})`; 
            let linkAboutThisMovie = document.querySelector('#buttonAboutMovie'); 
            linkAboutThisMovie.href = moviesPro.getSiteMovie(dataMovies, movieValue);
            removeStarsMovieScreen();
            addAverageStarsMovieScreen(dataMovies, movieValue); 
            showCardActorReview(movieValue);
            console.log('Select movie: OK.');
        }  
    } else {
        console.log("There is no such storage.");
    }  
}

function startMovieScreen() {
    if (isCorrectStorage()) {
        let movieStart = document.querySelector("#selectMovie");
        if (movieStart) {
            let movieValueStart;
            let moviePosterStart;

            for (let i = 0; i < movieStart.options.length; i++) {
                if (dataMovies[movieStart.options[i].value]) {
                    movieValueStart = movieStart.options[i].value;    
                    break        
                }
            }
            document.querySelector('#title-movie').innerText = moviesPro.getTitleMovie(dataMovies, movieValueStart);
            document.querySelector('#buttonAboutMovie').href = moviesPro.getSiteMovie(dataMovies, movieValueStart);
            
            moviePosterStart = moviesPro.getPosterMovie(dataMovies, movieValueStart);
            document.querySelector('#bg').style.backgroundImage = `url(${moviePosterStart})`;
            
            addAverageStarsMovieScreen(dataMovies, movieValueStart);
            showCardActorReview(movieValueStart);
            console.log('Start: OK.');
            return true   
        }
        return false
    } else {
        console.log("There is no such storage.");
    }  
}

function removeMessagesInModalWindows() {
    removeInElementsByClassAnyClass("toggle-highlight-message", "modal-footer-message-ok");
    removeInElementsByClassAnyClass("toggle-highlight-message", "modal-footer-message-error");
}

/* Add review form */
function addCorrectModalReviewMovieActor() {  
    let b = document.querySelector("#bg");
    b.style.cssText +=';padding-right:0;overflow-y:auto;';
    let m = document.querySelector("#addReviewModal");
    m.style.cssText +=';padding-right:0;scroll-y:auto;';
    
    removeMessagesInModalWindows();

    console.log('Modal Add Review correct: OK.');
}

function checkEnterIdCard(idCardCurrent) {
    let idCardEnter = allStarsСlubMembers.isMemberInClub(dataMembersClub, idCardCurrent);
    return idCardEnter
}

function addReviewSelectedMovie() {
    let selectedReviewMovieCurrent = document.querySelector("#selectMovieAddReview");
    let selectedReviewMovieItem = selectedReviewMovieCurrent.options[selectedReviewMovieCurrent.selectedIndex].value;
    return selectedReviewMovieItem
}

function getRadiosStars() {
    let radios = document.querySelectorAll('[name="numberStars"]'); 
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
                return radios[i].value;
            }
    }
    return false
}

function updateReviewActorInMoviesPro(idCard, movie, actor, starNew, commentNew, dateCommentNew) {
    if (isCorrectStorage()) {  
        if (!(actor in moviesPro.getNamesActorsCurrentMovie(dataMovies, movie))) {
            dataMovies[movie]["countReviews"] += 1;
            dataMovies[movie]["statsMovie"][actor] = {
                "photoActor": allStarsСlubMembers.getPhotoActorByIdCard(dataMembersClub, idCard),
                "ratingActor": "",
                "commentActor": "",
                "dateCommentActor": ""
            }
        } 

        dataMovies[movie]["statsMovie"][actor]["ratingActor"] = starNew;
        dataMovies[movie]["statsMovie"][actor]["commentActor"] = commentNew;
        dataMovies[movie]["statsMovie"][actor]["dateCommentActor"] = dateCommentNew;
        
        addAverageStarsMovieScreen(dataMovies, movie);
        moviesPro.setEntries(dataMovies);

        showSelectCaseMovie("selectMovie");
        
        localStorage.setItem("moviesProSaveStorage", JSON.stringify(dataMovies));

        console.log("Update card.");
    } else {
        console.log("There is no such storage.");
    }  
}

function checkEnterAllFields() {
    let idCardCurrent = document.querySelector("#idCardClub").value;    
    idCardCurrent = idCardCurrent.toString()
    let idCardCheck = checkEnterIdCard(idCardCurrent);
   
    if (idCardCheck) {
        let selectedMovieCheck = addReviewSelectedMovie(); 
        let fieldReviewCheck = document.querySelector("#fieldReview").value; 
        let numberRadioStarsCheck = parseInt(getRadiosStars());  

        let datePostReviewActor = getCurrentDate();
        
        if (selectedMovieCheck != "Select a movie" && fieldReviewCheck && numberRadioStarsCheck) {
            let addDataToMoviesPro = [];
            let nameMemberClub = allStarsСlubMembers.getMemberClubByIdCard(dataMembersClub, idCardCurrent);
            addDataToMoviesPro.push(idCardCurrent, selectedMovieCheck, nameMemberClub, numberRadioStarsCheck, fieldReviewCheck, datePostReviewActor)
            updateReviewActorInMoviesPro(...addDataToMoviesPro);
            return 1
        }
        return 2
    }
    return 0
}

// Add/remove classes and texts
function toggleHighlightMessage(indexClass, addClassName, removeClassName, message) {
    let el = document.querySelectorAll(".toggle-highlight-message")[indexClass];
    el.classList.add(addClassName);
    el.classList.remove(removeClassName);
    el.innerText = message;
}

// Remove in elements by class any class
function removeInElementsByClassAnyClass(toСhooseElementClass, nameClassForRemove) {
    let allElements = Array.from(document.querySelectorAll(`.${toСhooseElementClass}`));
    allElements.forEach(node => {
        node.classList.remove(nameClassForRemove);
    });
}

// Clear texts in messages from modal
function clearTextMessagesInModalWindows(indexClass) {
    let el = document.querySelectorAll(".toggle-highlight-message")[indexClass];
    el.innerText = "";
}

// Random number: includes min and max
function randomData(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function addReviewMovieActor() {
    if (checkEnterAllFields() == 1) {
        document.querySelector('#form_add_review').reset();
        console.log('Add review: OK.');  
        toggleHighlightMessage(0, "modal-footer-message-ok", "modal-footer-message-error", "Success! Click Close or leave another review."); 
    } else if (checkEnterAllFields() == 2) {
        console.log('Add review: FAIL, some fields are not filled.');   
        toggleHighlightMessage(0, "modal-footer-message-error", "modal-footer-message-ok", "Some fields are not filled."); 
    } else if (checkEnterAllFields() == 0) {
        console.log('Add review: FAIL, incorrect "All stars" club card number.');   
        toggleHighlightMessage(0, "modal-footer-message-error", "modal-footer-message-ok", "Incorrect club card number."); 
    }
}

function addReviewButtonSettings() {
    addCorrectModalReviewMovieActor();
    showSelectCaseMovie("selectMovieAddReview");
}

/* Get id card form */
function addCorrectModalGetIdCard() {  
    let b = document.querySelector("#bg");
    b.style.cssText +=';padding-right:0;overflow-y:auto;';
    let m = document.querySelector("#getIdCardModal");
    m.style.cssText +=';padding-right:0;scroll-y:auto;';

    removeMessagesInModalWindows();

    console.log('Modal Get IDcard correct: OK.');
}

function getFieldsByGetIdCard() {
    let formGetIdCard = document.forms["form_get_id_card"];
    let nameActorForGetIdCard = formGetIdCard.name.value;
    let linkToPhotoActorForGetIdCard = formGetIdCard.linkToPhoto.value;
    let linkToPhotoChecked = formGetIdCard.linkToPhotoChecked.checked;
    if (nameActorForGetIdCard) {
        if (!linkToPhotoChecked) {
            return [nameActorForGetIdCard, linkToPhotoActorForGetIdCard]
        } else {  
            console.log("No photo.");
            return [nameActorForGetIdCard]
        }   
    } 
    return []
}

function getIdCardButtonSettings() {
    addCorrectModalGetIdCard();    
}

function isImageLoad(imageUrl, callback) {
    let image = new Image();
    image.src = imageUrl;
    image.onload = function() {
        if (image.width) {
            callback(true)
        }
    };
    image.onerror = function() {
        callback(false)
    };
}

function getIdCardActor() {
    let dataForGetIdCard = getFieldsByGetIdCard();
  
    let dataLength = dataForGetIdCard.length;
    if (dataLength == 2 || dataLength == 1) {
        document.querySelector('#form_get_id_card').reset();
        
        let idsArray = Object.keys(dataMembersClub);
        
        let numberClubMembersNew = "";
        let isid = false;
        for (let i = 0; i < idsArray.length; i++) {
            let id = i.toString();
            if (!idsArray.includes(id)) {
                numberClubMembersNew = id;
                isid = true;
                break
            }   
        }

        if (!isid) {
            numberClubMembersNew = idsArray.length.toString();
        }
        
        if (dataLength == 2) {
            isImageLoad(dataForGetIdCard[1], function(result){
                if (result) {
                    dataMembersClub[numberClubMembersNew] = [
                        dataForGetIdCard[0],
                        dataForGetIdCard[1]
                    ];

                    localStorage.setItem("allStarsСlubMembersSaveStorage", JSON.stringify(dataMembersClub));

                    console.log("ID card issued: OK.");
                    toggleHighlightMessage(1, "modal-footer-message-ok", "modal-footer-message-error", `Success! Your card number: ${numberClubMembersNew}. Click Close.`);
                } else {
                    toggleHighlightMessage(1, "modal-footer-message-error", "modal-footer-message-ok", "Error while loading: incorrect link to photo!"); 
                    console.log(`Incorrect link to photo. Error while loading ${dataForGetIdCard[1]}.`);
                }
            });
        } else {
            dataMembersClub[numberClubMembersNew] = [
                dataForGetIdCard[0],
                "./images/reviews/noimage.png"
            ];

            localStorage.setItem("allStarsСlubMembersSaveStorage", JSON.stringify(dataMembersClub));

            console.log("ID card issued: OK.");
            toggleHighlightMessage(1, "modal-footer-message-ok", "modal-footer-message-error", `Success! Your card number: ${numberClubMembersNew}. Click Close.`);
        }
    } else {
        toggleHighlightMessage(1, "modal-footer-message-error", "modal-footer-message-ok", "Some fields are incorrect."); 
        console.log('Some fields are incorrect.');
    }
}

function btnCloseForClearFormAddReview() {
    document.querySelector('#form_add_review').reset();
    clearTextMessagesInModalWindows(0);
    console.log("Form Add Review cleaned.");
}

function btnCloseForClearFormGetIdCard() {
    document.querySelector('#form_get_id_card').reset();
    clearTextMessagesInModalWindows(1);
    console.log("Form Get idCard cleaned.");
}

function btnCloseForClearFormSignIn() {
    document.querySelector('#form_sign_in').reset();
    clearTextMessagesInModalWindows(2);
    console.log("Form Sign In cleaned.");
}

function clearFormByCloseButtons(){
    document.querySelector('#form_add_review').reset();
    document.querySelector('#form_get_id_card').reset();
    document.querySelector('#form_sign_in').reset();
    console.log("All forms are cleaned.");
}

let closeButtonsArray = document.querySelectorAll(".close-button-in-form");
for (let i = 0; i < closeButtonsArray.length; i++) {
    closeButtonsArray[i].addEventListener("click", clearFormByCloseButtons);
}
/*
closeButtonsArray.forEach(function(element) {
    element.addEventListener("click", clearFormByCloseButtons);
});  
*/

let selectCurentMovie = document.querySelector("#selectMovie");
if (selectCurentMovie) {
    selectCurentMovie.addEventListener("change", selectedMovieScreen);  
}

let addReviewButtonMenu = document.querySelector("#add-review");
if (addReviewButtonMenu) {
    addReviewButtonMenu.addEventListener("click", addReviewButtonSettings); 
}

let selectedReviewMovie = document.querySelector("#selectMovieAddReview"); 
if (selectedReviewMovie) {
    selectedReviewMovie.addEventListener("change", addReviewSelectedMovie); 
}

let addReviewMovie = document.querySelector("#buttonAddReview");
if (addReviewMovie) {
    addReviewMovie.addEventListener("click", addReviewMovieActor); 
}

let getIdCardButtonMenu = document.querySelector("#get-id-card");
if (getIdCardButtonMenu) {
    getIdCardButtonMenu.addEventListener("click", getIdCardButtonSettings); 
}

let getIdCard = document.querySelector("#buttonGetIdCard");
if (getIdCard) {
    getIdCard.addEventListener("click", getIdCardActor); 
}

let btnCloseAddReview = document.querySelector("#buttonCloseAddReview"); 
if (btnCloseAddReview) {
    btnCloseAddReview.addEventListener("click", btnCloseForClearFormAddReview); 
}

let btnCloseGetIdCard = document.querySelector("#buttonCloseGetIdCard"); 
if (btnCloseGetIdCard) {
    btnCloseGetIdCard.addEventListener("click", btnCloseForClearFormGetIdCard); 
}

/* Admin access */
let origin = window.location.origin;

let btnCloseSignIn = document.querySelector("#buttonCloseLogIn"); 
if (btnCloseSignIn) {
    btnCloseSignIn.addEventListener("click", btnCloseForClearFormSignIn); 
}

function addCorrectModalSignIn() {  
    let b = document.querySelector("#bg");
    b.style.cssText +=';padding-right:0;overflow-y:auto;';
    let m = document.querySelector("#getIdCardModal");
    m.style.cssText +=';padding-right:0;scroll-y:auto;';
    removeMessagesInModalWindows();
    console.log('Modal Sign In correct: OK.');
}

function signInButtonSettings() {
    addCorrectModalSignIn();    
}

function btnAdminLogOut() {
    let sessionMoviewsPro = JSON.parse(sessionStorage["moviesProSaveSession"]);
    let sessionClubMembers = JSON.parse(sessionStorage["allStarsСlubMembersSaveSession"]);
    localStorage.setItem("moviesProSaveStorage", JSON.stringify(sessionMoviewsPro));
    localStorage.setItem("allStarsСlubMembersSaveStorage", JSON.stringify(sessionClubMembers));
    window.location = origin + pathSiteDirectory;
    console.log("The session ended.");  
    console.log("Log out.");    
    showSelectCaseMovie("selectMovie");
}

function logIn() {
    let formPassLogIn = document.forms["form_sign_in"];
    let passLogIn = formPassLogIn["password"].value;
    if (passLogIn == "111111") {
        console.log('Password correct: OK.');
        return true
    } else if (passLogIn == "") {
        toggleHighlightMessage(2, "modal-footer-message-error", "modal-footer-message-ok", "No password entered!"); 
        console.log('No password entered!');
        return false   
    } else {
        toggleHighlightMessage(2, "modal-footer-message-error", "modal-footer-message-ok", "Password is incorrect!"); 
        console.log('Password is incorrect!');
        return false   
    }
}

function btnAdminSignIn() {
    let loginCheck = logIn();
    if (loginCheck) {
        console.log("Session start...");
        sessionStorage.setItem('moviesProSaveSession', JSON.stringify(dataMovies));
        sessionStorage.setItem('allStarsСlubMembersSaveSession', JSON.stringify(dataMembersClub));
        window.location = origin + pathSiteDirectory + "admin/";
        console.log("Logged in as administrator.");
    }  
}

let signInButton = document.querySelector("#sign-in");
if (signInButton) {
    signInButton.addEventListener("click", signInButtonSettings); 
}

let logInButton = document.querySelector("#buttonLogIn");
if (logInButton) {
    logInButton.addEventListener("click", btnAdminSignIn); 
}

let logOutButton = document.querySelector("#log-out");
if (logOutButton) {
    logOutButton.addEventListener("click", btnAdminLogOut); 
}

function staticticsMain(dMovies, dMembers) {
    let countMovies = moviesPro.getCountMovies(dMovies);
    document.querySelector(".count-movies").innerText = countMovies;
    
    let countMembersClub = allStarsСlubMembers.getNumberClubMembers(dMembers);
    document.querySelector(".count-members-club").innerText = countMembersClub;

    let totalReviews = moviesPro.getCountTotalReviews(dMovies);
    document.querySelector(".total-reviews").innerText = totalReviews;

    console.log("Main statictics: OK.");
}

function getArrayReviewByLastDate(dMovies) {
    let arrayLastReviewStat = moviesPro.getLastReviewStatistics(dMovies);
    return arrayLastReviewStat
}

function staticticsLastReview(dMovies) {
    let arrayLastReview = getArrayReviewByLastDate(dMovies);
    if (arrayLastReview != undefined) {
        let lastReviewNameActor = arrayLastReview[0];
        document.querySelector(".last-review-name-actor").innerText = lastReviewNameActor;
        
        let lastReviewPhotoActor = arrayLastReview[1];

        if (lastReviewPhotoActor.startsWith('http')) {
            document.querySelector(".last-review-photo-actor img").src = lastReviewPhotoActor;    
        } else if (lastReviewPhotoActor.startsWith('.')) {
            document.querySelector(".last-review-photo-actor img").src = "." + lastReviewPhotoActor;
        } else {
            document.querySelector(".last-review-photo-actor").innerText = "Unable to show photo.";
        }
        
        document.querySelector(".last-review-photo-actor img").title = lastReviewNameActor;
        document.querySelector(".last-review-photo-actor img").alt = lastReviewNameActor;
    
        let lastReviewTitleMovie = arrayLastReview[2];
        document.querySelector(".last-review-title-movie").innerText = lastReviewTitleMovie;
    
        let lastReviewMovieOffSite = arrayLastReview[3];
        document.querySelector(".last-review-movie-official-site").innerHTML = `<a href="${lastReviewMovieOffSite}" target="_blank">Click to go</a>`;

        let lastReviewCountStars = arrayLastReview[4];
        document.querySelector(".last-review-count-stars").innerText = lastReviewCountStars;
    
        let lastReviewComment = arrayLastReview[5];
        document.querySelector(".last-review-comment").innerText = lastReviewComment;
    
        let lastReviewCommentDate = arrayLastReview[6];
        lastReviewCommentDateFromISO = luxon.DateTime.fromISO(lastReviewCommentDate).toFormat('cccc, yyyy-LL-dd tt');
        document.querySelector(".last-review-comment-date").innerText = lastReviewCommentDateFromISO;
    
        console.log("Last review statictics: OK.");
    } else {
        document.querySelector(".table-last-review").innerText = "The last review is missing.";
        console.log("Last review statictics: FAIL, the last review is missing.");
    }
}

/* Add new movie */
function imageFileToBase64(file){
    let fileReader = new FileReader();
    fileReader.addEventListener('load', (event) => {
        srcData = event.target.result;
        createImage(file, srcData)
    });
    if (file) {
        fileReader.readAsDataURL(file);
    }  
}

function createImage(file, srcData){
    let newImage = document.createElement('img');
    newImage.src = srcData;
    newImage.setAttribute("title", file.name.split(".")[0]);
    newImage.setAttribute("alt", file.name);
    newImage.width = "300";
    let displayImageFile = document.querySelector("#posterMovieHere");
    displayImageFile.innerHTML = newImage.outerHTML;
}

function displayImageFromLink() {
    let link = document.querySelector("#posterMovieNew").value;
    if (link) {
        let isValidateLinkToImage = imageCreateFromLink(link);
 
        if (isValidateLinkToImage) {
            toggleHighlightMessage(0, "modal-footer-message-ok", "modal-footer-message-error", "The link to the image is correct."); 
            console.log("The linked image has been displayed.");
            let displayImage = document.querySelector("#posterMovieHere");
            displayImage.addEventListener("click", () => {
                displayImage.innerHTML = "";
                console.log("The image at the link has been deleted.");
            })
        } else {
            toggleHighlightMessage(0, "modal-footer-message-error", "modal-footer-message-ok", "Link is invalid!"); 
            console.log("Link is invalid!");
        }
    } 
}

function imageCreateFromLink(imageUrl) {
    if (imageUrl) {
        let image = new Image();
        image.src = imageUrl;
        image.onload = function() {
            if (this.width) {                
                let newImage = document.createElement('img');
                newImage.src = image.src;
                newImage.setAttribute("title", imageUrl);
                newImage.setAttribute("alt", imageUrl);
                newImage.width = "300";
                let displayLinkImage = document.querySelector("#posterMovieHere");
                displayLinkImage.innerHTML = newImage.outerHTML;
            } 
        }
        return true
    }
    return false
}

let buttonValidateImageFromLink = document.querySelector("#buttonDisplayImageFromLink");
if (buttonValidateImageFromLink) {
    buttonValidateImageFromLink.addEventListener("click", displayImageFromLink); 
}

function isCorrectAddNewMovie() {
    let formAddNewMovie = document.forms["form_add_movie"];
    let titleMovieNew = formAddNewMovie.titleMovieNew.value.trim();
    let linkToPosterMovieNew = formAddNewMovie.posterMovieNew.value.trim();
    let linkOffSiteMovieNew = formAddNewMovie.siteMovieNew.value.trim();
    let displayImage = document.querySelector("#posterMovieHere").firstChild;
    let srcBase64MovieNew = "";
    if (displayImage) {
        srcBase64MovieNew = displayImage.src;
    } 
  
    if (titleMovieNew && srcBase64MovieNew && linkOffSiteMovieNew) {
        return [titleMovieNew, srcBase64MovieNew, linkOffSiteMovieNew]
    } else if (titleMovieNew && linkToPosterMovieNew && linkOffSiteMovieNew) {
        return [titleMovieNew, linkToPosterMovieNew, linkOffSiteMovieNew]
    } else {
        toggleHighlightMessage(0, "modal-footer-message-error", "modal-footer-message-ok", "Some fields are not filled."); 
        console.log("Some fields are not filled.");
    }
    return []
}

function addNewMovie() {
    let arrayAddNewMovie = isCorrectAddNewMovie();
    if (arrayAddNewMovie.length == 3) {
        document.querySelector('#form_add_movie').reset();
        document.querySelector("#posterMovieHere").innerHTML = "";
        let newMovie = {};
        let newMovieElements = {};
        newMovieElements = {
                "titleMovie": arrayAddNewMovie[0],
                "posterMovie": arrayAddNewMovie[1], 
                "siteMovie": arrayAddNewMovie[2], 
                "countReviews": 0,
                "averageStars": 0,
                "statsMovie": {}
        };
        newMovie[arrayAddNewMovie[0]] = newMovieElements;
        
        let dmSession = JSON.parse(sessionStorage["moviesProSaveSession"]);
        if (!dmSession[arrayAddNewMovie[0]]) {
            /*dmSession = {...dmSession,
                ...newMovie
            }*/
            dmSession = Object.assign({}, dmSession, newMovie);
            sessionStorage.setItem('moviesProSaveSession', JSON.stringify(dmSession));

            toggleHighlightMessage(0, "modal-footer-message-ok", "modal-footer-message-error", "Successfully! Refresh the page."); 
            console.log("Add a new movie: SUCCESSFULLY!");

        } else if (dmSession[arrayAddNewMovie[0]]){
            toggleHighlightMessage(0, "modal-footer-message-error", "modal-footer-message-ok", "Movie has already been added."); 
            console.log("Assign: FAIL, movie with this name is already present in the database.");
        }
        else {
            console.log("Assign: FAIL.");
        }
    } else {
        console.log("Add a new movie: FAIL.");
    }
}

function uploadImage() {
    let posterMovieNewFile = document.querySelector("#posterMovieNewUploadFile");
    posterMovieNewFile.addEventListener("change", (event) => {
        let filesToLoad = event.target.files;
        if (filesToLoad.length == 1) {
            f = filesToLoad[0];
            imageFileToBase64(f);
        }
        let displayImage = document.querySelector("#posterMovieHere");
        let displayInputFile = document.querySelector("#posterMovieNewUploadFile");
        if (displayImage && displayInputFile) {
                displayImage.addEventListener("click", () => {
                    displayImage.innerHTML = "";
                    displayInputFile.value = "";
                    console.log("The uploaded image has been deleted.");
                }
            )
        }       
    })
}

/* Remove movie */
function showMoviesForRemoveMovie(dmovies) {
    let blockSelectRemoveMovie = document.querySelector("#titleMovieForRemove");
    if (blockSelectRemoveMovie) {

        let allTitlesMoviesForRemove = moviesPro.getProperties(dmovies, 1);
        for (let i = 0; i < allTitlesMoviesForRemove.length; i++) {
            let selectOption = createHtmlSelectOption(allTitlesMoviesForRemove[i]);
            blockSelectRemoveMovie.innerHTML += selectOption;
        }
        console.log("List of movies to delete movie is built.");
    } else {
        console.log("Movie list to delete movie has not been created.");
    }
}

function removeMovie() {
    let blockSelectRemoveMovie = document.querySelector("#titleMovieForRemove");
    let movieValueRemove = blockSelectRemoveMovie.options[blockSelectRemoveMovie.selectedIndex].value;
    let dmSession = JSON.parse(sessionStorage["moviesProSaveSession"]);
    let allTitlesMovies = moviesPro.getProperties(dmSession, 1);
    if (allTitlesMovies.length > 1) {
        if (dmSession.hasOwnProperty(movieValueRemove)) {
            delete dmSession[movieValueRemove];

            sessionStorage.setItem("moviesProSaveSession", JSON.stringify(dmSession));

            document.querySelector("#form_remove_movie").reset();
            toggleHighlightMessage(2, "modal-footer-message-ok", "modal-footer-message-error", "The movie is deleted. Refresh the page."); 
            console.log("The movie is deleted. Refresh the page."); 
        } else {
            toggleHighlightMessage(2, "modal-footer-message-error", "modal-footer-message-ok", "The movie is not in the database."); 
            console.log("The movie is not in the database."); 
        }
    } else {
        toggleHighlightMessage(2, "modal-footer-message-error", "modal-footer-message-ok", "Warning! One movie left, cannot be deleted."); 
        console.log("Warning! One movie left, cannot be deleted."); 
    }
}

/* Remove club member */
function showIdCards(dmembers) {
    let blockSelectRemoveIdCard = document.querySelector("#idCardsMembersClubForRemove");
    if (blockSelectRemoveIdCard) {
        for (const member in dmembers) {
            let selectOption = createHtmlSelectOption(member + " - " + dmembers[member][0]);
            blockSelectRemoveIdCard.innerHTML += selectOption;
        }
        console.log("List of members to delete club member is built.");
    } else {
        console.log("List of members to delete club member has not been created.");
    }
}
 
function removeClubMember() {
    let blockSelectRemoveIdCard = document.querySelector("#idCardsMembersClubForRemove");
    let idCardValueRemove = blockSelectRemoveIdCard.options[blockSelectRemoveIdCard.selectedIndex].value.split(" - ")[0];
    let clubMemberValueRemove = blockSelectRemoveIdCard.options[blockSelectRemoveIdCard.selectedIndex].value.split(" - ")[1];
    let dmSession = JSON.parse(sessionStorage["moviesProSaveSession"]);
    let dmcSession = JSON.parse(sessionStorage["allStarsСlubMembersSaveSession"]);
    let allClubMembers = allStarsСlubMembers.getNumberClubMembers(dmcSession);
    let checkDeleteAllReviewsByIdCard = document.querySelector("#removeAllReviewsIdCardChecked");

    if (allClubMembers > 1) {
        if (dmcSession.hasOwnProperty(idCardValueRemove)) {
            if (!checkDeleteAllReviewsByIdCard.checked) {
                delete dmcSession[idCardValueRemove];
                sessionStorage.setItem("allStarsСlubMembersSaveSession", JSON.stringify(dmcSession));
                toggleHighlightMessage(3, "modal-footer-message-ok", "modal-footer-message-error", "Сlub member has been removed, reviews remained. Refresh the page."); 
                console.log("Сlub member has been removed, reviews remained. Refresh the page."); 
            } else {
                delete dmcSession[idCardValueRemove];
                let allActorReviewsRemoveObj = moviesPro.getRemoveAllActorReviews(dmSession, clubMemberValueRemove);
                sessionStorage.setItem("moviesProSaveSession", JSON.stringify(allActorReviewsRemoveObj)); 
                sessionStorage.setItem("allStarsСlubMembersSaveSession", JSON.stringify(dmcSession));
            
                toggleHighlightMessage(3, "modal-footer-message-ok", "modal-footer-message-error", "The club member and all his reviews have been removed. Refresh the page."); 
                console.log("The club member and all his reviews have been removed. Refresh the page."); 
            }
            document.querySelector("#form_remove_club_member").reset();
        } else {
            toggleHighlightMessage(3, "modal-footer-message-error", "modal-footer-message-ok", "This person is not a member of the club."); 
            console.log("This person is not a member of the club."); 
        }
    } else {
        toggleHighlightMessage(3, "modal-footer-message-error", "modal-footer-message-ok", "Warning! Is one member of the club left, removal is not possible."); 
        console.log("Warning! Is one member of the club left, removal is not possible."); 
    }
}

/* Remove actor review for current movie */
function showMoviesForRemoveActorReviewForCurrentMovie(dmovies) {
    let blockSelectRemoveActorReviewMovies = document.querySelector("#titlesMoviesRemoveReview");
    let blockSelectActorsRemoveReview = document.querySelector("#actorsRemoveReview");
    if (blockSelectRemoveActorReviewMovies) {

        let selectOptionMovie = createHtmlSelectOption("Select movie");
        blockSelectRemoveActorReviewMovies.innerHTML = selectOptionMovie;

        let selectOptionActor = createHtmlSelectOption("Select a movie first");
        blockSelectActorsRemoveReview.innerHTML = selectOptionActor;

        let allTitlesMoviesForRemove = moviesPro.getProperties(dmovies, 1);
        for (let i = 0; i < allTitlesMoviesForRemove.length; i++) {
            selectOptionMovie = createHtmlSelectOption(allTitlesMoviesForRemove[i]);
            blockSelectRemoveActorReviewMovies.innerHTML += selectOptionMovie;
        }
        console.log("List of movies to delete actor review is built.");
    } else {
        console.log("Movie list to delete actor review has not been created.");
    }
}

function showActors() {
    let arrayActors = [];
    let blockSelectActorsRemoveReview = document.querySelector("#actorsRemoveReview");
    let blockSelectRemoveActorReviewMovies = document.querySelector("#titlesMoviesRemoveReview");
    let dmSession = JSON.parse(sessionStorage["moviesProSaveSession"]);
    let movieReviewValue = blockSelectRemoveActorReviewMovies.options[blockSelectRemoveActorReviewMovies.selectedIndex].value;
 
    if (movieReviewValue != "Select movie") {
        blockSelectActorsRemoveReview.innerText = "";
        arrayActors = moviesPro.getActorsWhoAddReviewsCurrentBovie(dmSession, movieReviewValue);
        if (arrayActors.length > 0) {
            for (const actor in arrayActors) {
                let selectOption = createHtmlSelectOption(arrayActors[actor]);
                blockSelectActorsRemoveReview.innerHTML += selectOption;
            }
            console.log("List of actors to delete actor review is built.");
        } else {
            let selectOption = createHtmlSelectOption("There are no reviews for this movie");
            blockSelectActorsRemoveReview.innerHTML = selectOption;
            console.log("There are no reviews for this movie.");    
        }     
    } else {
        let selectOption = createHtmlSelectOption("Select a movie first");
        blockSelectActorsRemoveReview.innerHTML = selectOption;
        console.log("Select a movie first.");
    }
}

function removeActorReviewForCurrentMovie() {
    let blockSelectRemoveActorReviewMovies = document.querySelector("#titlesMoviesRemoveReview");
    let blockSelectActorsRemoveReview = document.querySelector("#actorsRemoveReview");
  
    let movieReviewValue = blockSelectRemoveActorReviewMovies.options[blockSelectRemoveActorReviewMovies.selectedIndex].value;
    let actorReviewValue = blockSelectActorsRemoveReview.options[blockSelectActorsRemoveReview.selectedIndex].value;
    
    let dmSession = JSON.parse(sessionStorage["moviesProSaveSession"]);

    if (actorReviewValue == "There are no reviews for this movie") {
        toggleHighlightMessage(1, "modal-footer-message-error", "modal-footer-message-ok", "There are no reviews for this movie."); 
        console.log("There are no reviews for this movie.");
    } else {
        if ((movieReviewValue != "Select movie") && (actorReviewValue != "Select a movie first") && (actorReviewValue != "There are no reviews for this movie")) {
            let dmSessionWithoutActorReview = moviesPro.getRemoveActorReviewForMovie(dmSession, movieReviewValue, actorReviewValue);
            sessionStorage.setItem("moviesProSaveSession", JSON.stringify(dmSessionWithoutActorReview));
    
            toggleHighlightMessage(1, "modal-footer-message-ok", "modal-footer-message-error", "Actor's review of the movie has been deleted. Refresh the page."); 
            console.log("The actor's review for the movie has been removed.");
        } else {
            toggleHighlightMessage(1, "modal-footer-message-error", "modal-footer-message-ok", "Select the movie and then the actor's review."); 
            console.log("Select the movie and then the actor's review.");
        }
    }
}

/* Initiative */
function initiative() {
    let sm = showSelectCaseMovie("selectMovie");
    if (sm) {
        startMovieScreen();
    } else {
        let okSession = isSessionStorageByKey("moviesProSaveSession") && isSessionStorageByKey("allStarsСlubMembersSaveSession");
        if (isCorrectStorage()) {
            if (okSession) {
                console.log("Admin Panel active.");
                console.log("+++++++++++++++++++ ADMIN PANEL +++++++++++++++++++");
                let dataMoviesSession = JSON.parse(sessionStorage["moviesProSaveSession"]);
                let dataMembersClubSession = JSON.parse(sessionStorage["allStarsСlubMembersSaveSession"]);
                
                staticticsMain(dataMoviesSession, dataMembersClubSession);
                staticticsLastReview(dataMoviesSession);
                
                uploadImage();

                showMoviesForRemoveMovie(dataMoviesSession);
                showIdCards(dataMembersClubSession);
                
                showMoviesForRemoveActorReviewForCurrentMovie(dataMoviesSession);
        
                let btnAddNewMovie = document.querySelector("#buttonAddMovieNew"); 
                btnAddNewMovie.addEventListener("click", addNewMovie); 

                let btnRemoveMovie = document.querySelector("#buttonRemoveMovie"); 
                btnRemoveMovie.addEventListener("click", removeMovie); 

                let btnRemoveClubMember = document.querySelector("#buttonRemoveClubMember"); 
                btnRemoveClubMember.addEventListener("click", removeClubMember); 
                
                let selectShowActorsForCurrentMovie = document.querySelector("#titlesMoviesRemoveReview"); 
                selectShowActorsForCurrentMovie.addEventListener("change", showActors); 

                let btnRemoveActorReviewForCurrentMovie = document.querySelector("#buttonRemoveActorReview"); 
                btnRemoveActorReviewForCurrentMovie.addEventListener("click", removeActorReviewForCurrentMovie); 
            } else {
                window.location = origin + pathSiteDirectory;
            }     
        } else {
            console.log("There is no such storage.");
        }
    }
}
initiative();
