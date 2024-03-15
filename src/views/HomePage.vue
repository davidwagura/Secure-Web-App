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
        async registerUser() {
            try {
                const response = await axios.post('',{
                    username: this.username,
                    password: this.password
                });
                console.log('User registered successfully!', response.data);
            } catch (error) {
                console.error('Error registering user:', error);
            }
        }
    }
};
</script>