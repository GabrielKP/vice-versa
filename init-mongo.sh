mongo -- "$MONGO_INITDB_DATABASE" <<EOF
    var rootUser = '$MONGO_ROOT_USERNAME';
    var rootPassword = '$MONGO_ROOT_PASSWORD';
    var admin = db.getSiblingDB('admin');
    admin.auth(rootUser, rootPassword);
EOF