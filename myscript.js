var app = new Vue(
  {
    el: "#app",
    data: {
    shoppingList:[
      "Pane",
      "Vino",
      "Carne",
      "Pesce",
      "Frutta"
      ]
    },
   methods: {
      itemDelete: function(index){
        this.shoppingList.splice(index, 1)

      }

   }

  }
);
