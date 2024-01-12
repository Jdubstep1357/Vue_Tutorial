import AssignmentList from "./AssignmentList.js";

export default {

    components: { AssignmentList },

    // String and t itle come from props in AssignmentList.js

    template: `
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list> 


        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" placeholder="New assignment" class="p-2" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    </section>   
    `,


    data() {
        return {
            // after user clicks submit button new item added to array from method add()
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in HW', complete: false, id: 3 }

            ],


            newAssignment: ''
        }
    },

    computed: {


        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    methods: {
        add() {
            // pushing new assignments from form input to checkboxed list
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                // when user submits data pushed to new array
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    }
}