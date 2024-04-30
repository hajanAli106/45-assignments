


//Question 44

function sandwich(...items: string[]): void {
    console.log("sandwich summary");
    if(items.length === 0){
      console.log("no items selected . your sandwich is empty");
      
    }else{
      console.log("you ordered a sandwich with:");
      for (const item of items){console.log("-"+ item);
      }
      }
      console.log();
  }
  
  
  sandwich("ham", "cheese", "tomato");
  sandwich("turkey", "swiss", "mustard");
  sandwich("peanut", "butter", "jelly");