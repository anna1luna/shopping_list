
   const shoppingList = Vue.createApp({
      data() {
        return {
          head:  "Anna's Shopping List",
          editing: false,
          newItem: "",
          newItemHighPriority: false,
          newItemQuantity: "",
          selected: "",
          items: [
            {id:1, label: 'cats', highPriority: true, quantity: 20, selected: 'Poultry'  }, 
            {id:2, label: 'dogs', highPriority: true, quantity: 200, selected: 'bakery' },
            //{id:3, label: 'mice', highPriority: true},
            //{ id: 4, label: 'pips', highPriority: true },
            //{ id: 5, label: 'mips', highPriority: true },
          ]
        }
      },

      computed: {
        reversedItems() {
          return [...this.items].reverse()
        }
      },
      methods: {
        currentDate() {
          const current = new Date();
          const date = `${current.getDate()}.${current.getMonth() + 1}. ${current.getFullYear()}`;
          return date

        },
        saveItem() {
          this.items.push({ 
            id: this.items.length + 1, 
            label: this.newItem, 
            quantity: this.newItemQuantity,
            selected: this.selected,
            highPriority: this.newItemHighPriority

          })
          this.newItem = ""
          this.newItemHighPriority = ""
          this.newItemQuantity = ""
          this.selected = ""
         
        },
        
        deleteAll() {
          this.items = []
        },

        doEdit(editing) {
          this.editing = editing
          this.newItem = ""
          this.newItemHighPriority = "" 
        },
        toggleImportant(item) {
          item.highPriority = !item.highPriority
        },
        deleteItem(index) {
          this.reversedItems.splice(index, 1)
        },

      }
    })
      
      .mount('#shopping-list')
