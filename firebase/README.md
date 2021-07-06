# Firebase

## Collection

- Ordering
```
firestore.collection('posts').orderBy('createdAt', 'desc')
```

- Limit
```
firestore.collection('posts').limit(10)
```

- Query
```
firestore.collection('posts').where('stors', '>=', 10)
```
