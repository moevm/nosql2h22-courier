from typing import Dict, Any

def delete_pass_from_users(users: Dict[str, Any]) -> Dict[str, Any]:
    for user in users["users"]:
        del user["password"]
    return users