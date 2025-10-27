let header1 = document.querySelector( '.header' )



const changeText = () => {
  header1.textContent = "Button clicked"
  let para = document.createElement( 'p' );
  para.textContent = 'Para also added'
  document.body.appendChild( para )
}