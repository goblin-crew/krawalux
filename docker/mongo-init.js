// Get the environment variables
const rootUser = process.env.MONGO_INITDB_ROOT_USERNAME ?? 'root';
const rootPwd = process.env.MONGO_INITDB_ROOT_PASSWORD ?? 'root';
const dbUser = process.env.MONGO_USERNAME ?? 'root';
const dbPass = process.env.MONGO_PASSWORD ?? 'root';
const dbName = process.env.MONGO_INITDB_DATABASE ?? 'dev';

db.auth(rootUser, rootPwd)

db = db.getSiblingDB(dbName);


// Create the app user
db.createUser({
    user: dbUser,
    pwd: dbPass,
    roles: [{ role: 'root', db: dbName }]
});



