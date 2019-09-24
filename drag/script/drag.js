const draggables = this.document.querySelectorAll('.draggable');

draggables.forEach((draggable) => {
  draggable.addEventListener('onclick', console.log('test'));
})