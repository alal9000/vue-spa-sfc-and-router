const MyPost = {
  // Defining data to be used in the component
  data() {
    return {
      statusPosts: [],
      status: ''
    };
  },

  // Define the template for the component
  template: `
    <div id="status-post">
      <h1>Status Post</h1>
      <p>
        Status: 
        <input v-model="status" type="text" class="form-control" placeholder="Enter your status" />
        <button class="btn btn-primary" @click="addStatus()">Post</button>
      </p>
      <ul>
        <status-item 
          v-for="(post, index) in statusPosts" 
          :key="index" 
          :status="post" 
          @remove="removeStatus(index)">
        </status-item>
      </ul>
    </div>
  `,

  // Define components used inside this component
  components: {
    'status-item': {
      props: ['status'],
      template: `
        <p>
          {{ status }} 
          <button @click="$emit('remove')" class="btn btn-warning">Del</button>
        </p>
      `
    }
  },

  // Define methods for the component
  methods: {
    addStatus() {
      if (this.status.trim()) {
        this.statusPosts.unshift(this.status.trim()); // Add new status at the top
        this.status = ''; // Clear input
      }
    },
    removeStatus(index) {
      this.statusPosts.splice(index, 1); // Remove the status at the given index
    }
  }
};
