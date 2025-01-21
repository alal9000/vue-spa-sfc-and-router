const StudentMarks = {
  // Defining data to be used in the component
  data: function() {
    return {
      currentPage: 1,
      marks: [
        {"name": "Amy", "mark": 90},
        {"name": "Bill", "mark": 80},
        {"name": "Casey", "mark": 78},
        {"name": "David", "mark": 84},
        {"name": "Ella", "mark": 92},
        {"name": "Frank", "mark": 85},
        {"name": "Grace", "mark": 88},
        {"name": "Holly", "mark": 91},
        {"name": "Ivy", "mark": 87},
        {"name": "Jack", "mark": 76},
        {"name": "Kara", "mark": 79},
        {"name": "Liam", "mark": 82},
        {"name": "Mia", "mark": 95},
        {"name": "Nina", "mark": 70},
        {"name": "Oscar", "mark": 83},
        {"name": "Paul", "mark": 89},
        {"name": "Quinn", "mark": 80},
        {"name": "Rita", "mark": 75},
        {"name": "Sam", "mark": 77},
        {"name": "Tina", "mark": 94},
        {"name": "Ursula", "mark": 85},
        {"name": "Vera", "mark": 81},
        {"name": "Will", "mark": 86},
        {"name": "Xander", "mark": 90},
        {"name": "Yara", "mark": 78},
        {"name": "Zane", "mark": 93}
      ]
    };
  },

  // Define the template for the component
  template: `
    <div>
        <h1 class="text-center">Student Marks</h1>

        <!-- Bootstrap table -->
        <table class="table table-bordered table-striped">
          <caption><em>Student Marks Table</em></caption> <!-- Table Caption -->
          <thead class="thead-dark">
            <tr>
              <th id="nameHeader" scope="col">Student Name</th>
              <th id="markHeader" scope="col">Mark</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in getItems" :key="student.name">
              <td headers="nameHeader">{{ student.name }}</td> 
              <td headers="markHeader">{{ student.mark }}</td> 
            </tr>
          </tbody>
        </table>

        <!-- Vue Paginate component -->
        <paginate 
            :page-count="9"    
            :page-range="5" 
            :margin-pages="1"
            :click-handler="clickCallback" 
            :prev-text="'Prev Page'" 		
            :next-text="'Next Page'" 
            :container-class="'pagination'" 
            :active-class="'currentPage'">
        </paginate>
    </div>
  `,

  // Computed property to calculate the items to display on the current page
  computed: {
    getItems: function() {
      let current = this.currentPage * 3;
      let start = current - 3;
      return this.marks.slice(start, current);
    }
  },

  // Methods to handle pagination
  methods: {
    clickCallback: function(pageNum) {
      this.currentPage = Number(pageNum);
    }
  }
};

