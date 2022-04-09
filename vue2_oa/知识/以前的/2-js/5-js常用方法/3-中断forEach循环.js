try {
    
                    throw new Error("EndIterative");

              } catch (e) {
                if(e.message != "EndIterative") throw e;
              }