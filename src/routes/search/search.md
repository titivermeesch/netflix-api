# Search

Main entry point: /search

## Usage

### Execute a search request (POST /)

Available options:

| Field   | Description                                   | Type    | Default | Example   |
| ------- | --------------------------------------------- | ------- | ------- | --------- |
| term    | Text you want to  search on                   | String  | N/A     | "Friends" |
| limit   | Limit of results                              | Number  | 20      | 50        |
| rawData | Return Netflix data instead of processed data | Boolean | false   | true      |

Results:

| Field | Description                          | Type             |
| ----- | ------------------------------------ | ---------------- |
| id    | Id of the video                      | Number           |
| name  | Name of the video (movie, serie,...) | String           |
| type  | Type of the result                   | suggestion/title |
| image | Image preview of movie               | URL              |


## Netflix structure

This is the path structure when searching for data

1. search
2. Selector: byTerm/byEntity
3. Search term
4. Type: suggestions/titles
5. Number, not yet known what this does
6. Search limit, object with {from: index, to: index}
7. Fields to retreive (summary, boxart)

## Missing information

- In the search query, we need to pass in a value (currently 1) but it's not clear what this value is doing. It looks like changing it does not affect anything.
- We only have summary, boxtart as fields to retrieve, what else?

## Documenation update

- 20/12/2020: Initial writing
