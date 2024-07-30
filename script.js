function dropDown() {
  let drop_btns = document.querySelectorAll(".drop-btn");

  drop_btns.forEach((btn) => {
    btn.addEventListener("click", toggleVisibility);
  });

  function toggleVisibility(event) {
    // get the drop-down list node
    let toggled_node = event.target.nextElementSibling;

    toggled_node.classList.toggle("visible");

    //   hide all child drop downs
    if (!toggled_node.classList.contains("visible")) {
      let inner_drop_downs = toggled_node.querySelectorAll(".drop-down");

      inner_drop_downs.forEach((drop_down) => {
        drop_down.classList.remove("visible");
      });
    }
  }
}
