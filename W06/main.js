function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices = [
	[-1, 1, 1],
	[-1, -1, 1],
	[1, -1, 1],
	[1, 1, 1],
	[-1, 1, -1],
	[-1, -1, -1],
	[1, -1, -1],
	[1, 1, -1]
    ];

    var faces = [
	[0, 1, 2],
	[3, 0, 2],
	[1, 5, 6],
	[2, 1, 6],
	[2, 6, 7],
	[3, 2, 7],
	[3, 7, 4],
	[0, 3, 4],
	[0, 4, 5],
	[1, 0, 5],
	[4, 6, 5],
	[4, 7, 6]
    ];
    
    var v = [];
    for (var i=0; i<8; i++){
	v[i] = new THREE.Vector3().fromArray(vertices[i]);
    }
    
    var f = [];
    var id;
    for(var i=0; i<12; i++){
	id = faces[i];
	f[i] = new THREE.Face3(id[0], id[1], id[2]);
    }
    
    var geometry = new THREE.Geometry();
    for(var i=0; i<8; i++){
	geometry.vertices.push(v[i]);
    }
    for(var i=0; i<12; i++){
	geometry.faces.push(f[i]);
    }
 
    var material = new THREE.MeshPhongMaterial();
    material.vertexColors = THREE.FaceColors;
    for(var i=0; i<12; i++){
	geometry.faces[i].color = new THREE.Color(1,1,1);
    }

    geometry.computeFaceNormals();
    
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    var light = new THREE.DirectionalLight(0xF4FA58);
    light.position.set(10,10,10);
    scene.add(light);



    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
        renderer.render( scene, camera );
    }
}
