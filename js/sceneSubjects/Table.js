function Table(scene) {
    let geometry = new THREE.BoxBufferGeometry( 15, 0, 30);
    let material = new THREE.MeshBasicMaterial( {color: 0x8CE9FF} );
    let table = new THREE.Mesh( geometry, material );
    table.position.set(5, 5, -50);
    scene.add( table );


    this.update = function(time) {

    };
}