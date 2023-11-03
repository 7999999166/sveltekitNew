<script>

   
    
    import {order} from '../store.js' ;

    $: producty = $order ;

    let ref = [] ;

    async function asr (i) {  let myinfo = ref[i].getAttribute("data-id"); let result = eval(myinfo) ; await db.products.delete( result )}

   

  
</script>

<div>
   

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Shopping Cart</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    {#each producty as item}

    <ul class="list-group">

    <li class="list-group-item d-flex justify-content-between align-items-center">
    {item.name}
    <span class="badge bg-primary rounded-pill">{item.amount}</span>
    <span on:click={asr} class="w3-button" data-id={item.id} on:click={asr(i)} bind:this={ref[i]}>&times;</span>
  </li>

  </ul>
         
    {/each}
    






  </div>
</div>
</div>

<style>
   
</style>