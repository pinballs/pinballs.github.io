function Ball(scene) {
    const ball = new THREE.Mesh(
        new THREE.SphereGeometry(.5, 128, 128),
        new THREE.MeshStandardMaterial({ flatShading: true })
    );
    ball.position.set(0, 10, -50);
    scene.add(ball);

    this.force = new THREE.Vector3(0, -0.001, 0); // gravity
    this.v = new THREE.Vector3();

    this.mass = 1; // 1kg
    this.old_time = 0;

    this.update = function(time) {
        // animate ball with force of gravity
        let dt = time - this.old_time;
        let a = this.force.clone();
        a.divideScalar(this.mass);

        this.v.add(a.clone().multiplyScalar(dt));

        ball.position.add(this.v.clone().multiplyScalar(dt));
        ball.position.add(a.clone().multiplyScalar(0.5*dt^2));
    }
}