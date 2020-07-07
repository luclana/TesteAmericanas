
// / <reference types="Cypress" />

beforeEach(() => {
    Given('que a tela de login é aberta', () => {
      cy.visit('/');
    });

<script type="text/javascript">  
    var dataSession =  $("html").attr("data-session");
    </script>


<script type="text/javascript">  
var dataSession =  $("html").attr("data-session");
$.ajax({
    method: "GET",
    url: "/web_api/cart/"+dataSession
})cy. done(function( response, textStatus, jqXHR ) {
    console.log(response);
})cy.fail(function( jqXHR, status, errorThrown ){
    var response = $.parseJSON( jqXHR.responseText );
    cy.console.log(response);
});
</script>

[
    {
      "Cart": {
        "email": "",
        "session_id": "pfhqg4ekivc5hqrdh3me2e8dp4",
        "product_id": "6",
        "product_name": "filtro-departamento",
        "quantity": "1",
        "price": "50.00",
        "weight": "100",
        "date": "2020-09-30",
        "variant_id": "0",
        "additional_information": "",
        "user_id": "0",
        "customer_id": "0",
        "user_cod": "0",
        "hour": "13:55:43",
        "product_url": {
          "http": "https://www.americanas.com.br/hotsite/iphone-se",
          "https": "https://www.americanas.com.br/hotsite/iphone-se"
        },
        "product_image": {
          "http": "http://images-americanas.b2w.io/produtos/01/00/img/1657365/9/1657365979_1GG.jpg",
          "https": "https://images-americanas.b2w.io/produtos/01/00/img/1657365/9/1657365979_1SZ.jpg",
          "thumbs": {
            "30": {
              "http": "http://images-americanas.b2w.io/produtos/01/00/img/1657365/9/1657365979_2SZ.jpg",
              "https": "https://images-americanas.b2w.io/produtos/01/00/img/1657365/9/1657365979_2SZ.jpg"
            },
            "90": {
              "http": "http://images-americanas.b2w.io/produtos/01/00/img/1657365/9/1657365979_3SZ.jpg",
              "https": "https://images-americanas.b2w.io/produtos/01/00/img/1657365/9/1657365979_3SZ.jpg"
            },
            "180": {
              "http": "http://images-americanas.b2w.io/produtos/01/00/img/1657365/9/1657365979_6SZ.jpg",
              "https": "https://images-americanas.b2w.io/produtos/01/00/img/1657365/9/1657365979_6SZ.jpg"
            }
          }
        }
      }
    }

    cy.dataSession =  $("html").attr("data-session");
    var params = {};

    cy.params["attrs"] = "Cart.product_name,Cart.product_id";

    $.ajax({
      method: "GET",
      url: "/web_api/cart/"+dataSession,
      data: params
    })cy.done(function( response, textStatus, jqXHR ) {
      console.log(response);
    }).fail(function( jqXHR, status, errorThrown ){
      var response = $.parseJSON( jqXHR.responseText );
     cy. console.log(response);
    });

    {
        "Cart": {
            "session_id": "rkqeli8b00a697r4q9jnbi6il6",
            "product_id": "100",
            "quantity": "2",
            "variant_id": "0"
        }
    }
    <script type="text/javascript">  
    var dataSession =  $("html").attr("data-session");
        
        $.ajax({
        cy.method: "POST",
        cy.url: "/web_api/cart/",
        cy.contentType: "application/json; charset=utf-8",
        cy.data: '{"Cart":{"session_id":"'+dataSession+'","product_id":"100","quantity":"2","variant_id":"0"}}'
    })cy.done(function( response, textStatus, jqXHR ) {
        cy.console.log(response);
    })cy.fail(function( jqXHR, status, errorThrown ){
        var response = $.parseJSON( jqXHR.responseText );
        cy.console.log(response);
    });
    </script>

{
    'message': 'Created',
    'id': '615440',
    'session_id': 'rkqeli8b00a697r4q9jnbi6il6',
    'cart_url': 'https://sacola.americanas.com.br/simple-basket/?cartId=20f6f771-b384-4b4f-998f-1438d7e6b855,
}


<script type="text/javascript">
var dataSession =  $("html").attr("data-session");
var productID = 6
$.ajax({
  cy.method: "DELETE",
 cy.url: "/web_api/carts/"+dataSession+"/"+productID
}).done(function( response, textStatus, jqXHR ) {
  cy.console.log(response);
})cy.fail(function( jqXHR, status, errorThrown ){
  var response = $.parseJSON( jqXHR.responseText );
  console.log(response);
});
</script>

{
    'message': 'Deleted',
    'id': '615440',
    'session_id': 'rkqeli8b00a697r4q9jnbi6il6',
    'cart_url': https://sacola.americanas.com.br/simple-basket/?cartId=20f6f771-b384-4b4f-998f-1438d7e6b855,
    'code': '201'
 }