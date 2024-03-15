<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="loginUser">
            <label for="user">User</label>
            <input type="text" id="usernsme" v-model="username" required>

            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default 
{
    data() {
        return {
            username: '',
            password: '',
        };
    },

    methods: 
    {
        async loginUser() {
            try {
                const response = await axios.post('',{
                    username: this.username,
                    password: this.password
                });
                console.log('User registered successfully!', response.data);
            } catch (error) {
                console.error('Error registering user:', error)
            }
        }
    }
}
</script>