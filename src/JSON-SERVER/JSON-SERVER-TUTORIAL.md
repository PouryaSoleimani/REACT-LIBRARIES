<!-- * JSON SERVER TUTORIAL -->
1 - USING JSON-SERVER : 
- install it via npm
- make a db.json file and put it some datas such as "products" , "comments" , "posts" , etc. in it
- make the {JSON SERVER} watch the db.json file by using the command : json-server db.json
- you will get the ports from {JSON SERVER} now , and can access to it and send `REQUESTS` and get `RESPONSES` like {GET},{POST},{PUT},{PATCH},{DELETE}

2 - FILTERING DATAS : 
- you can read the document of {JSON SERVER} in its github page
- to filter datas you can use (?) sign in the {REQUEST URL} , like --> GET /posts?views_gt=9000 == it will gives the post that their {views} are `Greater Than` 9000
- you can also set the _start , _end and _limit flags in the URL to see filtered results --> GET /posts?_start=10&_end=20 
- and also you can filter your URL for getting only one or maybe more responses --> GET /products?title=SHOE || GET /product?category=men ||