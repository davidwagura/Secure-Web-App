<template>
    <div>
        <h2>Registration</h2>
        <form @submit.prevent="registerUser">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>

            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },

    methods: {
        registerUser() {
            axios.post('',{
                username: this.username,
                password: this.password
            });
            console.log('User registered successfully!', response.data);
        }
            // console.error('Error registering user:', error)
    }
};
</script>