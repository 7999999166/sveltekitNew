<script>
  export let data ;

  import {cart , order} from '../../../store.js' ;

  import {db} from "../../../db.js" ;

  import {page} from '$app/stores';

  import axios from 'axios';
  
  console.log(data.ProductItem) ;

  var info = data.ProductItem ;

  var product = $page.params.product ;

  console.log(product) ;

  var myProduct = info.filter(function (item) {return item.UrlName == product});

  var productInfo = myProduct[0];

  console.log(productInfo);

  $: $order ;


 async function teru (){ await db.products.add({ name: productInfo.ProductName , amount: productInfo.Price , quantity: 1 })  ; $cart = 1 ; $order = await db.products.toArray(); console.log($order) ; }

 

  function ria(){ axios({
  method: 'post',
  headers: { 'content-type': 'application/json' , 'xc-auth' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFjcm90ZWNobGxwQGdtYWlsLmNvbSIsImZpcnN0bmFtZSI6bnVsbCwibGFzdG5hbWUiOm51bGwsImlkIjoidXNfbjB6dWhkM29oMzR3eDUiLCJyb2xlcyI6Im9yZy1sZXZlbC1jcmVhdG9yLHN1cGVyIiwidG9rZW5fdmVyc2lvbiI6IjlhYTkyMGRhZGYzYjUwNmU5ZTgyZjQwZWY2MWM4ZThmZTBhMDI2OTQ5ZDE2YWZiYTM2YTg0YzM1OTlhMmNjNWY0YWFmNWNjNTgyYmRkYmZhIiwiaWF0IjoxNjgyOTE5MjM3LCJleHAiOjE2ODI5NTUyMzd9.Ssn01hFM30kHI5slGqepcAp-_WjNy7LWBTyU46pg5Yk'},
  url: 'https://noco-db-production-5f83.up.railway.app/api/v1/db/data/noco/kachua/products',
  data: {
          "Title": "nintura",
          "Qty":39,
          "Price":1487
          }
});}

  

  async function dia(){ fetch('https://n8n-production-6700.up.railway.app/webhook-test/20014e7b-8de5-42d7-96da-d5719631fb7c', {
    method: "POST",
    body: JSON.stringify({ name : 'Biggu'}),
    
  })}

</script>

<div>

    <div class="container py-4 py-xl-5">
    <div class="row gy-4 gy-md-0">
        <div class="col-md-6">
            <div class="p-xl-5 m-xl-5"><img class="rounded img-fluid w-100 fit-cover" style="min-height: 300px;" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
        </div>
        <div class="col-md-6 d-md-flex align-items-md-center">
            <div style="max-width: 350px;">
                <h2 class="text-uppercase fw-bold">{productInfo.ProductName}</h2>
                <p class="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue <span class="ziss">₹ {productInfo.Price}</span></p><a class="btn btn-primary btn-lg me-2" role="button" href="#" on:click={teru}>Buy Now</a><a class="btn btn-primary btn-lg me-2" role="button" href="#" on:click={dia}>Zapy</a>
            </div>
        </div>
    </div>
</div>
 

 <nav>
  <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Descriptions</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Size & Color</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Features</button>
    
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
   <div class="container py-4 py-xl-5">
    <div class="row row-cols-1 row-cols-md-2">
        <div class="col"><img class="rounded w-100 h-100 fit-cover" style="min-height: 300px;" src="https://picsum.photos/id/113/1200/800" /></div>
        <div class="col d-flex flex-column justify-content-center p-4">
            <div class="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
                <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg class="bi bi-bell" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                    </svg></div>
                <div>
                    <h4>204 Grade</h4>
                    <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                </div>
            </div>
            <div class="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
                <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg class="bi bi-bell" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                    </svg></div>
                <div>
                    <h4>RustProof</h4>
                    <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                </div>
            </div>
            <div class="text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
                <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg class="bi bi-bell" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                    </svg></div>
                <div>
                    <h4>Stainless</h4>
                    <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                </div>
            </div>
        </div>
    </div>
</div>


  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Kanik</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Akhil</div>
  
</div>
</div>

<style>
 .ziss{
    color: green;
    font-size: 1.5rem;
    font-weight: bold;
 }  
</style>