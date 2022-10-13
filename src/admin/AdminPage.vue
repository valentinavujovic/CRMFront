<template>
    <div>
        <h1>Admin</h1>
       
        <div>
            All users:
            <ul v-if="users.length">
                <li v-for="user in users" :key="user.id">
                    {{user.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { authenticationService, userService } from '@/_services';

export default {
    data () {
        return {
            user: authenticationService.currentUserValue,
            users: []
        };
    },
    created () {
        userService.getAll().then(users => this.users = users);
    }
};
</script>