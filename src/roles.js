const ROLES = {
    USER: 'user',
    ADMIN: 'admin'
};

const PERMISSIONS = {
    [ROLES.USER]: ['read'],
    [ROLES.ADMIN]: ['read', 'write', 'delete']
};

module.exports = {
    ROLES,
    PERMISSIONS
};