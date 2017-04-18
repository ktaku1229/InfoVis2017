function AreaOfTriangle(v0, v1, v2){
    var x1, y1, z1, x2, y2, z2;
    x1 = v1.x-v0.x;
    y1 = v1.y-v0.y;
    z1 = v1.z-v0.z;
    x2 = v2.x-v0.x;
    y2 = v2.y-v0.y;
    z2 = v2.z-v0.z;

    var x = y1*z2 - z1*y2;
    var y = z1*x2 - x1*z2;
    var z = x1*y2 - y1*x2;

    var norm = Math.sqrt(x*x + y*y + z*z);

    return norm/2;
}
