package opa.test

bindings = [
  {
    "user": "103793894076720033400",
    "roles": [
      "admin"
    ]
  },
  {
    "user": "testUser2",
    "roles": [
      "moderator"
    ]
  }
]

roles = [
  {
    "name": "admin",
    "permissions": [
      {
        "resource": "/user",
        "action": "read"
      },
      {
        "resource": "/greet/khach",
        "action": "read"
      },
      {
        "resource": "/images",
        "action": "read"
      }
    ]
  },
  {
    "name": "moderator",
    "permissions": [
      {
        "resource": "/anotherApi",
        "action": "read"
      }
    ]
  }
]

default allow = false

allow {
    user_has_role[role_name]
    role_has_permission[role_name]
}

user_has_role[role_name] {
    binding := bindings[_]
    binding.user = input.subject
    role_name := binding.roles[_]
}

role_has_permission[role_name] {
    role := roles[_]
    role_name := role.name
    perm := role.permissions[_]
    perm.resource = input.resource
    perm.action = input.action
}
