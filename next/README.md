# Next.js

## First
We can use `create-next-app` to generate an app :
```
npx create-next-app
```

## file Conventions
Next.js uses conventions based off the file system to make magic happen for us:

**Files**
- `/pages` - any component here will create a route for your app as the name of the file.  
- `/pages/api` - any function in here is an API function,
- `/pages/[id]` - a page with a dynamic param named id
- `/pages/_app` - your entry compoenent, perfect for all your `<Provider />` stuff and global css. Completely optional
- `/pages/_document` - basically your index.html Also, optional

## Pages
Pages are special. They can tap into server side data fetchin functions. These functions basically give us control on how to build and server each page and if they have any data requirements.

## Styling 
Next.js comes with two baked in ways to styles your apps:
- Global styles (.css, scss)
- CSS Modules (Scoped CSS)	

And you cand use any other approcach you'd like as well (emotion)

## Walk through

```
// gh cli
gh repo clone Hendrixer/production-grade-nextjs
```

to install those dependencies!
```
yarn
```

## Tech Stack 
- TypeScript
- ESLint and Prettier
- Next.js
- Node v10+
- MongoDB
