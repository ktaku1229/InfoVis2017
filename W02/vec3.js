Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
    var min = this.x;
    if(min > this.y){
	min = this.y;
    }
    if(min > this.z){
	min = this.z;
    }
    return min;
}

Vec3.prototype.mid = function()
{
    if(this.x > this.y){
	if(this.x < this.z){
	    return this.x;
	}else if(this.y > this.z){
	    return this.y;
	}else{
	    return z;
	}
    }else{
	if(this.x > this.z){
	    return this.x;
	}else if(this.y < this.z){
	    return this.y;
	}else{
	    return this.z;
	}
    }
}

Vec3.prototype.max = function()
{
    var max = this.x;
    if(max < this.y){
	max = this.y;
    }
    if(max < this.z){
	max = this.z;
    }
    return max;
}
    
	
