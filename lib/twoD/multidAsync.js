var multi = {}
var async = require('async');

multi.ascending = function (array01,cb)
{
	var result = [];
	async.eachSeries(array01,function(it,cbk)
	{
		ascending(it,function(ar)
		{
			result.push(ar);
			cbk();
		});
	},function(err)
	{
		if(err)
			throw err;
		else
			cb(result);
	})
}
multi.descending = function (array01,cb)
{
	var result = [];
	async.eachSeries(array01,function(it,cbk)
	{
		descending(it,function(ar)
		{
			result.push(ar);
			cbk();
		});
	},function(err)
	{
		if(err)
			throw err;
		else
			cb(result);
	})
}

function ascending(array01,cb)
{
	if(array01.length == 2)
	{
		if(array01[0] < array01[1])
			return cb(array01);
		else
		{
			tmp = array01[0];
			array01[0] = array01[1];
			array01[1] = tmp;
			return cb(array01);
		}
	}
	else if(array01.length == 1)
	{
		return cb(array01);
	}
	else
	{
		ascending(array01.slice(Math.floor(array01.length/2),array01.length),function(data)
		{
			var array02 = data;
			ascending(array01.slice(0,Math.floor(array01.length/2)),function(data)
			{
				var array01 = data;
				var array03 = [];
				ar01 = array01.length;
				ar02 = array02.length
				if(array01.length >= array02.length)
				{
					for(i=0;i< ar01+ar02;i++)
					{
						if(array01[0] <  array02[0])
						{
							array03.push(array01[0]);
							array01.shift();
						}
						else if(array01[0] ==  array02[0])
						{
							array03.push(array01[0]);
							array01.shift();
							
							array03.push(array02[0]);
							array02.shift();
						}
						else
						{
							array03.push(array02[0]);
							array02.shift();
						}
						if(array01.length == 0)
						{
							array03 = array03.concat(array02);
							break;
						}
						if(array02.length == 0)
						{
							array03 = array03.concat(array01);
							break;
						}
					}
					return cb(array03);
				}
				else
				{
					for(i=0;i < ar02+ar01;i++)
					{
						if(array01[0] <  array02[0])
						{
							array03.push(array01[0]);
							array01.shift();
						}
						else if(array01[0] ==  array02[0])
						{
							array03.push(array01[0]);
							array01.shift();
							
							array03.push(array02[0]);
							array02.shift();
						}
						else
						{
							array03.push(array02[0]);
							array02.shift();
						}
						if(array01.length == 0)
						{
							array03 = array03.concat(array02);
							break;
						}
						if(array02.length == 0)
						{
							array03 = array03.concat(array01);
							break;
						}
					}
					return cb(array03);
				}
			});
		});
	}
}
function descending(array01,cb)
{
	if(array01.length == 2)
	{
		if(array01[0] > array01[1])
			return cb(array01);
		else
		{
			tmp = array01[0];
			array01[0] = array01[1];
			array01[1] = tmp;
			return cb(array01);
		}
	}
	else if(array01.length == 1)
	{
		return cb(array01);
	}
	else
	{
		descending(array01.slice(Math.floor(array01.length/2),array01.length),function(data)
		{
			var array02 = data;
			descending(array01.slice(0,Math.floor(array01.length/2)),function(data)
			{
				var array01 = data;
				var array03 = [];
				ar01 = array01.length;
				ar02 = array02.length
				if(array01.length <= array02.length)
				{
					for(i=0;i < ar01+ar02;i++)
					{
						if(array01[0] >  array02[0])
						{
							array03.push(array01[0]);
							array01.shift();
						}
						else if(array01[0] ==  array02[0])
						{
							array03.push(array01[0]);
							array01.shift();
							
							array03.push(array02[0]);
							array02.shift();
						}
						else
						{
							array03.push(array02[0]);
							array02.shift();
						}
						if(array01.length == 0)
						{
							array03 = array03.concat(array02);
							break;
						}
						if(array02.length == 0)
						{
							array03 = array03.concat(array01);
							break;
						}
					}
					return cb(array03);
				}
				else
				{
					for(i=0;i < ar02+ar01;i++)
					{
						if(array01[0] >  array02[0])
						{
							array03.push(array01[0]);
							array01.shift();
						}
						else if(array01[0] ==  array02[0])
						{
							array03.push(array01[0]);
							array01.shift();
							
							array03.push(array02[0]);
							array02.shift();
						}
						else
						{
							array03.push(array02[0]);
							array02.shift();
						}
						if(array01.length == 0)
						{
							array03 = array03.concat(array02);
							break;
						}
						if(array02.length == 0)
						{
							array03 = array03.concat(array01);
							break;
						}
					}
					return cb(array03);
				}
			});
		});
	}
}
module.exports = multi;
