# Sandwich Shop

> A Sandwoch Shop App that uses Docker, Node.js and React

## Quick Start

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To re-build the files, input the following command
docker-compose build --no-cache
```
## Extra Notes
* App uses default 6603 database connectivity port.
* Create database with the name 'menu'.
* Create the following tables
    - menu_items => Contains the sandwiches
    - ingredients => Contains the ingredients
    - recipies => Contains the recipes to create each sandwich
    - inventory => holds the inventory of the ingredients




