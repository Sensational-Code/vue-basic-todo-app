
<template>
	<h2>Todo List</h2>
	<div v-for="task in tasks">
		<input type="checkbox" :checked="task.done">
		<span>{{ task.name }}</span>
	</div>

	<!-- Pagination -->
	<hr width="200px" />
	<button :disabled="prevDisabled" @click="previousPage">Previous Page</button>
	<span>Page: {{ currentPage }} / {{ maxPages }}</span>
	<button :disabled="nextDisabled" @click="nextPage">Next Page</button>
</template>

<script>
	import api from '@/js/api';

	export default {
		data() {
			return {
				currentPage: 1,
				maxPages: 0,
				prevDisabled: false,
				nextDisabled: false,
				tasks: []
			}
		},

		watch: {
			currentPage: {
				immediate: true,
				handler(newPage, currentPage) {
					this.prevDisabled = (this.currentPage <= 1) ? true : false;
					this.nextDisabled = (this.currentPage === this.maxPages) ? true : false;
					this.getTasks();
				}
			}
		},

		mounted() {
			this.getTasks();
		},

		methods: {
			async getTasks() {
				const { tasks, pages } = await api.getTasks({ perPage: 3, page: this.currentPage });
				this.maxPages = pages;
				this.tasks = tasks;
			},

			previousPage() {
				 this.currentPage--;
			},

			nextPage() {
				this.currentPage++;
			}
		}
	}
</script>

<style>

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

</style>
