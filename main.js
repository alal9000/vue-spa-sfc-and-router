// Creating the VueRouter

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(), 
	routes: [
	{
		path: '/',
		component: StringTest,
		name:"stringTest"
	},
  {
		path: '/mypost',
    component: MyPost,
		name:"myPost"
	},
  {
		path: '/student-marks',
    component: StudentMarks,
		name:"StudentMarks"
	}
  ]
})



const app = Vue.createApp({});

app.component('app-nav', {
  template: `
    <div>
      <v-spacer></v-spacer>
      <v-btn class="mr-3">
        <router-link to="/" replace>Name Test</router-link>
      </v-btn>
      <v-btn class="mr-3">
        <router-link to="/mypost" replace>Post Management</router-link>
      </v-btn>
      <v-btn class="mr-3">
        <router-link to="/student-marks" replace>Student Marks</router-link>
      </v-btn>
    </div>
  `
});

app.component('paginate', VuejsPaginateNext); // register paginate component globally for use in StudentMarks component
app.use(router); // Use the router instance
app.mount('#app'); // Mount the Vue app