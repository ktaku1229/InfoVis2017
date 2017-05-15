/**
 * Created by kagawa on 2017/05/10.
 */
function main()
{
    var width = 300;
    var height = 300;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    var canvas = document.getElementById('canvas');
    renderer.setSize( width, height );
    canvas.appendChild( renderer.domElement );

    var geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('gouraud_Lam.vert').text,
        fragmentShader: document.getElementById('gouraud.frag').text,
        uniforms: {
            light_position: {type: 'v3', value: light.position}
        }
    });

    var torus_knot = new THREE.Mesh( geometry, material );
    scene.add( torus_knot );

    var scene2 = new THREE.Scene();
    var camera2 = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera2.position.set(0,0,5);
    scene2.add(camera2);

    var light2 = new THREE.PointLight();
    light2.position.set( 5, 5, 5 );
    scene2.add( light2 );

    var renderer2 = new THREE.WebGLRenderer();
    var canvas2 = document.getElementById('canvas2');
    renderer2.setSize( width, height );
    canvas2.appendChild( renderer2.domElement );

    var geometry2 = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material2 = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('phong.vert').text,
        fragmentShader: document.getElementById('phong_Lam.frag').text,
        uniforms: {
            light_position: {type: 'v3', value: light2.position}
        }
    });

    var torus_knot2 = new THREE.Mesh( geometry2, material2 );
    scene2.add( torus_knot2 );

    var scene3 = new THREE.Scene();
    var camera3 = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera3.position.set( 0, 0, 5 );
    scene3.add( camera3 );

    var light3 = new THREE.PointLight();
    light3.position.set( 5, 5, 5 );
    scene3.add( light3 );

    var renderer3 = new THREE.WebGLRenderer();
    var canvas3 = document.getElementById('canvas3');
    renderer3.setSize( width, height );
    canvas3.appendChild( renderer3.domElement );

    var geometry3 = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material3 = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('gouraud_Phong.vert').text,
        fragmentShader: document.getElementById('gouraud.frag').text,
        uniforms: {
            light_position: {type: 'v3', value: light3.position}
        }
    });

    var torus_knot3 = new THREE.Mesh( geometry3, material3 );
    scene3.add( torus_knot3 );

    var scene4 = new THREE.Scene();
    var camera4 = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera4.position.set( 0, 0, 5 );
    scene4.add( camera4 );

    var light4 = new THREE.PointLight();
    light4.position.set( 5, 5, 5 );
    scene4.add( light4 );

    var renderer4 = new THREE.WebGLRenderer();
    var canvas4 = document.getElementById('canvas4');
    renderer4.setSize( width, height );
    canvas4.appendChild( renderer4.domElement );

    var geometry4 = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material4 = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('phong.vert').text,
        fragmentShader: document.getElementById('phong_Phong.frag').text,
        uniforms: {
            light_position: {type: 'v3', value: light4.position}
        }
    });

    var torus_knot4 = new THREE.Mesh( geometry4, material4 );
    scene4.add( torus_knot4 );


    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot.rotation.x += 0.01;
        torus_knot.rotation.y += 0.01;
        renderer.render( scene, camera );

        torus_knot2.rotation.x += 0.01;
        torus_knot2.rotation.y += 0.01;
        renderer2.render( scene2, camera2 );

        torus_knot3.rotation.x += 0.01;
        torus_knot3.rotation.y += 0.01;
        renderer3.render( scene3, camera3 );

        torus_knot4.rotation.x += 0.01;
        torus_knot4.rotation.y += 0.01;
        renderer4.render( scene4, camera4 );
    }
}
