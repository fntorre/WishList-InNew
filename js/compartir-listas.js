(() => {
    submenu()
    quitarBoton()
    btnCorrecto()
    popUpShare()
    linksShare()
  })()

function submenu() {

    $("body").on("click", ".onsub", function () {
      $(".menu-listas,.onsub").addClass("in")
    })
  
    $("body").on("click", ".onsub.in", function () {
      $(".menu-listas,.onsub").removeClass("in")
    })
  
  }
  
function quitarBoton() {
    if ($(".no-product.message").length) {
      $(".giftlistinfo-actions").addClass("hidden")
    }
  }


function btnCorrecto(){
    $(".action-share a").replaceWith('<a href="#">Compartir Lista</a>');
}

function popUpShare() {

    $("body").on("click", ".action-share", function () {
      $(".share-morales").removeClass("hidden")
    });
  
    $("body").on("click", ".close-shareModal", function () {
      $(".share-morales").addClass("hidden")
    });
  
  }
  
function linksShare() {
  
    $('#share__whatssap').click(function () {
      const lista = document.getElementsByClassName("giftlistinfo-description")[0];
      let texto = lista.innerHTML;
      let minus = texto.toLowerCase();
      let link = minus.replace(/ /g, "");
      let linkEs = link.replace(/ñ/g, "")
      console.log(linkEs)
  
      const listas = "https://www.morales.com.bo/list/";
      let share = listas + linkEs;
      console.log(share)
  
      window.open('https://api.whatsapp.com/send?text=' + "Te comparto mi lista de favoritos en Morales SRLA: " + share);
    });
  
    $('#share__messenger').click(function () {
      const lista = document.getElementsByClassName("giftlistinfo-description")[0];
      let texto = lista.innerHTML;
      let minus = texto.toLowerCase();
      let link = minus.replace(/ /g, "");
      let linkEs = link.replace(/ñ/g, "")
      console.log(linkEs)
  
      const listas = "https://www.morales.com.bo/list/";
      let share = listas + linkEs;
      console.log(share)
  
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + share);
    });
  
    $('#share__mail').click(function () {
        const lista = document.getElementsByClassName("giftlistinfo-description")[0];
        let texto = lista.innerHTML;
        let minus = texto.toLowerCase();
        let link = minus.replace(/ /g, "");
        let linkEs = link.replace(/ñ/g, "")
        console.log(linkEs)
  
        const listas = "https://www.morales.com.bo/list/";
        let share = listas + linkEs;
        console.log(share)
  
        window.open("mailto:?Subject=Lista Morales&body=" + "Te comparto mi lista de productos: " + share);
      });
  
  }
  