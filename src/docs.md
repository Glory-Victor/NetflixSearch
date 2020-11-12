---
title: React Netflix Search and View Application
components: Search, SeriesList, SeriesView, Episodes
---

## Search

<p class="description">Search relevant series name</p>

GET :: http://api.tvmaze.com/search/shows?q=${query}

query: Searched value

example result: {"score":31.837914,"show":{"id":5262,"url":"http://www.tvmaze.com/shows/5262/riverdale","name":"Riverdale","type":"Scripted","language":"English","genres":["Drama","Crime","Mystery"],"status":"Running","runtime":60,"premiered":"2017-01-26","officialSite":"http://www.cwtv.com/shows/riverdale/","schedule":{"time":"20:00","days":["Wednesday"]},"rating":{"average":6.7},"weight":97,"network":{"id":5,"name":"The CW","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":311954,"imdb":"tt5420376"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/211/528835.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/211/528835.jpg"},"summary":"<p><b>Riverdale</b> is a bold, subversive take on Archie, Betty, Veronica and their friends from the comics, exploring the surreality of small-town life - the darkness and weirdness bubbling beneath Riverdale's wholesome facade.</p>","updated":1604851237,"_links":{"self":{"href":"http://api.tvmaze.com/shows/5262"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1830538"},"nextepisode":{"href":"http://api.tvmaze.com/episodes/1960526"}}}}

{{"demo": "Components/Home.js"}}

## Series list view

<p class="description">Resulted searches are available in card view</p>

GET :: http://api.tvmaze.com/shows/${id}/seasons

id: show id (from the home page result)

example result: {"id":991401,"url":"http://www.tvmaze.com/episodes/991401/riverdale-1x01-chapter-one-the-rivers-edge","name":"Chapter One: The River's Edge","season":1,"number":1,"type":"regular","airdate":"2017-01-26","airtime":"21:00","airstamp":"2017-01-27T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/95/237680.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/95/237680.jpg"},"summary":"<p>At Riverdale High, Betty, Archie, Jughead and new girl Veronica wrestle with clashing desires while coping with a fellow student's tragic death.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/991401"}}}

{{"demo": "Components/Series/SeriesView.js"}}

## Episode View

<p class="description">Relevant episodes of a season in listed</p>

GET :: http://api.tvmaze.com/seasons/${id}/episodes

id: season id (from the cardView page result)

example result: "id":1207201,"url":"http://www.tvmaze.com/episodes/1207201/riverdale-2x01-chapter-fourteen-a-kiss-before-dying","name":"Chapter Fourteen: A Kiss Before Dying","season":2,"number":1,"type":"regular","airdate":"2017-10-11","airtime":"20:00","airstamp":"2017-10-12T00:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/130/327498.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/130/327498.jpg"},"summary":"<p>As Fred's life hangs in the balance following the shooting at Pop's diner, Archie struggles with the emotional aftermath of what he witnessed. Meanwhile, as Veronica steps out of her comfort zone to support Archie, she learns that her father Hiram has arrived to Riverdale earlier than expected. Elsewhere, at Pop's diner, Pop Tate recounts the chilling details of the shooting, which leaves Jughead and Betty questioning the gunman's true motives. Lastly, after running into Cheryl at the hospital, Betty and Kevin are surprised to learn about the fire at Thornhill.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/1207201"}}}

{{"demo": "Components/SeasonView.js"}}

## References

https://reactrouter.com/web/api/Hooks/usehistory
https://reactrouter.com/web/api/Hooks/uselocation
https://reactrouter.com/web/api/BrowserRouter
https://reactrouter.com/web/example/url-params
https://reactjs.org/docs/hooks-state.html
