<script>
    import { onMount } from "svelte";
    import axios from "axios";
    let cardElement ;
    let cardErrors ;
    let card ;
    let stripe ;
    let elements ;


    async function submitOrder(){
              await  axios({
              method: 'post',
              url: 'http://localhost:1337/api/orders/pretransaction',
              data: {
                      "name": "kintura",
                      "amount":1487
                     }
                  });
        



    }


    async function handleSubmit(){
                    let response = await stripe.createToken(card);
                    const {token} = response ;
                    if (token) {const {id} = token ;
                    let order = await submitOrder({total:1400,items:"kaniko",stripeTokenId:id}) ;
                    console.log(order) ;
                    }
                
                    else{console.log(response)}
                   }

    onMount(function(){stripe = Stripe("pk_test_51HmjjkIpgP0u8gAB68Qd7UJApM59NjuYAGx6Nl4FEfZR9angQIepQ72fDhMeGE7cLAtQD9O6L3oXZnDbyo1xlPNk00I3ESRa9V");
                       elements = stripe.elements();
                       card = elements.create("card");
                       card.mount(cardElement);
                        });
  
</script>
<svelte:head>
 <script src="https://js.stripe.com/v3/"></script>   
</svelte:head>

<div class="chikki">
    <h1 class="him">Checkout Page</h1>
  <div class="stripe-input w3-card dars w3-display-middle">
     <label for="card-element" class="himat">Debit or Credit card</label>
     <p class="stripe-info">test using this credit card :
        <span>4242 4242 4242 4242</span>
        <br>
        enter any 5 digits for the zip code
        <br>
        enter any 3 digits for CVC
     </p>
     <div class="zatu">
        <div id="card-element" style="margin-left: 20%;" bind:this={cardElement}></div>
        <div id="card-errors" bind:this={cardErrors}></div>
        <button class="btn btn-danger kiou" on:click={submitOrder}>Chekout</button>
     </div>


  </div>
</div>

<style>
  .kiou{
        margin-left: 10%;
        margin-top: 30px;
        margin-bottom: 30px;
    }
  .chikki{
    text-align: center;
    padding-bottom: 410px ;
  } 
  .him{
    margin-top: 200px;
    
  }
  .dars{
    width: 50%;
  }
  .zatu{
    width: 90%;
    
  }
  .himat{
    font-size: large;
    font-weight: bold;
    color: brown;
  }
</style>