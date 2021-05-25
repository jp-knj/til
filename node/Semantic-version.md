## Semantic-version  
To give you a very brief overview  
- `"express" : "1.2.3"` - NPM will grab this specific version only  
- `"express" : "~1.2.3"` - NPM will grab the most recent patch version  
will find the latest 1.2.X version! but not 1.3 or anything below.  
- `"express" : "^1.2.3"` - NPM will grab most recent minor version  
will find the latest 1.X.X version but not 1.3.X or anything below 1.X.X  
- `"express" : "*"` - NPM will grab the newest version available.  
